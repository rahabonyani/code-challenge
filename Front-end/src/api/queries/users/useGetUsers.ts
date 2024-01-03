import { User } from "@/models/user";
import axios from "axios";
import type { UseQueryOptions } from "react-query";
import { useQuery } from "react-query";

interface Users {
  users: User[];
}

async function getWebsiteUsers() {
  const { data } = await axios.get<Users>(`users`);
  return data.users;
}

export function useGetWebsiteBlogs(
  options?: UseQueryOptions<User[], User, User[], string[]>
) {
  return useQuery(["dashboard", "users"], () => getWebsiteUsers(), options);
}
