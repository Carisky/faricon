import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';

class UserLoginService {
    static async login(username,password) {
        try {
            const response = await axios.get(ApiConfig.apiLoginAdress,{
                headers: {
                    'Authorization':  "Basic "+btoa(`${username}:${password}`)
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }
    static async logout() {
        try {
            const response = await axios.get(ApiConfig.apiLogOutAdress,{
                headers: {
                    'Authorization':  AuthHeaders.user
                  }
            });
            return response;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }
}

export default UserLoginService