export interface INavItem {
    nameAndLink: string,
    color: string
}

export interface IPlanet {
	name: string,
	overview: {
		content: string,		  
        source: string,
	},
	structure: {
		content: string,
		source: string,
	},
	geology: {
		content: string,		  
        source: string,
	},
	rotation: string,
	revolution: string,
	radius: string,
	temperature: string,
	images: {
		planet: string,
		internal: string,
		geology: string,
	},
	color: string
}

export type PlanetName = 
| 'mercury'
| 'venus'
| 'earth'
| 'mars'
| 'jupiter'
| 'saturn'
| 'uranus'
| 'neptune';

export type TypeButtons = 'overview' | 'structure' | 'geology';
