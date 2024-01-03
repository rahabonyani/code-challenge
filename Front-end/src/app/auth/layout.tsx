import { Container, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Container height="100vh" maxWidth="100vw" bg="gray.50">
      <Flex justifyContent="center" alignItems="center" height="full">
        {children}
      </Flex>
    </Container>
  );
}
