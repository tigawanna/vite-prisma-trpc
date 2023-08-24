import { useRouter } from "@tanstack/router";
import { onePostRoute } from "./config";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

interface OnePostPageProps {}

export function OnePostPage({}: OnePostPageProps) {
  const onePost = onePostRoute.useLoader()();
  const router = useRouter();
  const history = router.history.location.href;
  const route_history = history.split("/");
  return (
    <div className="w-full h-full flex items-center justify-center">
      <BreadCrumbs route_history={route_history} />
      <div className="space-y-2 p-5">
        <h4 className="text-xl font-bold underline">{onePost.data?.title}</h4>
        <div className="text-sm">{onePost.data?.body}</div>B
      </div>
    </div>
  );
}
