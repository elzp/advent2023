// Tutaj skopiuj kod zadania
`Zespół Świętego Mikołaja napotkał niezwykłe wyzwanie. Otóż, jedna z maszyn w pracowni,
odpowiedzialna za koordynowanie pracy elfów i rozdział prezentów, przestała działać.
Ta maszyna to nic innego jak zaawansowany system zdarzeń, który informuje elfy o zmianach
w liście prezentów i priorytetach dostaw. W związku z tym, Mikołaj musi szybko znaleźć sposób
na naprawę systemu zdarzeń, aby wszystko wróciło do normy i prezenty zostały dostarczone na czas.
Programiści będą musieli napisać nową implementację mechanizmu emitującego zdarzenia aby system do
obsługi prezentów zaczął działać poprawnie.`
interface fn { (): any };

export class ChristmasEmitter {
    events = new Map<string, Array<fn>>();

    on(eventName: string, callback: fn){
        this.events.set(eventName, [callback]);
    }
    off(eventName: string, callback: fn){}
    emit(eventName: string){
        const callbacks = this.events.get(eventName);
        callbacks?.forEach(it=>(it)());
    }
}