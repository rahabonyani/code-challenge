import type { ReactNode } from "react";

export type TableHeadingItem<T extends object> = {
  /**
   * Used in table's row as label for column.
   */
  label: string;

  /**
   * Used in table's row as key for heading cell columns.
   */
  id: string | number;

  action?: (v: T) => ReactNode;
  dataIndex?: keyof T;
};
