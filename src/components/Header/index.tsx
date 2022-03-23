import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../context/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNAv } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(){
    
    const {onOpen} = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })
    return(        
        
        <Flex 
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="20"
            align="center"


        >
            {!isWideVersion &&(
                <IconButton
                    aria-label="Open NAvigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr={2}
                >

                </IconButton>
            )}

            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex align="center" ml="auto">
                <NotificationsNAv />
                <Profile showProfileData={isWideVersion} />
            </Flex>
            
        </Flex>
    );
}