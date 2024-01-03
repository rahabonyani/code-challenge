import { Th, Thead, Tr } from "@chakra-ui/react";
import type {
  TableColumnHeaderProps,
  TableHeadProps,
  TableRowProps,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import type { TableHeadingItem } from "./type";

type baseHeadProps<T extends object> = {
  rowsHeadProps?: TableRowProps;
  thProps?: TableColumnHeaderProps;
  headData: TableHeadingItem<T>[];
} & TableHeadProps;

const TableHead = <T extends object>({
  rowsHeadProps,
  thProps,
  headData,
  ...props
}: baseHeadProps<T>) => {
  return (
    <Thead {...props}>
      <Tr {...rowsHeadProps}>
        {headData.map((item) => (
          <Th {...thProps} key={uuid()} color="white">
            {item.label}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHead;
