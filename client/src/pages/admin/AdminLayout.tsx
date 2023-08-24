import { Outlet, useRouter } from "@tanstack/router";
import { useEffect } from "react";

interface AdminLayoutProps {}

export function AdminLayout({}: AdminLayoutProps) {
  const ls_is_authed = localStorage.getItem("is_authed");
  const is_authed = ls_is_authed === "true";
  const router = useRouter();
  useEffect(() => {
    if (!is_authed) {
      router.navigate({
        to: "/auth",
        search: {
          redirect: "/admin",
        },
      });
    }
  });
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
