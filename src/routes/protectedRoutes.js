/**
 * Protected/Authenticated Routes
 * Routes accessible only to authenticated users
 * Some routes may require admin privileges
 */

import { ROUTE_PATHS } from "./constants";

export const protectedRoutes = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    name: "Dashboard",
    icon: "📊",
    description: "User dashboard with bookings and information",
    requiresAdmin: false,
  },
  {
    path: ROUTE_PATHS.PROFILE,
    name: "Profile",
    icon: "👤",
    description: "User profile management",
    requiresAdmin: false,
  },
  {
    path: ROUTE_PATHS.SETTINGS,
    name: "Settings",
    icon: "⚙️",
    description: "Account settings and preferences",
    requiresAdmin: false,
  },
  {
    path: ROUTE_PATHS.BOOKINGS,
    name: "Bookings",
    icon: "📅",
    description: "Manage your childcare bookings",
    requiresAdmin: false,
  },
];

/**
 * Admin-only Routes
 * Routes accessible only to admin users
 */
export const adminRoutes = [
  {
    path: ROUTE_PATHS.ADMIN,
    name: "Admin Panel",
    icon: "🛡️",
    description: "Admin dashboard",
    requiresAdmin: true,
  },
  {
    path: ROUTE_PATHS.ADMIN_CRECHES,
    name: "Manage Creches",
    icon: "🏢",
    description: "Manage creche listings",
    requiresAdmin: true,
  },
  {
    path: ROUTE_PATHS.ADMIN_USERS,
    name: "Manage Users",
    icon: "👥",
    description: "Manage user accounts",
    requiresAdmin: true,
  },
];

/**
 * Get all protected route paths
 */
export const getProtectedRoutePaths = () => protectedRoutes.map((route) => route.path);

/**
 * Get all admin route paths
 */
export const getAdminRoutePaths = () => adminRoutes.map((route) => route.path);

/**
 * Get all routes that require authentication
 */
export const getAllAuthenticatedRoutePaths = () => [
  ...getProtectedRoutePaths(),
  ...getAdminRoutePaths(),
];

/**
 * Check if a route requires authentication
 */
export const isProtectedRoute = (path) => getAllAuthenticatedRoutePaths().includes(path);

/**
 * Check if a route requires admin privileges
 */
export const isAdminRoute = (path) => getAdminRoutePaths().includes(path);

/**
 * Get route metadata by path
 */
export const getRouteMetadata = (path) => {
  const allRoutes = [...protectedRoutes, ...adminRoutes];
  return allRoutes.find((route) => route.path === path);
};

export default protectedRoutes;
