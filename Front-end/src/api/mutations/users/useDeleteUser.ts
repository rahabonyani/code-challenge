import { User } from "@/models/user";
import axios from "axios";
import { useMutation } from "react-query";

interface Response {
  users: User[];
}

async function DeleteUser(id: number) {
  const { data } = await axios.delete<Response>(`/users/${id}`);
  return data.users;
}

export function useDeleteUser() {
  return useMutation((id: number) => DeleteUser(id));
}
