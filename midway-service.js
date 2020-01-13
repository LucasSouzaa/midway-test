import { get } from 'axios';
import { authCredentials } from './auth-service';

const API_HOST = "https://fake-api.com" 

const overdraftDetalhes = async (username) => {
  console.log(username)

  let headerInfo = { 'correlationId': '458639' }
  
  return await get(`${API_HOST}/users/` + username, {
      ...authCredentials(),
      ...headerInfo
    })
}

export { overdraftDetalhes };
