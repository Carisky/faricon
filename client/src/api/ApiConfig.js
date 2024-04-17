const BaseLink = "http://localhost:8080";

const mode = {
    user:"USER/",
    admin:"ADMIN/",
    driver:"DRIVER/",
    dispetcher:"DISPETCHER/",
}

const ApiConfig = {
    apiAdress: BaseLink,

    apiDriversAdress: BaseLink+"/Drivers/",

    apiDriversAdressUSER: BaseLink+"/Drivers/"+mode.user,
    apiDriversAdressADMIN: BaseLink+"/Drivers/"+mode.admin,

    apiCargoTypesAdress: BaseLink+"/CargoTypes/",
    apiCargoTypesAdressUSER: BaseLink+"/CargoTypes/"+mode.user,

    apiRequestsAdress: BaseLink+"/Requests/",
    apiRequestsAdressUSER: BaseLink+"/Requests/"+mode.user,
    apiRequestsAdressADMIN: BaseLink+"/Requests/"+mode.admin,

    apiDestinationsAdress: BaseLink+"/Destinations/",
    apiDestinationsAdressUSER: BaseLink+"/Destinations/"+mode.user,

    apiCarsAdressAdmin:BaseLink+"/Cars/"+mode.admin,

    apiTripAdressADMIN:BaseLink+"/Trips/"+mode.admin,
    apiTripAdressDRIVER:BaseLink+"/Trips/"+mode.driver,

    apiLoginAdress: BaseLink+"/Login/",
    apiLogOutAdress: BaseLink+"/logout",
    
};

export default ApiConfig;
