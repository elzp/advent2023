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
    const lengthOfGifts = Object.keys(gifts).length;
    if(lengthOfGifts === 0) {
        return 0;
    }
    const sortedGifts = gifts.sort((a, b) => a.value - b.value);
    const weightValues = Object.values(sortedGifts).map(it=>it.weight);
    const volumeValues = Object.values(sortedGifts).map(it=>it.volume);

    if(weightValues.every(it => it > maxWeight) || volumeValues.every(it => it > maxVolume)) {
        return 0;
    }
    const values = Object.values(sortedGifts).map(it => it.value);
    let i = 0;
    let currentValue = 0;
    let currentVolume = 0;
    let currentWeight = 0;

    while(i < lengthOfGifts - 1 && currentVolume <= maxVolume && currentWeight <= maxWeight) {
        currentValue += values[i];
        currentVolume += volumeValues[i];
        currentWeight += weightValues[i];
        i++;
    }
    return currentValue;
  }