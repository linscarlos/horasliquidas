import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
    className: string;
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ className, children, activeClassName, ...rest}: ActiveLinkProps) {
    
const { asPath } = useRouter();

{asPath === rest.href && (className = activeClassName)}

    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    )
}