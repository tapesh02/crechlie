/**
 * Route Constants
 * Centralized route paths and metadata for the application
 * Use these constants throughout the app to avoid hardcoding paths
 */

export const ROUTE_PATHS = {
  // Public/Unauthenticated routes
  HOME: "/",
  ABOUT: "/about",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  // Protected/Authenticated routes
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  BOOKINGS: "/bookings",

  // Admin/Special routes (if needed)
  ADMIN: "/admin",
  ADMIN_CRECHES: "/admin/creches",
  ADMIN_USERS: "/admin/users",

  // Error/Fallback routes
  NOT_FOUND: "/404",
  ERROR: "/error",
};

export const ROUTE_LABELS = {
  [ROUTE_PATHS.HOME]: "Home",
  [ROUTE_PATHS.ABOUT]: "About",
  [ROUTE_PATHS.SIGNIN]: "Sign In",
  [ROUTE_PATHS.SIGNUP]: "Sign Up",
  [ROUTE_PATHS.DASHBOARD]: "Dashboard",
  [ROUTE_PATHS.PROFILE]: "Profile",
  [ROUTE_PATHS.SETTINGS]: "Settings",
  [ROUTE_PATHS.BOOKINGS]: "Bookings",
  [ROUTE_PATHS.ADMIN]: "Admin",
  [ROUTE_PATHS.ADMIN_CRECHES]: "Manage Creches",
  [ROUTE_PATHS.ADMIN_USERS]: "Manage Users",
};

/**
 * Route metadata configuration
 * Defines properties for each route
 */
export const ROUTE_METADATA = {
  [ROUTE_PATHS.HOME]: {
    title: "Crechlie - Premium Childcare, Made Easy",
    description: "Welcome to Crechlie - Ireland's modern childcare solution",
    requiresAuth: false,
    isPublic: true,
  },
  [ROUTE_PATHS.ABOUT]: {
    title: "About Crechlie",
    description: "Learn more about our childcare services",
    requiresAuth: false,
    isPublic: true,
  },
  [ROUTE_PATHS.SIGNIN]: {
    title: "Sign In - Crechlie",
    description: "Sign in to your Crechlie account",
    requiresAuth: false,
    isPublic: true,
    redirectIfAuthenticated: ROUTE_PATHS.DASHBOARD,
  },
  [ROUTE_PATHS.SIGNUP]: {
    title: "Sign Up - Crechlie",
    description: "Create a new Crechlie account",
    requiresAuth: false,
    isPublic: true,
    redirectIfAuthenticated: ROUTE_PATHS.DASHBOARD,
  },
  [ROUTE_PATHS.FORGOT_PASSWORD]: {
    title: "Forgot Password - Crechlie",
    description: "Reset your Crechlie password",
    requiresAuth: false,
    isPublic: true,
    redirectIfAuthenticated: ROUTE_PATHS.DASHBOARD,
  },
  [ROUTE_PATHS.RESET_PASSWORD]: {
    title: "Reset Password - Crechlie",
    description: "Create a new password for your account",
    requiresAuth: false,
    isPublic: true,
  },
  [ROUTE_PATHS.DASHBOARD]: {
    title: "Dashboard - Crechlie",
    description: "Your Crechlie dashboard",
    requiresAuth: true,
    isPublic: false,
    redirectIfUnauthenticated: ROUTE_PATHS.SIGNIN,
  },
  [ROUTE_PATHS.PROFILE]: {
    title: "Profile - Crechlie",
    description: "Manage your profile",
    requiresAuth: true,
    isPublic: false,
    redirectIfUnauthenticated: ROUTE_PATHS.SIGNIN,
  },
  [ROUTE_PATHS.SETTINGS]: {
    title: "Settings - Crechlie",
    description: "Manage your settings",
    requiresAuth: true,
    isPublic: false,
    redirectIfUnauthenticated: ROUTE_PATHS.SIGNIN,
  },
  [ROUTE_PATHS.BOOKINGS]: {
    title: "Bookings - Crechlie",
    description: "Manage your bookings",
    requiresAuth: true,
    isPublic: false,
    redirectIfUnauthenticated: ROUTE_PATHS.SIGNIN,
  },
  [ROUTE_PATHS.ADMIN]: {
    title: "Admin - Crechlie",
    description: "Admin panel",
    requiresAuth: true,
    requiresAdmin: true,
    isPublic: false,
    redirectIfUnauthenticated: ROUTE_PATHS.SIGNIN,
  },
};
