import { useQuery } from "@tanstack/react-query";

export const useApi = () => {
  const fetchApi = async () => {
    const response = await fetch( `https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    if(!response.ok) {
      throw new Error("fetch API is failed");
    }
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchApi,
  });
  return { data, isLoading, isError, error };
};
export default useApi;
