import express, { json, static as static_ } from "express";
import cookieParser from "cookie-parser";
import { getStaticAsset } from "./utils";
import routes from "./routes";

const PORT = 8000;

const app = express();

app.use(json());
app.use(cookieParser());
app.use(static_(getStaticAsset()));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});
