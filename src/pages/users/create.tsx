import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFromData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  
  const createUserFromSchema = yup.object().shape({
    name: yup.string().required('nome obrigatório'),
    email: yup.string().required('e-mail obrigatório').email('e-mail inválido'),
    password: yup.string().required('senha obrigatória').min(8,'no mínimo 8 caracter'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'as senhas precisam serem iguais')
  })

export default function UserCreate(){

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFromSchema)
      })
    
      const {errors} = formState;

      const  handleCreateUser: SubmitHandler<CreateUserFromData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        //console.log(values)  
    
      }
    
      
    return(
        <Box>
            <Header />

            <Flex w="100%" my={["4","4","6"]} maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box as="form" flex= "1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" label="nome completo" error={errors.name} {...register('name')} />
                            <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha" error={errors.password_confirmation} {...register('password_confirmation')} />
                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="facebook" isLoading={formState.isSubmitting}>Salvar</Button>

                        </HStack>

                    </Flex>
                    

                </Box>
            </Flex>

        </Box>
    );
}