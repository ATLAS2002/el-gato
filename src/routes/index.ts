import { Router } from "express";
import { type Controller } from "../controllers";
import { getStaticPage } from "../utils";

const router = Router();

const manageCookie: Controller = (req, res, next) => {
  const cookie: string = req.cookies["cookie"] ?? "-1";
  if (req.path === "/refresh") res.cookie("cookie", "-1");
  else res.cookie("cookie", parseInt(cookie, 10) + 1);
  next();
};

router.use(manageCookie);

router.get("/", <Controller>((req, res) => {
  return res.status(200).json({ message: req.ip });
}));

router.get("/refresh", <Controller>((req, res) => {
  console.log("Refreshing progress...");
  return res.redirect("/");
}));

router.get("/help", <Controller>((req, res) => {
  return res.sendFile(getStaticPage("help"));
}));

export default router;
