import { Link } from "@tanstack/router";

interface ProfilePageProps {}

export function ProfilePage({}: ProfilePageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      <h2 className="text-6xl">Profile Page</h2>

      <Link
        to="/profile/$id"
        params={{ id: "marko" }}
        className="text-2xl  text-accent-content hover:text-accent">
        Marko Profile
      </Link>
      <Link
        to="/profile/$id"
        params={{ id: "polo" }}
        className="text-2xl  text-accent-content hover:text-accent">
        Polo Profile
      </Link>
    </div>
  );
}
