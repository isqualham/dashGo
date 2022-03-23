import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){

    /* const [search, setSearch] = useState('')
    value={search}
    onChange={event => setSearch(event.target.value)}
 */

    /* const searchInputRef = useRef<HTMLInputElement>(null)
    pegar o valor com a Ref searchInputRef.current.value
    ref={searchInputRef} */      

    return(

        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
            >
                
                <Input
                    color="gray.50"
                    px="4"
                    mr="4"
                    variant="unstyled"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}
                    
                     

                />

                <Icon as={RiSearchLine} fontSize="20"/>

            </Flex>
        
    );
}