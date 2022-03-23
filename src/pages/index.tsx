import { Flex, Stack, Button } from '@chakra-ui/react';
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('e-mail obrigatório').email('e-mail inválido'),
  password: yup.string().required('senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState;

  const  handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    //console.log(values)  

  }


  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center" 
      >

      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        >


          <Stack spacing="4">
            <Input name="email" label="e-mail" type="email" error={errors.email} {...register('email')} />
            <Input name="password" label="senha" type="password" error={errors.password} {...register('password')} />
            
          </Stack>

          <Button type="submit" mt="6" colorScheme="facebook" size="lg" isLoading={formState.isSubmitting}>
            Entrar
          </Button>

      </Flex>
      
    </Flex>
  )
}
