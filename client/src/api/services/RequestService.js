import axios from 'axios'
import ApiConfig from '../ApiConfig';


class RequestService {
    static async findById(Id) {
        try {
            const response = await axios.get(`${ApiConfig.apiRequestsAdress}${Id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching request:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiRequestsAdress);
            return response.data;
        } catch (error) {
            console.error('Error fetching requests:', error);
            throw error;
        }
    }

    static async create(data) {
        try {
            const response = await axios.post(ApiConfig.apiRequestsAdress,data);
            return response.data;
        } catch (error) {
            console.error('Error creating request:', error);
            throw error;
        }
    }
}

export default RequestService