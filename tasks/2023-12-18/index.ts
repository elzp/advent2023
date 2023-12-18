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
  
export function findShortestPath(graph: WeightedGraph, startNode: string, endNode: string): string[] | null {
	const isStartInGraph = Object.keys(graph).includes(startNode) === undefined;
	const isEndInGraph = Object.values(graph).reduce((prev: string[] | [], current: { [key: string]: number }) => { 
			return [...prev, ...Object.keys(current)] 
		}, [])
		.includes(endNode);
	if (!(isStartInGraph || isEndInGraph)) {
		throw Error("'Invalid or non-existent route'")
	}
 	return null;
}
