import { Link, Outlet, useRouter } from "@tanstack/router";
import { Suspense, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { Nprogress } from "./components/navigation/pprogress/Nprogress";
import {
  DevTanStackQueryDevtools,
  DevTanStackRouterDevtools,
} from "./components/Devtools";
import { ThemeToggle } from "./components/navigation/Theme";
import { RoutesToolbar } from "./components/navigation/RoutesToolbar";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(false);
  // const isFetching = useIsFetching();
  const router = useRouter();
  const status = router.state.status;
  const toggleDrawer = () => {
    setDrawerOpen((open) => !open);
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center ">
      <Nprogress isAnimating={status === "pending"} />
      <div className="drawer ">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          onChange={toggleDrawer}
          checked={drawerOpen}
        />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full flex items-center justify-between min-h-12 sticky top-0 ">
            {/* toggle drawer icon */}
            <div className="flex-none md:hidden ">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>

            <div className="bg-muted border-b-2 flex items-center justify-center p-1">
              <Link to="/" className="font-bold text-3xl  ">
                Home
              </Link>
            </div>
            <div className="flex-none hidden md:flex">
              <ul className="w-full h-full gap-5 flex items-center justify-center">
                {/* Navbar menu content here */}

                <li className="w-full  flex items-center  justify-start gap-5 bg-muted">
                  <RoutesToolbar />
                </li>

                <ThemeToggle />
              </ul>
            </div>
          </div>
          {/* Page content here */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="flex flex-col  h-full bg-base-200 gap-2 justify-start items-center">
            {/* Sidebar content here */}

            <div className="bg-muted border-b-2 flex items-center justify-center p-3">
              <Link to="/" className="font-bold text-3xl p-2 ">
                Home
              </Link>
            </div>
            <li
              onClick={() => setDrawerOpen(false)}
              className="w-full h-full flex flex-col  items-center justify-start gap-5 bg-muted">
              <RoutesToolbar />
            </li>
            <ThemeToggle />
          </ul>
        </div>
      </div>

      <Suspense fallback={null}>
        <DevTanStackQueryDevtools position="right" />
        <DevTanStackRouterDevtools />
      </Suspense>
    </div>
  );
}

export default App;
