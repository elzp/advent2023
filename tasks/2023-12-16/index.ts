// Tutaj skopiuj kod zadania
`Pewna grupa elfów z zespołu Świętego Mikołaja zajmuje się sortowaniem listów.
Niestety, wymagania związane z sortowaniem zmieniają się każdego dnia, a system
do obsługi sortowania nie jest wystarczająco elastyczny. Zaproponuj rozwiązanie,
które pozwoli na łatwe dodawanie nowych strategii sortowania w zależności od parametrów
takich jak kraj pochodzenia listu, priorytet, jego długość, albo zawartość.`

export interface Letter {
    content: string;
    country: 'pl' | 'de' | 'us';
    priority: 'high' | 'medium' | 'low';
}

interface StrategyInterface {
    sortingFunction: Function;
}

export class LetterSorter  {
    sortingFunction: Function = (a: Letter, b: Letter) => { return 1;};
    constructor(SortingStrategy: StrategyInterface){
        this.sortingFunction = SortingStrategy.sortingFunction;
    }
    sortLetters(letters: Array<Letter>): Array<Letter> {
        const result = letters.sort((a: Letter, b: Letter)=>this.sortingFunction(a, b));
      return result;
    }
}

export class PriorityStrategy implements StrategyInterface {
    
    sortingFunction(a: Letter, b: Letter) {
        const labels = ["high", "medium", "low"];
        return labels.indexOf(a.priority) - labels.indexOf(b.priority);
    }
}

export class LengthStrategy implements StrategyInterface {
    sortingFunction(a: Letter, b: Letter) {
        const contentA: number = a.content.split("").length;
        const contentB: number = a.content.split("").length;
        return contentA - contentB;
    }
}

export class CountryStrategy implements StrategyInterface {
    sortingFunction(a: Letter, b: Letter) {};
}