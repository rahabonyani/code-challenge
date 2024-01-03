import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import type { headerProps } from "./type";

const Header = ({ title, onClick, showButton, children }: headerProps) => {
  return (
    <Grid
      width="full"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      bg="gray.600"
      p={2}
      rounded={6}
      boxShadow="lg"
    >
      <GridItem colSpan={6} h="10">
        <Heading as="h4" size="lg" color="green.400" fontWeight="medium">
          {title}
        </Heading>
      </GridItem>
      <GridItem colStart={12} colEnd={12} h="10">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Header;
