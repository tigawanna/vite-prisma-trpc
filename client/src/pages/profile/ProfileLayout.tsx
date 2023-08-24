import { Outlet } from "@tanstack/router";

interface ProfileLayoutProps {}

export function ProfileLayout({}: ProfileLayoutProps) {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
