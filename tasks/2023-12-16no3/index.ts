// Tutaj skopiuj kod zadania
`Po inspekcji sprzętu Mikołaj zauważył, że trasa dostarczania prezentów nie jest optymalna.
Jego ścieżka przebiega przez wiele miast wielokrotnie, co wydłuża czas dostarczenia prezentów
do dzieci. Santa postanowił rozwiązać problem wykrywania cykli na swojej drodze, aby zoptymalizować
trasę i upewnić się, że każde miasto odwiedzany jest tylko raz. Pomóż Świętemu Mikołajowi w napisaniu
rozszerzenia do systemu nawigacji, które wykryje cykle w jego ścieżkach i zaproponuje trasę bez zbędnych powtórzeń.`

function lookForCycle(firstDestination: string, graph: Record<string, string[]>, nextDest: string): string[]{
	let cycle: string[]  = [];
	
	cycle.push(firstDestination);
	cycle.push(nextDest);
	let nextDestination = "";
	let prevDestination = nextDest;

		if (graph[`${prevDestination}`].length === 0) {
			return cycle;
		} else {
		do {
			nextDestination = graph[`${prevDestination}`][0];
			prevDestination = nextDestination; cycle.push(nextDestination)
		} while (firstDestination !== nextDestination)
		return cycle;
	}
}

export function findCyclesBetweenLocations(graph: Record<string, string[]>): Array<Array<string>> | [] {

	let cycles = [];

	for (let step = 0; step < Object.keys(graph).length; step++) {
		let numberOfKeyInGraph: number = step;
		let indexOfElInCurrKey: number  = 0;
		let currentKey: string = Object.keys(graph)[numberOfKeyInGraph]

		let noOfItemsInArrOfCurrKey: number  = graph[`${currentKey}`].length;
		//check if in arrayn of current key  is any destination
		if (noOfItemsInArrOfCurrKey === 0) {
			console.log('no destination available')
		} else {
			// check cycles starting from current key
			while (indexOfElInCurrKey < noOfItemsInArrOfCurrKey){
				let nextDestination = graph[`${currentKey}`][indexOfElInCurrKey];
				// check if next destination is in saved cycle
				let allElInCycles = cycles.length ===  0 ? []: cycles.reduce((prev,current) => {return [...prev, ...current]}, []);
				if (allElInCycles.indexOf(nextDestination) === -1) {
					let neCycle = lookForCycle(currentKey, graph, nextDestination)
					cycles.push(neCycle);
					indexOfElInCurrKey++;
				} else {
					indexOfElInCurrKey = noOfItemsInArrOfCurrKey;
					continue;
				}
			}
		}
	}
	return cycles;
}