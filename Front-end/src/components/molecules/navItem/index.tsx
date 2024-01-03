import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { navItemProps } from "./type";

const NavItem = ({ title, href, Icon }: navItemProps) => {
  return (
    <Box width="100%">
      <Link href={href}>
        <HStack
          py="3"
          borderBottom="1px"
          borderColor="gray.700"
          width="100%"
          cursor="pointer"
        >
          <Box fontSize="xl" px="2.5">
            <Icon />
          </Box>
          <Text>{title}</Text>
        </HStack>
      </Link>
    </Box>
  );
};

export default NavItem;
