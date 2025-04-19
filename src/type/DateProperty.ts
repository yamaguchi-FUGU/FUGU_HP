// 日付プロパティの型
interface DateProperty {
  id: string;
  type: "date";
  date: {
    start: string;
    end: string | null;
    time_zone: string | null;
  };
}

export type { DateProperty };
