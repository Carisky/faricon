import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';


class TripService {
    static async create(data) {
        try {
            const response = await axios.post(ApiConfig.apiTripAdressADMIN, data,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating Trip:', error);
            throw error;
        }
    }
}

export default TripService