import { join } from "path";

enum pages {
  home = "home",
  help = "help",
  refresh = "refresh",
  characters = "characters",
}

type ChunkID = `${pages}`;
type HTMLFile = `${string}.html`;
type ChunkType = ChunkID | [ChunkID, ...string[], HTMLFile];

const pathToViews = [__dirname, "..", "views"];

export const getStaticAsset = (chunks?: ChunkType): string => {
  if (!chunks) return join(...pathToViews);
  return join(...pathToViews, ...chunks);
};
