/**
 * Routes Documentation
 * 
 * This directory contains the complete route configuration for the Crechlie application.
 * It's designed to be scalable, maintainable, and easy to extend as the app grows.
 * 
 * ## File Structure
 * 
 * - **constants.js**: Central place for all route paths and metadata
 * - **publicRoutes.js**: Configuration for public/unauthenticated routes
 * - **protectedRoutes.js**: Configuration for authenticated and admin routes
 * - **routeConfig.js**: Main configuration that combines all routes with utilities
 * - **index.js**: Clean export interface for all route utilities
 * 
 * ## Usage Examples
 * 
 * ### Import route paths
 * ```javascript
 * import { ROUTE_PATHS } from "@/routes";
 * 
 * // Use in links
 * <Link href={ROUTE_PATHS.DASHBOARD}>Go to Dashboard</Link>
 * ```
 * 
 * ### Check if route is protected
 * ```javascript
 * import { isProtectedRoute, isAdminRoute } from "@/routes";
 * 
 * if (isProtectedRoute("/dashboard")) {
 *   // Require authentication
 * }
 * ```
 * 
 * ### Get route access information
 * ```javascript
 * import { canAccessRoute, getRedirectPath } from "@/routes";
 * 
 * const canAccess = canAccessRoute("/admin", isAuth, isAdmin);
 * const redirect = getRedirectPath("/dashboard", isAuth, isAdmin);
 * ```
 * 
 * ### Use with Route Guard Component
 * ```javascript
 * import { RouteGuard } from "@/components/RouteGuard";
 * 
 * <RouteGuard path="/dashboard" isAuthenticated={user !== null}>
 *   <Dashboard />
 * </RouteGuard>
 * ```
 * 
 * ### Use with Hook
 * ```javascript
 * import { useRouteGuard } from "@/hooks/useRouteGuard";
 * 
 * const { canAccess, redirectPath, isProtected } = useRouteGuard(
 *   "/dashboard",
 *   isAuthenticated,
 *   isAdmin
 * );
 * ```
 * 
 * ### Get navigation menu items
 * ```javascript
 * import { navigationRoutes } from "@/routes";
 * 
 * // For public nav
 * navigationRoutes.public.forEach(route => {
 *   // Build nav item
 * });
 * 
 * // For authenticated nav
 * navigationRoutes.authenticated.forEach(route => {
 *   // Build nav item
 * });
 * ```
 * 
 * ## Adding New Routes
 * 
 * ### To add a new public route:
 * 1. Add path to `ROUTE_PATHS` in constants.js
 * 2. Add metadata to `ROUTE_METADATA` in constants.js
 * 3. Add route object to `publicRoutes` array in publicRoutes.js
 * 4. Create the page component in app/ directory
 * 
 * ### To add a new protected route:
 * 1. Add path to `ROUTE_PATHS` in constants.js
 * 2. Add metadata to `ROUTE_METADATA` in constants.js
 * 3. Add route object to `protectedRoutes` array in protectedRoutes.js
 * 4. Create the page component in app/ directory
 * 5. Wrap with `RouteGuard` or use `useRouteGuard` hook
 * 
 * ### To add a new admin route:
 * 1. Add path to `ROUTE_PATHS` in constants.js
 * 2. Add metadata to `ROUTE_METADATA` in constants.js (set requiresAdmin: true)
 * 3. Add route object to `adminRoutes` array in protectedRoutes.js
 * 4. Create the page component in app/admin/ directory
 * 5. Protect with RouteGuard or useRouteGuard hook
 * 
 * ## Route Metadata
 * 
 * Each route can have the following metadata:
 * - `title`: Page title for SEO
 * - `description`: Page description for SEO
 * - `requiresAuth`: Whether authentication is required
 * - `requiresAdmin`: Whether admin status is required
 * - `isPublic`: Whether route is publicly accessible
 * - `redirectIfAuthenticated`: Path to redirect to if user is already authenticated
 * - `redirectIfUnauthenticated`: Path to redirect to if user is not authenticated
 * 
 * ## Scalability Features
 * 
 * 1. **Centralized Configuration**: All routes defined in one place
 * 2. **Modular Structure**: Easy to extend with new route categories
 * 3. **Utility Functions**: Built-in helpers for common routing tasks
 * 4. **Type-Safe**: Can be extended with TypeScript types
 * 5. **Navigation Ready**: Routes automatically available for nav menus
 * 6. **SEO Metadata**: Built-in metadata for each route
 * 7. **Access Control**: Built-in authentication and admin checks
 * 8. **Breadcrumb Support**: Utility to generate breadcrumb trails
 */

export {};
