import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard (){
    return(
        <Flex
            direction="column" h="100vh"
        >
            <Header/>

            <Flex w="100%" my={["4","4","6"]} maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="large" mb="4"> Inscritos da semana</Text>
                        
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="large" mb="4"> Taxa de Abertura</Text>
                        
                    </Box>
                </SimpleGrid>
            </Flex>            
        </Flex>
    );
}