export interface Post {
  id: number;
  title: string;
  body: string;
  status: "published" | "draft" | "block";
  topRate: boolean;
}

export type PostStatusType = "all" | "published" | "draft" | "block";
