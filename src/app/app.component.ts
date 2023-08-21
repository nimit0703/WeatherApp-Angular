import { Component ,OnInit} from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  weatherData ?: WeatherData;
  cityName:String = "anand" ;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName:String){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (responce)=>{
        this.weatherData = responce;
        console.log(responce);
      }
    });
  }

  constructor(private weatherService:WeatherService){

  }
}
