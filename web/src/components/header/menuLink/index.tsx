import React from 'react';
import NextLink from 'next/link';

import { Link } from '@chakra-ui/react';

interface IParams {
  route: string;
  leftIcon?: any;
}


const MenuLink: React.FC<IParams> = ({route, children, leftIcon}) => {
  return (
    <NextLink href={route}>
      <Link fontSize="md" display="flex" alignItems="center" color="white">
        {leftIcon === undefined ? <></> : React.cloneElement(leftIcon, {
          style: {
            marginRight: 8
          }
        })}
        {children}
      </Link>
    </NextLink>
  );
}

export default MenuLink;