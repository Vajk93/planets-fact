import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
	@Input() rotation: string = '';
	@Input() revolution: string = '';
	@Input() radius: string = '';
	@Input() temperature: string = '';
}
