import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Post, PostStatusType } from "../types";

const fetchPosts = async (status: PostStatusType): Promise<Post[]> => {
  const result = await axios.get<Post[]>("http://localhost:3000/posts", {
    params: status !== "all" ? { status } : {},
  });

  return result.data;
};

const useGetPosts = (status: PostStatusType): UseQueryResult<Post[]> => {
  const query = useQuery({
    queryKey: ["posts", status],
    queryFn: () => fetchPosts(status),
    staleTime: 1000 * 10,
  });

  return query;
};

export default useGetPosts;
