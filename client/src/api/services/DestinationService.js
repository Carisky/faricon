import axios from 'axios'
import ApiConfig from '../ApiConfig';


class DestinationService {
    static async findById(Id) {
        try {
            const response = await axios.get(`${ApiConfig.apiDestinationsAdress}${Id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching destination:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiDestinationsAdress);
            return response.data;
        } catch (error) {
            console.error('Error fetching destination:', error);
            throw error;
        }
    }

}

export default DestinationService