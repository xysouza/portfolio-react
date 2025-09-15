import { Box, Heading, Text, SimpleGrid, Stack, Button, VStack } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

function Projetos() {
  const projetos = [
    {
      titulo: "Sistema de Licitações",
      descricao:
        "Aplicação web para análise de editais e organização de documentos de habilitação.",
      link: "#",
      github: "https://github.com/seu-usuario/seu-projeto-1",
    },
    {
      titulo: "Gestão de Compras",
      descricao:
        "Ferramenta em Excel automatizada para controle de fornecedores, compras e relatórios.",
      link: "#",
      github: "https://github.com/seu-usuario/seu-projeto-2",
    },
    {
      titulo: "Portfólio Interativo",
      descricao:
        "Site em React com animações modernas e integração de APIs para mostrar habilidades técnicas.",
      link: "#",
      github: "https://github.com/seu-usuario/seu-projeto-3",
    },
  ];

  return (
    <Box
      bgGradient="linear(to-r, gray.900, black)"
      color="white"
      py={{ base: 12, md: 20 }}
      px={8}
      minH="100vh"
      id="projetos"
    >
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "5xl" }}
        textAlign="center"
        mb={{ base: 8, md: 16 }}
        fontWeight="extrabold"
        letterSpacing="tight"
      >
        Meus Projetos
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="7xl" mx="auto">
        {projetos.map((proj, idx) => (
          <Box
            key={idx}
            bg="gray.800"
            p={8}
            rounded="xl"
            shadow="lg"
            transition="all 0.3s"
            h="100%" // ocupa toda a altura
            _hover={{
              transform: "translateY(-10px)",
              shadow: "2xl",
              bg: "gray.700"
            }}
            mb={4} // Adicionando margem inferior
            mr={4} // Adicionando margem direita
          >
            <VStack align="flex-start" spacing={6} h="100%" justify="space-between">
              <Box>
                <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="teal.300" mb={2}>
                  {proj.titulo}
                </Heading>
                <Text fontSize="md" color="gray.300">
                  {proj.descricao}
                </Text>
              </Box>
              <Stack direction="row" spacing={4}>
                {proj.github && (
                  <Button
                    as="a"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="whiteAlpha"
                    variant="outline"
                    size="sm"
                    leftIcon={<FaGithub />}
                  >
                    GitHub
                  </Button>
                )}
                {proj.link && (
                  <Button
                    as="a"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="teal"
                    size="sm"
                    leftIcon={<FaLink />}
                  >
                    Ver projeto
                  </Button>
                )}
              </Stack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projetos;
