import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import type { modalProps } from "./type";

const ModalWrapper = ({
  isOpen,
  onOpen,
  onClose,
  children,
  buttonLabel,
  bgButton = "green.500",
  colorScheme = "green",
  modalTitle,
}: modalProps) => {
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={colorScheme}
        bg={bgButton}
        color="white"
        type="submit"
        width="full"
        fontWeight="medium"
      >
        {buttonLabel}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWrapper;
