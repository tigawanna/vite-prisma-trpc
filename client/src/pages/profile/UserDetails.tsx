import { useParams, useRouter } from "@tanstack/router";
import { userDetailsRoute } from "./config";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

interface UserDetailsProps {}

export function UserDetails({}: UserDetailsProps) {
  const { id } = useParams({ from: userDetailsRoute.id });
  const router = useRouter();
  const history = router.history.location.href;
  const route_history = history.split("/");
  console.log(router);

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <BreadCrumbs route_history={route_history} />
      <h1 className="text-5xl font-bold">User Details </h1>
      <h3 className="text-3xl text-bold text-accent-content">{id}</h3>
    </div>
  );
}
