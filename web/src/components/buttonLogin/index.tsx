
import React, { useState } from 'react';

import { FaGithub } from 'react-icons/fa';
import { Button } from '@chakra-ui/button';


const ButtonLogin: React.FC = () => {

  const [logged, setLogged] = useState(false);

  return (
   <>
    {
      logged === false ? (
        <Button fontSize="md" colorScheme="purple" width="50" height="12" leftIcon={<FaGithub  color="#ffff"/>}>Login</Button>
      ) : (
        <div></div>
      )
    }
   </>
  );
}

export default ButtonLogin;