import axios from 'axios'
import ApiConfig from '../ApiConfig';
import AuthHeaders from '../../userForLogin';


class RequestService {
    static async findById(Id) {
        try {
            const response = await axios.get(`${ApiConfig.apiRequestsAdressUSER}${Id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching request:', error);
            throw error;
        }
    }

    static async findAll() {
        try {
            const response = await axios.get(ApiConfig.apiRequestsAdressADMIN,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching requests:', error);
            throw error;
        }
    }

    static async create(data) {
        try {
            const response = await axios.post(ApiConfig.apiRequestsAdressUSER,data,{
                headers: {
                    'Authorization': AuthHeaders.user
                  }
            });
            return response.data;
        } catch (error) {
            console.error('Error creating request:', error);
            throw error;
        }
    }
}

export default RequestService