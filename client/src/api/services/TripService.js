import axios from "axios";
import ApiConfig from "../ApiConfig";
import AuthHeaders from "../../userForLogin";

class TripService {
  static async create(data) {
    try {
      const response = await axios.post(ApiConfig.apiTripAdressADMIN, data, {
        headers: {
          Authorization: AuthHeaders.user,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating Trip:", error);
      throw error;
    }
  }
  static async getTripsForDriver(driverName) {
    try {
      const response = await axios.get(
        ApiConfig.apiTripAdressDRIVER + driverName,
        {
          headers: {
            Authorization: AuthHeaders.user,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching trips for driver ${driverName}:`, error);
      throw error;
    }
  }
  static async finishTrip(driverName, trip) {
    try {
      const response = await axios.post(
        ApiConfig.apiTripAdressDRIVER + driverName,
        { trip },
        {
          headers: {
            Authorization: AuthHeaders.user,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error finishing trip for driver ${driverName}:`, error);
      throw error;
    }
  }
}

export default TripService;
