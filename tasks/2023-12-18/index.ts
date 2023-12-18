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
    return []
  }