import { join } from "path";

enum pages {
  home,
  help = "help",
  refresh = "refresh",
}

type ChunkID = `${pages}`;

export const getStaticDir = () => {
  return join(__dirname, "..", "views");
};

export const getStaticPage = (chunk: ChunkID) => {
  return join(__dirname, "..", "views", chunk, "index.html");
};
