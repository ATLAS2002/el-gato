import express, { json, static as static_ } from "express";
import { getStaticDir } from "./utils";
import cookieParser from "cookie-parser";

import routes from "./routes";

const PORT = 8000;

const app = express();

app.use(json());
app.use(cookieParser());
app.use(static_(getStaticDir()));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});
