import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
    shouldMatchExactHref?: boolean
}

export function ActiveLink({children,shouldMatchExactHref = false, ...rest}: ActiveLinkProps){
    const {asPath} = useRouter();
    let isAtive = false;

    if(shouldMatchExactHref && (asPath == rest.href || asPath == rest.as)){
        isAtive = true;
    }

    if(!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || 
        (asPath.startsWith(String(rest.as))))){
            isAtive = true;            
        }

    return(
        <Link {...rest}>
            {cloneElement(children,{
                color: isAtive ? 'cyan.400' : 'gray.50'
            })}
        </Link>
    );
}