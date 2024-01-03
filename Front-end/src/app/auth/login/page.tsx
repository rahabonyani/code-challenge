import Login from "@/components/organisms/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page | Get userName",
};

export default function Page() {
  return <Login />;
}
