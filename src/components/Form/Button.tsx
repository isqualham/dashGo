import {Button as ChakraButton, ButtonProps as ChakraButtonProps} from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps{
    name: string;
}

export function Button({name, ...rest}: ButtonProps){
    return(

        <ChakraButton            
            mt="6"
            colorScheme="facebook"
            size="lg"
            {...rest}
        >       {name}
        </ChakraButton>
    );
}