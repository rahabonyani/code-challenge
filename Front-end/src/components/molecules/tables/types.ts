import { TableHeadingItem } from "@/components/atoms/TableHead/type";
import type { ReactNode } from "react";

export type ListingTableProps<T extends object> = {
  headData: TableHeadingItem<T>[];
  bodyData?: T[];
  isLoading?: boolean;
};
