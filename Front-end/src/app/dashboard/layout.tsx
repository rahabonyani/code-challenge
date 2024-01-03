import Navbar from "@/components/organisms/dashboard/common/navbar";
import { navItems } from "@/constants/navbar";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Container height="100vh" maxWidth="100vw" bg="gray.50">
      <Grid h="full" py={2} templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={3} bg="gray.100" rounded={6}>
          <Navbar navItems={navItems} />
        </GridItem>
        <GridItem colSpan={9} bg="gray.100" rounded={6} p={4}>
          {children}
        </GridItem>
      </Grid>
    </Container>
  );
}
