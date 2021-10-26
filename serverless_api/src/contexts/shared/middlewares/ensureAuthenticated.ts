
// recebe o token por header -> valida na api do github -> permite continuar ou barra a request

import api from "../services/github_api";

// url : curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com/users/usuario-no-github -I

interface IResponse {
  message?: string;
  isAuthenticated: boolean;
}

interface IRequest {
  headers: {
    Authorization: string;
    username: string;
  }
}

async function ensureAuthenticated(data : IRequest): Promise<IResponse> {

  console.log(data.headers);

  const {username, Authorization} = data.headers;

  if(!Authorization) {
    return {
      isAuthenticated: false,
      message: 'token de autenticação é necessário'
    };
  }

  try {
    const result = await api.get(`/${username}`, {
      headers: {
        "Authorization": `token ${Authorization}`
      }
    });

    if(result.status === 200 ){
      return {
        isAuthenticated: true,
        message: 'usuário autenticado'
      }
    } else {
      return {
        isAuthenticated: false,
        message: 'token é inválido'
      }
    }
  }

  catch {
    return {
      isAuthenticated: false,
      message: 'algo deu errado ao fazer login'
    }
  }
}

export default ensureAuthenticated;