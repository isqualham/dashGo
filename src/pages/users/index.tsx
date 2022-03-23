import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Box>
            <Header />

            <Flex w="100%" my={["4","4","6"]} maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex= "1" borderRadius={8} bg="gray.800" p={"8"}>
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="facebook" 
                                leftIcon={<Icon as={RiAddLine}  fontSize="20" />}
                                >
                                Criar Novo Usuário
                            </Button>   
                        </Link>                

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="facebook"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de Cadastro</Th>}
                                <Th width={["4","4","6"]}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="facebook"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">William de Freitas</Text>
                                        <Text fontSize="sm" color="gray.300">williamfacme@gmail.com</Text>
                                    </Box>
                                </Td>
                               {isWideVersion && <Td> 14 de março de 2022</Td>}
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="facebook" 
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                    Editar
                                    </Button> 
                                </Td>                                
                            </Tr> 
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>
            </Flex>

        </Box>
    );
}