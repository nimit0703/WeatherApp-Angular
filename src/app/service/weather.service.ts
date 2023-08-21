import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: String):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHaderName,environment.XRapidAPIKeyHeaderValue),
      params:new HttpParams()
      .set('city',cityName.toString())

    })
  }
}
