import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';


class CarService {
    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiCarsAdressAdmin,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching cars:', error);
            throw error;
        }
    }
}

export default CarService