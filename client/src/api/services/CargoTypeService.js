import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';

class CargoTypeService {
    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiCargoTypesAdress,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching cargo types:', error);
            throw error;
        }
    }
}

export default CargoTypeService