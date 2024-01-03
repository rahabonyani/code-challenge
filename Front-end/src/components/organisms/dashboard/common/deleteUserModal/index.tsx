import ModalWrapper from "@/components/molecules/modal";
import { useDisclosure, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { DeleteUserModalProps } from "./type";
import { useDeleteUser } from "@/api/mutations/users";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "@/actions/users";

const DeleteUserModal = ({ id }: DeleteUserModalProps) => {
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: DeleteUser } = useDeleteUser();
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    setLoading(true);
    DeleteUser(id!, {
      onSuccess: (resp) => {
        setLoading(false);
        dispatch(save(resp));
        onClose();
      },
    });
  };

  const handleClickCancel = () => {
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      buttonLabel="Delete User"
      bgButton="red.500"
      colorScheme="red"
      modalTitle="Delete User"
    >
      <VStack pb={5}>
        <Text fontSize="xl">Do you want to delete user</Text>
        <HStack>
          <Button colorScheme="gray" onClick={handleClickCancel}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            onClick={handleClickDelete}
            isLoading={loading}
            loadingText="Deleting"
          >
            Delete
          </Button>
        </HStack>
      </VStack>
    </ModalWrapper>
  );
};
export default DeleteUserModal;
