import { User } from "@/models/user";
import axios from "axios";
import { useMutation } from "react-query";

interface UserData {
  firstname: string;
  lastname: string;
  age?: string;
}

interface Response {
  users: User[];
}

async function UpdateUser(id: number, body: UserData) {
  const { data } = await axios.put<Response>(`/users/${id}`, body);
  return data.users;
}

export function useUpdateUser(id: number) {
  return useMutation((body: UserData) => UpdateUser(id, body));
}
