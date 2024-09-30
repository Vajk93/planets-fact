import { Component, HostListener } from '@angular/core';
import { INavItem } from 'src/app/interfaces/globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	isScrolled = false;

	// Figyeljük a görgetési eseményt
	@HostListener('window:scroll', [])
	onWindowScroll() {
	  // Ellenőrizzük a görgetési távolságot
	  if (window.scrollY > 50) { // 50px például
		this.isScrolled = true;
	  } else {
		this.isScrolled = false;
	  }
	}
	
	protected isMenuOpen:boolean = false;
	protected menuItems: INavItem[] = [
		{
			nameAndLink: 'mercury',
			color: '#DEF4FC'
		},
		{
			nameAndLink: 'venus',
			color: '#F7CC7F'
		},
		{
			nameAndLink: 'earth',
			color: '#545BFE'
		},
		{
			nameAndLink: 'mars',
			color: '#FF6A45'
		},
		{
			nameAndLink: 'jupiter',
			color: '#ECAD7A'
		},
		{
			nameAndLink: 'saturn',
			color: '#FCCB6B'
		},
		{
			nameAndLink: 'uranus',
			color: '#65F0D5'
		},
		{
			nameAndLink: 'neptune',
			color: '#497EFA'
		},
	]
}
