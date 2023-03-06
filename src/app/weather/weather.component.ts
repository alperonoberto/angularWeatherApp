import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data'
import { ImageSearchService } from '../image-search.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  modelData: any;
  ciudad: string = '';
  API_REQ: string = '';
  API_ICON: string = '';
  icon: string = '';
  image_URL = '';

    constructor(private weatherService: WeatherService, private imageSearchService: ImageSearchService) {

    }

    ngOnInit(): void {
      this.getData('gijon');
    }

    

    getData(val: string) {
      this.ciudad = val;
      this.API_REQ = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.ciudad + '&appid=cadb0db7b18f60c8059fec17924cbdc7&units=metric';

      this.weatherService.getWeather(this.API_REQ).subscribe({
        next: res => {
          this.modelData = res;
          
        },
        error: err => {
          console.log(err);
        }
      })
      
      this.imageSearchService.getImages(val).subscribe(data => {
        console.log(data);
        this.image_URL = data.results[0].urls.small;
      });

      

      this.ciudad = '';
    }

    
    
}
