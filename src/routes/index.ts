import { Router } from "express";
import { type Controller } from "../controllers";
import { getStaticAsset } from "../utils";
import characterRoutes from "./characters";

const router = Router();

const manageCookie: Controller = (req, res, next) => {
  const cookie: string = req.cookies["cookie"] ?? "-1";
  if (req.path.endsWith("/refresh")) res.cookie("cookie", "-1");
  else res.cookie("cookie", parseInt(cookie, 10) + 1);
  req.cookies.cookie = parseInt(cookie, 10) + 1;
  next();
};

router.use(manageCookie);

router.use(characterRoutes);

router.get("/", <Controller>((req, res) => {
  return res.sendFile(getStaticAsset(["home", "index.html"]));
}));

router.get("*/refresh", <Controller>((req, res) => {
  console.log("Refreshing progress...");
  return res.redirect(req.path.slice(0, -8));
}));

router.get("/help", <Controller>((_, res) => {
  return res.sendFile(getStaticAsset(["help", "index.html"]));
}));

export default router;
