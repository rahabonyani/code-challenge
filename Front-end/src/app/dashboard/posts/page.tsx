import { Box, Heading } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Page() {
  return (
    <Box>
      <Heading>Post page</Heading>
    </Box>
  );
}
