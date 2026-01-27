/**
 * Route Configuration
 * Central configuration for all routes in the application
 * This combines public and protected routes with their metadata
 */

import { ROUTE_PATHS, ROUTE_METADATA } from "./constants";
import { publicRoutes } from "./publicRoutes";
import { protectedRoutes, adminRoutes } from "./protectedRoutes";

/**
 * Combined route configuration
 */
export const routeConfig = {
  public: publicRoutes,
  protected: protectedRoutes,
  admin: adminRoutes,
};

/**
 * Navigation routes - for building navigation menus
 * Only includes routes that should appear in navigation
 */
export const navigationRoutes = {
  public: [
    { path: ROUTE_PATHS.HOME, label: "Home", icon: "🏠" },
    { path: ROUTE_PATHS.ABOUT, label: "About", icon: "ℹ️" },
  ],
  authenticated: [
    { path: ROUTE_PATHS.DASHBOARD, label: "Dashboard", icon: "📊" },
    { path: ROUTE_PATHS.BOOKINGS, label: "Bookings", icon: "📅" },
    { path: ROUTE_PATHS.PROFILE, label: "Profile", icon: "👤" },
    { path: ROUTE_PATHS.SETTINGS, label: "Settings", icon: "⚙️" },
  ],
  admin: [
    { path: ROUTE_PATHS.ADMIN, label: "Admin", icon: "🛡️" },
    { path: ROUTE_PATHS.ADMIN_CRECHES, label: "Creches", icon: "🏢" },
    { path: ROUTE_PATHS.ADMIN_USERS, label: "Users", icon: "👥" },
  ],
};

/**
 * Get all routes (both public and protected)
 */
export const getAllRoutes = () => [
  ...publicRoutes,
  ...protectedRoutes,
  ...adminRoutes,
];

/**
 * Get route metadata
 */
export const getRouteConfig = (path) => {
  const allRoutes = getAllRoutes();
  return allRoutes.find((route) => route.path === path);
};

/**
 * Get page metadata for SEO
 */
export const getPageMetadata = (path) => {
  return ROUTE_METADATA[path] || {};
};

/**
 * Helper function to build breadcrumb trails
 */
export const getBreadcrumbs = (path) => {
  const parts = path.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", path: ROUTE_PATHS.HOME }];

  let currentPath = "";
  parts.forEach((part) => {
    currentPath += `/${part}`;
    const route = getRouteConfig(currentPath);
    if (route) {
      breadcrumbs.push({ label: route.name, path: currentPath });
    }
  });

  return breadcrumbs;
};

/**
 * Check route access based on authentication status
 */
export const canAccessRoute = (path, isAuthenticated, isAdmin = false) => {
  const metadata = getPageMetadata(path);

  if (!metadata) {
    return true; // Route not in config, allow access
  }

  if (metadata.requiresAuth && !isAuthenticated) {
    return false;
  }

  if (metadata.requiresAdmin && !isAdmin) {
    return false;
  }

  return true;
};

/**
 * Get redirect path based on authentication status
 */
export const getRedirectPath = (path, isAuthenticated, isAdmin = false) => {
  const metadata = getPageMetadata(path);

  if (!metadata) {
    return null;
  }

  // If user is not authenticated and route requires auth
  if (metadata.requiresAuth && !isAuthenticated) {
    return metadata.redirectIfUnauthenticated || ROUTE_PATHS.SIGNIN;
  }

  // If user is authenticated and route should redirect authenticated users
  if (isAuthenticated && metadata.redirectIfAuthenticated) {
    return metadata.redirectIfAuthenticated;
  }

  // If user is not admin and route requires admin
  if (metadata.requiresAdmin && !isAdmin) {
    return ROUTE_PATHS.DASHBOARD; // Redirect to dashboard or could be ROUTE_PATHS.HOME
  }

  return null;
};

export default routeConfig;
