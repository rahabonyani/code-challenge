"use client";
import { useLoginWithUsernamePassword } from "@/api/mutations/auth";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import * as yup from "yup";

const LoginForm = () => {
  const router = useRouter();
  const { mutate: LoginWithUsername } = useLoginWithUsernamePassword();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClickShowPassword = () => setShow(!show);

  const validationSchema = yup.object({
    username: yup
      .string()
      .min(2, "userName is too short")
      .max(50, "userName is too long")
      .required("Please Enter Your Number"),
    password: yup
      .string()
      .length(6, "Password must be at least 6 characters long")
      .required("please enter the password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      LoginWithUsername(values, {
        onSuccess: (resp) => {
          setLoading(false);
          setCookie("auth-token", resp.user.token);
          router.push("/dashboard/users");
        },
      });
    },
  });
  return (
    <VStack maxW={500} w="100%">
      <Box py="8" width="100%">
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={
              formik.touched.username && Boolean(formik.errors.username)
            }
            pb={4}
            width="full"
          >
            <Input
              id="username"
              name="username"
              variant="filled"
              maxLength={11}
              value={formik.values.username}
              onChange={formik.handleChange}
              width="full"
              placeholder="username"
              h={50}
              _focus={{
                borderColor: "green.500",
              }}
            />
            {formik.touched.username && Boolean(formik.errors.username) && (
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={
              formik.touched.password && Boolean(formik.errors.password)
            }
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
                name="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                h={50}
                _focus={{
                  borderColor: "green.500",
                }}
                pr="10"
              />
              <InputRightElement width="10" height="10">
                <Button size="xl" onClick={handleClickShowPassword}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.password && Boolean(formik.errors.password) && (
              <FormErrorMessage mx="auto">
                {formik.errors.password}
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

export default LoginForm;
