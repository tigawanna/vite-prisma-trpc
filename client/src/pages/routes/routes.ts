import { adminRoute } from "../admin/config";
import { authRoute } from "../auth/config";
import { homeRoute } from "../home/config";
import { postsRoute } from "../posts/config";
import { profileRoute } from "../profile/config";
import { welcomeRoute } from "@/pages/welcome/config";
// ADD NEW IMPORT HERE

// START
export const routes = [
welcomeRoute,
homeRoute,
  profileRoute,
  authRoute,
  adminRoute,
  postsRoute,
];
// END
