import { Outlet } from "@tanstack/router";
interface PostsLayoutProps {}

export function PostsLayout({}: PostsLayoutProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Outlet />
    </div>
  );
}
