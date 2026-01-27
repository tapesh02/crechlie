/**
 * Public/Unauthenticated Routes
 * Routes accessible to users who are not logged in
 */

import { ROUTE_PATHS } from "./constants";

export const publicRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    name: "Home",
    icon: "🏠",
    description: "Homepage and landing page",
  },
  {
    path: ROUTE_PATHS.ABOUT,
    name: "About",
    icon: "ℹ️",
    description: "About our services",
  },
  {
    path: ROUTE_PATHS.SIGNIN,
    name: "Sign In",
    icon: "🔐",
    description: "Login to your account",
  },
  {
    path: ROUTE_PATHS.SIGNUP,
    name: "Sign Up",
    icon: "✍️",
    description: "Create a new account",
  },
  {
    path: ROUTE_PATHS.FORGOT_PASSWORD,
    name: "Forgot Password",
    icon: "🔑",
    description: "Reset your password",
  },
];

/**
 * Get all public route paths
 * Useful for checking if a route is public
 */
export const getPublicRoutePaths = () => publicRoutes.map((route) => route.path);

/**
 * Check if a route is public
 */
export const isPublicRoute = (path) => getPublicRoutePaths().includes(path);

export default publicRoutes;
