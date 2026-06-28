import { useQuery } from "@tanstack/react-query";
import type { UsersResponse } from "../types/user";

export const useApi = (limit=10, skip=0) => {
    
  
  const fetchApi = async () => {
    const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`,);
    if(!response.ok) {
      throw new Error("fetch API is failed");
    }
    const data = await response.json();
    return data;
  };


  const { data, isLoading, isError, error } = useQuery<UsersResponse>({
    queryKey: ["users", limit, skip],
    queryFn: fetchApi,
  });


  return { data, isLoading, isError, error };
};
export default useApi;
