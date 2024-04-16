import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';

class DestinationService {
    static async findById(Id) {
        try {
            const response = await axios.get(`${ApiConfig.apiDestinationsAdressUSER}${Id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching destination:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiDestinationsAdressUSER,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching destination:', error);
            throw error;
        }
    }

}

export default DestinationService