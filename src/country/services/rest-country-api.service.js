import {Country} from "../model/country.entity.js";
import axios from "axios";

const http = axios.create(
    {
        baseURL : 'https://restcountries.com/v3.1/name/peru'
    }
);

export class RestCountryApi{

    getCountry(){
        return http.get();
    }
}