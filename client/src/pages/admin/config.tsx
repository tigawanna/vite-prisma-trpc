import { Route } from "@tanstack/router";
import { rootLayout } from "@/main";
import { AdminLayout } from "./AdminLayout";
import { AdminPage } from "./AdminPage";

const adminLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "admin",
  // auth guard implementation
  component: AdminLayout,
});
const indexRoute = new Route({
  getParentRoute: () => adminLayout,
  path: "/",
  component: AdminPage,
});

// profile route

export const adminRoute = adminLayout.addChildren([indexRoute]);
