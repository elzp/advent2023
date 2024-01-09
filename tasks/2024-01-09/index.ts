// Tutaj skopiuj kod zadania

`Przed Mikołajem misja specjalna - musi on dostarczyć prezent, który został zamówiony w innym wymiarze.
Aby dostarczyć tę szczególną paczkę, Święty musi wykonać kilka skoków w czasoprzestrzeni i wyszukać
odpowiednią galaktykę, w której przedstawiciel obcej cywilizacji odbierze swój prezent. Aby zachować
wysokie standardy bezpieczeństwa, elfy odpowiedzialne za info-sec zarekomendowały logowanie całej historii
podróży Mikołaja, aby w razie potrzeby wyruszyć na misję poszukiwawczą. Czy jesteś w stanie utworzyć taki
system bezpiecznej nawigacji?`

type GalacticHistoryTracer<T> = {
    readonly list: Array<T>;
    iterator: number;
    add: (el: T) => void;
    undo: () =>  T | null;
    redo: () =>  T | null;
    current: () => T | null;
};

export function createTracer<T>(): GalacticHistoryTracer<T> {

    class Tracer {
      list: Array<T> = [];
      iterator: number = -1;
      add = (el: T) => {
        this.list.push(el);
        this.iterator++;
      };
      undo = ()=> null;
      redo = ()=> null;
      current = () => {
        if(this.iterator >=0) {
          return this.list[this.iterator];
        } else {
          return null;
        }
      };
  };
  const tracer: Tracer = new Tracer();
  return tracer;
}