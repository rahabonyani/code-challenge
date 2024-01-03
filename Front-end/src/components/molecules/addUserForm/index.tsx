import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import type { addUserFormProps } from "./type";
import { useAddUser, useUpdateUser } from "@/api/mutations/users";
import { useDispatch } from "react-redux";
import { save } from "@/actions/users";

const AddUserForm = ({
  isEdit,
  firstname = "",
  lastname = "",
  age = "",
  onCloseModal,
  id,
}: addUserFormProps) => {
  const { mutate: AddUser } = useAddUser();
  const { mutate: UpdateUser } = useUpdateUser(id!);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    firstname: yup
      .string()
      .min(2, "userName is too short")
      .max(50, "userName is too long")
      .required("Please Enter Your Number"),
    lastname: yup
      .string()
      .min(2, "userName is too short")
      .max(50, "userName is too long")
      .required("Please Enter Your Number"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: firstname,
      lastname: lastname,
      age: age,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      if (isEdit) {
        UpdateUser(values, {
          onSuccess: (resp) => {
            setLoading(false);
            dispatch(save(resp));
            onCloseModal();
          },
        });
      } else {
        AddUser(values, {
          onSuccess: (resp) => {
            setLoading(false);
            dispatch(save(resp));
            onCloseModal();
          },
        });
      }
    },
  });
  return (
    <VStack maxW={500} w="100%">
      <Box py="8" width="100%">
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={
              formik.touched.firstname && Boolean(formik.errors.firstname)
            }
            pb={4}
            width="full"
          >
            <Input
              id="firstname"
              name="firstname"
              variant="filled"
              maxLength={11}
              value={formik.values.firstname}
              onChange={formik.handleChange}
              width="full"
              fontSize="sm"
              placeholder="First Name"
              h={50}
              _focus={{
                borderColor: "green.500",
              }}
            />
            {formik.touched.firstname && Boolean(formik.errors.firstname) && (
              <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={
              formik.touched.lastname && Boolean(formik.errors.lastname)
            }
            pb={4}
            width="full"
          >
            <Input
              id="lastname"
              name="lastname"
              variant="filled"
              maxLength={11}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              width="full"
              fontSize="sm"
              placeholder="Last Name"
              h={50}
              _focus={{
                borderColor: "green.500",
              }}
            />
            {formik.touched.lastname && Boolean(formik.errors.lastname) && (
              <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={formik.touched.age && Boolean(formik.errors.age)}
            pb={4}
            width="full"
          >
            <Input
              id="age"
              name="age"
              variant="filled"
              maxLength={11}
              value={formik.values.age}
              onChange={formik.handleChange}
              width="full"
              fontSize="sm"
              placeholder="Age"
              h={50}
              _focus={{
                borderColor: "green.500",
              }}
            />
            {formik.touched.age && Boolean(formik.errors.age) && (
              <FormErrorMessage>{formik.errors.age}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            isLoading={loading}
            loadingText="Sending"
            colorScheme="green"
            bg="green.500"
            color="white"
            type="submit"
            width="full"
          >
            {isEdit ? "Edit user" : "Add user"}
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default AddUserForm;
