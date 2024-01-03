import AddUserForm from "@/components/molecules/addUserForm";
import ModalWrapper from "@/components/molecules/modal";
import { useDisclosure } from "@chakra-ui/react";
import { AddOrEditUserModalProps } from "./type";

const AddOrEditUserModal = ({
  isEdit = false,
  firstname,
  lastname,
  age,
  id,
}: AddOrEditUserModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalWrapper
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      buttonLabel={isEdit ? "Edit User" : "Add User"}
      modalTitle={isEdit ? "Edit User" : "Add User"}
    >
      <AddUserForm
        onCloseModal={onClose}
        isEdit={isEdit}
        firstname={firstname}
        lastname={lastname}
        age={age}
        id={id}
      />
    </ModalWrapper>
  );
};
export default AddOrEditUserModal;
