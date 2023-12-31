import { Box, chakra, Container, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"} id={"footer"}>
      <Container as={Stack} maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Text>© {new Date().getFullYear()} Trevor-X 403. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Telegram"} href={"https://t.me/KetapangGreyHatTeam2"}>
            <FaTelegram />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"https://www.youtube.com/channel/"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/jo27s_"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
