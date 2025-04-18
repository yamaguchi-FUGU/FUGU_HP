// マルチセレクトプロパティの型
interface MultiSelectProperty {
  id: string;
  type: "multi_select";
  multi_select: Array<{
    id?: string;
    name?: string;
    color?: string;
  }>;
}

export type { MultiSelectProperty };
