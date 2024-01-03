"use client";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const CheckOTPForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const validationSchema = yup.object({
    code: yup
      .string()
      .length(6, "Error.Please_Enter_Correct_Code")
      .required("Error.Please_Enter_Code"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      console.log(values);
    },
  });
  return (
    <VStack maxW={500} w="100%">
      <Box py="8" width="100%">
        {" "}
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={formik.touched.code && Boolean(formik.errors.code)}
            pb={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <InputGroup size="md">
              <Input
                id="otp"
                type={show ? "text" : "password"}
                variant="filled"
                name="code"
                placeholder="Enter password"
                value={formik.values.code}
                onChange={formik.handleChange}
                isInvalid={formik.touched.code && Boolean(formik.errors.code)}
                pr="10"
              />
              <InputRightElement width="10" height="10">
                <Button size="xl" onClick={handleClick}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.code && Boolean(formik.errors.code) && (
              <FormErrorMessage mx="auto">
                {formik.errors.code}
              </FormErrorMessage>
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
            Send
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default CheckOTPForm;
