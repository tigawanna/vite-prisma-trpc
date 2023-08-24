import { Link } from "@tanstack/router";

interface RoutesToolbarProps {

}

export function RoutesToolbar({}:RoutesToolbarProps){
return (
  <div className="flex flex-col md:flex-row gap-3">
    <Link to="/" activeProps={{ className: "text-info font-bold" }}>
      Home
    </Link>
    <Link to="/posts" activeProps={{ className: "text-info font-bold" }}>
      posts
    </Link>

    <Link to="/profile" activeProps={{ className: "text-info font-bold" }}>
      profile
    </Link>
    <Link to="/admin" activeProps={{ className: "text-info font-bold" }}>
      admin
    </Link>
  </div>
);
}
