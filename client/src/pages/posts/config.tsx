import { Route } from "@tanstack/router";
import { PostsLayout } from "./PostsLayout";
import { PostsPage } from "./PostsPage";
import { fetchPostById, fetchPosts } from "../../state/posts/query";
import { useQuery } from "@tanstack/react-query";
import { OnePostPage } from "./OnePostPage";
import { rootLayout } from "@/main";

const postsLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "posts",
  component: PostsLayout,
});

export const postsIndexRoute = new Route({
  getParentRoute: () => postsLayout,
  path: "/",
  loader: async ({ context: { queryClient } }) => {
    await queryClient?.ensureQueryData({
      queryKey: ["posts"],
      queryFn: fetchPosts,
    });
    return () => useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  },
  component: (props) => {
    // @ts-expect-error
    return <PostsPage props={props} />;
  },
});

export const onePostRoute = new Route({
  getParentRoute: () => postsLayout,
  path: "$postId",
  loader: async ({ params: { postId }, context: { queryClient } }) => {
    await queryClient?.ensureQueryData({
      queryKey: ["posts", postId],
      queryFn: () => fetchPostById(postId),
    });

    return () =>
      useQuery({
        queryKey: ["posts", postId],
        queryFn: () => fetchPostById(postId),
        enabled: !!postId,
      });
  },
  component: OnePostPage,
});

export const postsRoute = postsLayout.addChildren([
  postsIndexRoute,
  onePostRoute,
]);
