import { FileObject } from "./FileObject";

// カバー画像の型
type Cover = {
  type: "file";
  file: FileObject;
} | {
  type: "external";
  external: {
    url: string;
  };
};

export type { Cover };
