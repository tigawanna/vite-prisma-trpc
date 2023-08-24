import { Link } from "@tanstack/router";
import { onePostRoute, postsIndexRoute } from "./config";

interface PostsPageProps {}

export function PostsPage({}: PostsPageProps) {
  const postsQuery = postsIndexRoute.useLoader()();

  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center">
      <ul className="list-disc pl-4 ">
        {postsQuery.data?.map((post) => {
          return (
            <li key={post.id} className="whitespace-nowrap">
              <Link
                to={onePostRoute.to}
                params={{ postId: post.id }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
                <div>{post.title.substring(0, 20)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
