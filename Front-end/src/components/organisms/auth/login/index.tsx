import LoginForm from "@/components/molecules/loginForm";
import { Flex, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      border={1}
      borderColor="gray.300"
      borderStyle="solid"
      p={8}
      borderRadius={12}
      boxShadow="lg"
      maxW={500}
      width="full"
      alignItems="center"
      flexDirection="column"
    >
      <Heading as="h2" size="lg" pb={8}>
        Sign up / Sign in
      </Heading>
      <LoginForm />
    </Flex>
  );
};
export default Login;
