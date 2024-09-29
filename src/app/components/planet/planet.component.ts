import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
	planetName: string = '';

	constructor(private route: ActivatedRoute) {}
  
	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.planetName = params.get('planet') || 'earth';
		});
	}
}
