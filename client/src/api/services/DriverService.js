import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';


class DriverService {
    static async findById(Id) {
        try {
            const response = await axios.get(`${ApiConfig.apiDriversAdressADMIN}${Id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching driver:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiDriversAdressADMIN,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching drivers:', error);
            throw error;
        }
    }
}

export default DriverService