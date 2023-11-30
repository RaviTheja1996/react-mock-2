import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HStack, Link as ChakraLink, Button, Image } from "@chakra-ui/react";

const Navbar = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const avatar = useSelector((store) => store.avatar);
  const handleLogin = () => {};
  const handleLogout = () => {};
  return (
    <HStack spacing={6} mx={"auto"} w={"20rem"}>
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
      {isAuth ? (
        <HStack spacing={6}>
          <Image src={avatar} w="2.2rem" h="2.2rem" />
          <Button onClick={handleLogout}>Logout</Button>
        </HStack>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </HStack>
  );
};

export default Navbar;
