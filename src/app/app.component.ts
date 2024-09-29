import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './services/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private planetsService: PlanetsService){}

	title = 'planets';

	ngOnInit(): void {
		this.planetsService.getPlanet('Earth').subscribe(planet => {
			this.planet = planet[0]
			console.log(this.planet);
		})
	}

	protected planet:any;

}
