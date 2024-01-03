import { TableHeadingItem } from "@/components/atoms/TableHead/type";
import AddOrEditUserModal from "@/components/organisms/dashboard/common/addOrEditUserModal";
import DeleteUserModal from "@/components/organisms/dashboard/common/deleteUserModal";
import { User } from "@/models/user";
import { HStack } from "@chakra-ui/react";

export const userHeadTable: TableHeadingItem<User>[] = [
  { label: "First Name", dataIndex: "firstname", id: 0 },
  { label: "Last Name", dataIndex: "lastname", id: 3 },
  { label: "age", dataIndex: "age", id: 2 },
  {
    label: "Action",
    id: 5,
    action: (props) => {
      return (
        <HStack spacing={5}>
          <DeleteUserModal id={props._id} />
          <AddOrEditUserModal
            isEdit={true}
            firstname={props.firstname}
            lastname={props.lastname}
            age={props.age}
            id={props._id}
          />
        </HStack>
      );
    },
  },
];
