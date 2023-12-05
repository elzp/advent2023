// Tutaj skopiuj kod zadania
`Mikołaj ma problem: w czasie podróży przez czasoprzestrzeń zgubił worek z prezentami!
Teraz musi szybko wyznaczyć, w którym punkcie czterowymiarowego kontinuum (x, y, z, czas)
worek się znajduje. Twoim zadaniem jest napisanie funkcji 'znajdzWorek', która przyjmie
jako parametry listę potencjalnych lokalizacji oraz obliczoną przez elfów 'mapę czasoprzestrzenną'
w postaci matematycznej funkcji f(x, y, z, czas). Funkcja 'znajdzWorek' powinna zwrócić lokalizację
worka, dla której wartość mapy jest najwyższa. Lokalizacje są obiektami z właściwościami x, y, z, czas,
a mapa czasoprzestrzenna jest funkcją przyjmującą te cztery współrzędne i zwracającą wartość liczbową.
Pamiętaj o obsłudze przypadków, gdy mapa nie zwróci żadnej wartości lub zwróci wartości niepoprawne
matematycznie (np. NaN, Infinity).`


export interface Lokalizacja {
    x: number,
    y: number,
    z: number,
    czas: number
};

export interface MapaCzasoprzestrzenna {
    (x: number, y: number, z: number, czas: number): number;
};

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if(lokalizacje.length === 0){
        return null;
    }
    
    const mappedValues = lokalizacje.map((it)=> {
        const { x, y, z, czas }: Lokalizacja = it;
        return mapa(x, y, z, czas);
    })
    const max = Math.max(...mappedValues);
    const indexOfMax = mappedValues.indexOf(max)
    return lokalizacje[indexOfMax];
}