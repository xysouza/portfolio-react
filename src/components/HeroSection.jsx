import { Box, Heading, Text, Button, VStack, Stack } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box
      bgGradient="linear(to-r, gray.800, gray.900)"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={8}
    >
      <VStack spacing={6} textAlign="center" maxW="4xl" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
        >
          Olá, meu nome é Adriano de Souza Oliveira
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          maxW="2xl"
          opacity={0.9}
        >
          Sou um técnico em Análise e Desenvolvimento de Sistemas, com experiência nas áreas administrativa e de licitações. Estou em busca de novas oportunidades e focado em desenvolvimento profissional contínuo.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mt={8}
          justifyContent="center"
        >
          <Button
            colorScheme="teal"
            size="lg"
            px={8}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s"
          >
            Veja meus projetos
          </Button>
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            size="lg"
            px={8}
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Saiba mais
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
}

export default HeroSection;