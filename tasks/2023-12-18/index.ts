// Tutaj skopiuj kod zadania
`Mikołaj kontynuuje przygotowania do wyruszenia w podróż. Po pozbyciu się cykli,
które mogły powodować niepotrzebne opóźnienia, postanowił zająć się planowaniem
właściwej trasy. Okazało się jednak, że nagłe zmiany temperatur zamroziły urządzenia
nawigujące. Wszystko, co pozostało, to mapa z zaznaczonymi punktami kontrolnymi, które
Mikołaj może odwiedzić. Pomóż mu znaleźć najkrótszą trasę pomiędzy wybranymi odcinkami
trasy tak, aby żadne dziecko nie czekało na prezent zbyt długo.`


export interface WeightedGraph {
    [key: string]: { [key: string]: number };
  }
  
  function NextNode(valuesOfPrevNode: { [key: string]: number }, currentPath: string[]) {

	let nodesNames = Object.keys(valuesOfPrevNode);
	let nodesValues = Object.values(valuesOfPrevNode);
	let currenLength = nodesNames.length;

	let result = '';
	let minimum = 0;
	let indexOfMinEl = 0; 
	while (currenLength > 0) {
		minimum = Math.min(...nodesValues);
		indexOfMinEl = nodesValues.indexOf(minimum);

		if (!currentPath.includes(nodesNames[indexOfMinEl])) {
				result = nodesNames[indexOfMinEl];
				break;
		} else {
			nodesNames.splice(indexOfMinEl, 1);
			nodesValues.splice(indexOfMinEl, 1);
			currenLength--;
		}
	}
	return result !== ''? result : ''
}

export function findShortestPath(graph: WeightedGraph, startNode: string, endNode: string): string[] | null {
	const isStartInGraph = Object.keys(graph).includes(startNode) === undefined;
	const isEndInGraph = Object.values(graph).reduce((prev: string[] | [], current: { [key: string]: number }) => { 
			return [...prev, ...Object.keys(current)] 
		}, [])
		.includes(endNode);
	if (!(isStartInGraph || isEndInGraph)) {
		throw Error("'Invalid or non-existent route'")
	}
 	
	
	let route = [startNode]
	let nextPath = NextNode(graph[route[0]], [startNode])
	route.push(nextPath)
	let step = 1;

	while(nextPath !== '') {
		nextPath = NextNode(graph[route[step]], route)
		if(nextPath === ''){break;} else {
			route.push(nextPath)
		}
		step++
	} 

	return route[route.length - 1] !== endNode ? null : route;
}
