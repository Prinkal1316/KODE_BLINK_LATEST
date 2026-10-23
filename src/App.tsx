/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, useRouter } from "@/components/router";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  SolutionsPage,
  SmartReceiptPage,
  PortfolioPage,
  ContactPage,
} from "@/components/kodeblink-site";

function RouteRenderer() {
  const { currentPath } = useRouter();

  // Normalize path
  const normalizedPath = currentPath.toLowerCase().replace(/\/+$/, "") || "/";

  switch (normalizedPath) {
    case "/about":
      return <AboutPage />;
    case "/services":
      return <ServicesPage />;
    case "/solutions":
      return <SolutionsPage />;
    case "/smart-receipt":
      return <SmartReceiptPage />;
    case "/portfolio":
      return <PortfolioPage />;
    case "/contact":
      return <ContactPage />;
    case "/":
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <RouteRenderer />
    </RouterProvider>
  );
}
