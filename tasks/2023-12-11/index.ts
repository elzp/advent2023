// Tutaj skopiuj kod zadania
`W zespole Świętego Mikołaja zapanował chaos. Chmurowy system do zamawiania
prezentów obsługuje teraz konta rodzinne, dzięki czemu zarówno rodzice jak i
 dzieci mogą bez końca edytować te same listy. W efekcie tych zmian, zarówno
 Mikołaj jak i jego elfy gubią się w tym, co dzieci naprawdę chcą dostać. Na
 naradzie kryzysowej pojawił się pomysł nowego modelu danych, który pozwoliłby
 na śledzenie zmian w życzeniach dzieci. Niestety, elfy nie wiedza jak wdrożyć
 taki system w istniejącym kodzie. Pomóż im!`

type Letter = { [key: string]: number };

export function createTrackedLetter(letter: Letter, func: Function): Letter {
    
const handler = {
  set: (target: Letter, prop:string, value: number) => {
      target[prop] = value
      func(prop, value);
    return true
  }
}

const object = new Proxy(letter, handler)

  return object as Letter;
}

// credit to: https://benborgers.com/posts/js-object-changes