import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
} from "@tanstack/react-query";
import {
  ErrorComponent,
  Router,
  RouterContext,
  RouterProvider,
} from "@tanstack/router";

import App from "./App";
import { routes } from "./pages/routes/routes";

export const queryClient: QueryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_, __, ___, mutation) => {
      if (Array.isArray(mutation.meta?.invalidates)) {
        return queryClient.invalidateQueries({
          queryKey: mutation.meta?.invalidates,
        });
      }
    },
  }),

  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const routerContext = new RouterContext<{
  queryClient: typeof queryClient;
}>();

// Create a root route
export const rootLayout = routerContext.createRootRoute({
  component: App,
  // errorComponent: ErrorComponent,
});

const routeTree = rootLayout.addChildren(routes);

export const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
});

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>,
);
