import { IconType } from "react-icons";

export type navItemProps = {
  title: string;
  href: string;
  icon: IconType;
};

export type navbarProps = {
  navItems: navItemProps[];
};
