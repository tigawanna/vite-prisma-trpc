import { Outlet, useRouter, useSearch } from "@tanstack/router";
import { useEffect } from "react";
import { authlayout } from "./config";

interface AuthLayoutProps {}

export function AuthLayout({}: AuthLayoutProps) {
  const ls_is_authed = localStorage.getItem("is_authed");
  const is_authed = ls_is_authed === "true";
  const router = useRouter();
  const { redirect } = useSearch({ from: authlayout.id });

  //  if already , redirect fomr the login page to the recent page
  useEffect(() => {
    if (is_authed) {
      router.navigate({
        to: redirect,
        // @ts-expect-error
        search: (prev) => ({ redirect: prev?.redirect }),
      });
    }
  });
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
