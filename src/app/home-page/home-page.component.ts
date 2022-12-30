import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  place:string=' ';
  details:any
  weather:string=''

  constructor(private api:ApiService){}
  ngOnInit(): void{}

  search(event:any){
    this.place = event.target.value;
    this.api.getDetails(this.place)
    .subscribe((data:any)=>{

      this.details=data;
      this.weather=(this.details.main.temp - 273.15).toFixed() + '°C';


    })
  }
}
