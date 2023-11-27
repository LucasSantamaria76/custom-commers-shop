import {forwardRef} from 'react'
import Link from 'next/link'

const NavLink = forwardRef((props, ref) => {
    const { as, href, ...rest } = props;
    return (
      <Link href={href} as={as}ref={ref} {...rest}/>      
    );
  });

export default NavLink