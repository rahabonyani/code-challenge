import { Box, Skeleton, Table } from "@chakra-ui/react";
import type { ListingTableProps } from "./types";
import TableHead from "@/components/atoms/TableHead";
import TableBody from "@/components/atoms/TableBody";

const DataTable = <T extends object>({
  headData,
  bodyData,
  isLoading,
}: ListingTableProps<T>) => {
  return (
    <Box
      borderColor="whiteAlpha.300"
      overflow="auto"
      width="full"
      borderWidth={1}
      rounded="5"
      mt="8"
    >
      <Table variant="striped">
        <TableHead
          headData={headData}
          bg="gray.400"
          position="sticky"
          top={0}
          zIndex={1}
        />
        <TableBody bodyData={bodyData} bg="gray.200" headData={headData} />
      </Table>
      <Skeleton isLoaded={!isLoading} height="50px" />
    </Box>
  );
};

export default DataTable;
