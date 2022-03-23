import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({isCurrent=false, number}: PaginationItemProps){
    if(isCurrent){
        return (
            
            <Button 
                size="sm"
                font-size="xs"
                colorScheme="facebook"
                width="4"
                disabled
                _disabled={{
                    bg:'Cyan.700',
                    cursor: 'default',
                }}
                > {number}
            </Button>
        )
    }

    return(

        <Button 
            size="sm"
            font-size="xs"            
            width="4"
            bg="gray.700"
            _hover={{
                bg:'gray.500'
            }}

            > {number}
        </Button>
    )
}