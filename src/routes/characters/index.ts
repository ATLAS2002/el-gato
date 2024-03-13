import { Router } from "express";
import { type Controller } from "../../controllers";
import { getStaticAsset } from "../../utils";

const characterRoutes = Router();

characterRoutes.get("/bingus", <Controller>((req, res) => {
  return res.sendFile(
    getStaticAsset(["characters", "bingus", "0", "index.html"])
  );
}));

export default characterRoutes;
