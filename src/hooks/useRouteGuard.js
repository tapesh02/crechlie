/**
 * Route Guard Hook
 * Hook to check authentication status and route access
 * 
 * Usage:
 * const { isAuthenticated, isAdmin, canAccess, redirectPath } = useRouteGuard("/dashboard");
 */

import { useCallback } from "react";
import { canAccessRoute, getRedirectPath, getPageMetadata } from "../routes";

export const useRouteGuard = (path, isAuthenticated = false, isAdmin = false) => {
  const metadata = getPageMetadata(path);

  const canAccess = useCallback(() => {
    return canAccessRoute(path, isAuthenticated, isAdmin);
  }, [path, isAuthenticated, isAdmin]);

  const getRedirect = useCallback(() => {
    return getRedirectPath(path, isAuthenticated, isAdmin);
  }, [path, isAuthenticated, isAdmin]);

  return {
    canAccess: canAccess(),
    redirectPath: getRedirect(),
    metadata,
    isProtected: metadata?.requiresAuth || false,
    isAdminOnly: metadata?.requiresAdmin || false,
  };
};

export default useRouteGuard;
