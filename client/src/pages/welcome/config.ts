import { rootLayout } from "@/main";;
import { Route } from "@tanstack/router";
import { WelcomePage } from "./Welcome";
import { WelcomeLayout } from "./WelcomeLayout";

//Welcome route layout
const WelcomeRouteLayout = new Route({
    getParentRoute: () => rootLayout,
    path: "/welcome",
    component: WelcomeLayout,
});

//Welcome default route
const WelcomeIndexRoute = new Route({
    getParentRoute: () => WelcomeRouteLayout,
    path: "/",
    component: WelcomePage,
});


export const welcomeRoute = WelcomeRouteLayout.addChildren([
    WelcomeIndexRoute,
])
