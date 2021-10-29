import { Flex, Box, Link } from '@chakra-ui/react';

import React from 'react';

import Image from 'next/image';
import ButtonLogin from '../buttonLogin';
import MenuLink from './menuLink';

import {MdHomeFilled, MdSearch, MdTv} from 'react-icons/md';


const Header: React.FC = () => {
  return (
    <Flex bgColor="gray.900" direction="row" pl="10" pr="10" pt="5" pb="5" align="center" justify="space-between">
      <Image src="/icon.svg" width="60" height="50" alt="dev+"/>

      <Flex justify="space-around" width="80" align="center" height="50" >
          <MenuLink leftIcon={<MdHomeFilled/>} route="/">Início</MenuLink>
          <MenuLink leftIcon={<MdSearch/>} route="/search">Pesquisa</MenuLink>
          <MenuLink leftIcon={<MdTv/>} route="/series">Séries</MenuLink>
      </Flex>

      <ButtonLogin />
    </Flex>
  );
}

export default Header;