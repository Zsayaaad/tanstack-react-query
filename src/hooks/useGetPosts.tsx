import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../types";

const fetchPosts = async (): Promise<Post[]> => {
  const result = await axios.get<Post[]>("http://localhost:3000/posts");

  return result.data;
};

const useGetPosts = (): UseQueryResult<Post[]> => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 10,
  });

  console.log(query);

  return query;
};

export default useGetPosts;
