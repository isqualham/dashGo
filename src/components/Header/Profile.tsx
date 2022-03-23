import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return(

        <Flex align="center">
            {showProfileData &&(
                <Box mr="4" textAlign="right">
                <Text>William de Freitas</Text>  
                <Text>williamfacme@gmail.com</Text>                      
            </Box>
            )}

            <Avatar size="md" name="william de freitas" src="https://github.com/isqualham.png" />

        </Flex>        

        
        
    );
}