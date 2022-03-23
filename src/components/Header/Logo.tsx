import {Text} from '@chakra-ui/react'
import Link from 'next/link';

export function Logo(){
    return(
        <Link href="/">
            <Text
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"

            >
                <a href="#">DashGo</a>
                <Text
                    as="span" 
                    ml="1"
                    color="cyan.500"
                >.
                </Text>
            </Text>
        </Link>

    );
}