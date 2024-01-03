import NavItem from "@/components/molecules/navItem";
import { VStack } from "@chakra-ui/react";
import type { navbarProps } from "./type";

const Navbar = ({ navItems }: navbarProps) => {
  return (
    <VStack width="100%" pt={20} pb={10} px={4}>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          href={item.href}
          Icon={item.icon}
        />
      ))}
    </VStack>
  );
};

export default Navbar;
