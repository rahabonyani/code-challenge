import CheckOtp from "@/components/organisms/auth/checkotp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page | Check password",
};

export default function Page() {
  return <CheckOtp />;
}
