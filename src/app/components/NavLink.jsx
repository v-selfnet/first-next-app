'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import myClassName from '../utilities/myClassName';

const NavLink = ({children, href, exact=false, activeClassName, ...props}) => {
    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    const classes = myClassName(props.classNane, active && activeClassName);
    if(classes){
        props.className = classes
    }
    return (
        <div>
            <Link href={href} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;