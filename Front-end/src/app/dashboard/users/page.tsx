import Users from "@/components/organisms/dashboard/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default function Page() {
  return <Users />;
}
