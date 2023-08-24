import { Route } from "@tanstack/router";
import { ProfilePage } from "./ProfilePage";
import { ProfileLayout } from "./ProfileLayout";
import { ProfileUser } from "./ProfileUser";
import { rootLayout } from "@/main";
import { UserDetails } from "./UserDetails";

const profileLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "profile",
  component: ProfileLayout,
});
const profileIndexRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "/",
  component: ProfilePage,
});
const userRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "$id",
  component: ProfileUser,
});
export const userDetailsRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "/$id/details",
  component: UserDetails,
});
// profile route

export const profileRoute = profileLayout.addChildren([
  profileIndexRoute,
  userRoute,
  userDetailsRoute,
]);
