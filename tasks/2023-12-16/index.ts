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
  
export class LetterSorter {
    sortLetters(letters: Array<Letter>): [] {
      return [];
    }
}

export class PriorityStrategy {
    
}

export class LengthStrategy {
    
}

export class CountryStrategy {
    
}