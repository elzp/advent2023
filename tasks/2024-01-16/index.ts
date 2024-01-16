// Tutaj skopiuj kod zadania
`W ostatnim tygodniu przed świętami Mikołaj napotkał kolejny problem. W jego magicznej fabryce zabawek,
maszyny zaczęły działać w nieprzewidywalny sposób, a informacje o prezentach były przesyłane w chaotycznej
kolejności. Mikołaj potrzebował sposobu, aby zarządzać tym strumieniem informacji i je uporządkować.
"Mapowanie, pomijanie i branie określonej liczby prezentów z listy - to by rozwiązało mój problem!"
Czasu było niewiele, a wyzwanie wydawało się trudne. Czy ktoś mógłby mu pomóc zanim nadejdą święta?`

export class GiftStream {
    presents: string[] = [];
    modifiedPresents: string[] = [];
    currentId = 0;
    constructor(presents: string[]){
        this.presents = presents;
        this.modifiedPresents = presents;
    }
    map(fn: Function){
        return this
    }
    skip(givenNumber: number){
        if(this.currentId + givenNumber <= this.modifiedPresents.length) {
            this.currentId=+ givenNumber
        }
        return this;
    }
    take(givenNumber: number){
        this.modifiedPresents = this.modifiedPresents.slice(this.currentId, this.currentId+givenNumber)
        return this;
    }
    getGifts(){
        return this.modifiedPresents
    }
}