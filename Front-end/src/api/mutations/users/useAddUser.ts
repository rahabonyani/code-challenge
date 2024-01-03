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

async function AddUser(body: UserData) {
  const { data } = await axios.post<Response>(`/users`, body);
  return data.users;
}

export function useAddUser() {
  return useMutation((body: UserData) => AddUser(body));
}
