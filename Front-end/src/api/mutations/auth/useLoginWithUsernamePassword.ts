import axios from "axios";
import { useMutation } from "react-query";

export interface LoginWithMobilePasswordData {
  username: string;
  password: string;
}

interface LoginWithUsernamePassword {
  user: {
    _id?: number;
    token: string;
    username: string;
  };
}

async function loginWithUsernamePassword(body: LoginWithMobilePasswordData) {
  const { data } = await axios.post<LoginWithUsernamePassword>(
    "/auth/registerAndLogin",
    body
  );
  return data;
}

export function useLoginWithUsernamePassword() {
  return useMutation((body: LoginWithMobilePasswordData) =>
    loginWithUsernamePassword(body)
  );
}
