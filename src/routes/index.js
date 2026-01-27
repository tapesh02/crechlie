/**
 * Route Index
 * Export all route-related utilities and configurations
 * This provides a clean interface for importing routes throughout the app
 */

// Constants
export { ROUTE_PATHS, ROUTE_LABELS, ROUTE_METADATA } from "./constants";

// Public Routes
export {
  publicRoutes,
  getPublicRoutePaths,
  isPublicRoute,
} from "./publicRoutes";

// Protected Routes
export {
  protectedRoutes,
  adminRoutes,
  getProtectedRoutePaths,
  getAdminRoutePaths,
  getAllAuthenticatedRoutePaths,
  isProtectedRoute,
  isAdminRoute,
  getRouteMetadata,
} from "./protectedRoutes";

// Route Configuration
export {
  routeConfig,
  navigationRoutes,
  getAllRoutes,
  getRouteConfig,
  getPageMetadata,
  getBreadcrumbs,
  canAccessRoute,
  getRedirectPath,
} from "./routeConfig";
