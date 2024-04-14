// News API Service

import axios from 'axios';
import {LogoApiService} from "../../../shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class NewsApiService {
    apiKey = '292a5060a8434fcc94cd5ae3348d0f17';
    logoApi = new LogoApiService();

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }


}