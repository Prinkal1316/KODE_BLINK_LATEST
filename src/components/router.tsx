import React, { createContext, useContext, useEffect, useState } from "react";

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  // Normalize path from window.location.pathname or hash
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && hash.startsWith("/")) return hash;
    return window.location.pathname || "/";
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && hash.startsWith("/")) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || "/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    if (to === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Update history
    try {
      window.history.pushState({}, "", to);
    } catch {
      window.location.hash = to;
    }
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeProps?: { className?: string };
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, activeProps, className = "", onClick, children, ...rest }, ref) => {
    const { currentPath, navigate } = useRouter();
    const isActive = currentPath === to;
    const finalClassName = `${className} ${isActive && activeProps?.className ? activeProps.className : ""}`.trim();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        navigate(to);
      }
    };

    return (
      <a
        ref={ref}
        href={to}
        onClick={handleClick}
        className={finalClassName}
        aria-current={isActive ? "page" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
