// Tutaj skopiuj kod zadania
`Na kilka dni przed świętami, Mikołaj przygotowywał się do doręczenia prezentów dzieciom
na całym świecie. Jego worki były pełne różnorodnych upominków, a każdy z nich miał określoną
wartość, wagę i objętość. Mikołaj chciał zmaksymalizować wartość dostarczonych prezentów, ale
jednocześnie musiał przestrzegać limitów wagowych i pojemności swoich sań. Wiedząc, że to
zadanie wymaga nie tylko magii, ale i algorytmicznego podejścia,postanowił poprosić o pomoc
elfa-programistę, który zna się na programowaniu dynamicznym.`

export type Gift = {
    value: number;
    weight: number;
    volume: number;
  };
  
  export function calculateMaxGiftValue(gifts: Gift[], maxWeight: number, maxVolume: number): number {
    if(Object.keys(gifts).length === 0) {
        return 0;
    }

    return -1;
  }