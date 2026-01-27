/**
 * Route Guard Component
 * Component to protect routes based on authentication status
 * 
 * Usage:
 * <RouteGuard path="/dashboard" isAuthenticated={isAuthenticated}>
 *   <Dashboard />
 * </RouteGuard>
 */

"use client";

import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getRedirectPath } from "../routes";

function RouteGuard({
  path,
  isAuthenticated,
  isAdmin = false,
  children,
  fallback = null,
}) {
  const router = useRouter();
  const redirectPath = getRedirectPath(path, isAuthenticated, isAdmin);
  const shouldRedirect = !!redirectPath;

  useEffect(() => {
    if (shouldRedirect) {
      router.push(redirectPath);
    }
  }, [shouldRedirect, redirectPath, router]);

  if (shouldRedirect) {
    return fallback || <div>Redirecting...</div>;
  }

  return children;
}

RouteGuard.propTypes = {
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

RouteGuard.defaultProps = {
  isAdmin: false,
  fallback: null,
};

export { RouteGuard };
export default RouteGuard;
