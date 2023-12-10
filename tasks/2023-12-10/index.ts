// Tutaj skopiuj kod zadania
`Po naprawie systemu zdarzeń zespół elfów zaczął uzyskiwać informacje o nowych zamówieniach,
ale część maszyn na produkcji nadal produkowała zabawki, które nie były już potrzebne. Każdorazowa
zmiana zamówienia wymagała ręcznej rekonfiguracji maszyn, co było bardzo czasochłonne. Mikołaj
postanowił zatrudnić Ciebie, abyś pomógł mu wdrożyć bardziej scentralizowany system zarządzania
produkcją. Powinien on na bieżąco informować wszystkie maszyny o zmianach w zamówieniach, a także
przekazywać im informacje o tym, jakie zabawki mają produkować. Tylko jak to zrobić, kiedy maszyny
nie są ze sobą połączone?`

export class OrderController {
    machines: Array<Machine> = [];
    registerMachine(machine: Machine){
        this.machines.push(machine);
    };
    setState(state: string){
        this.machines.forEach((it: Machine)=>{
            if(it.state !== null){it.state = state};
        });
    };
    unregisterMachine(machine: Machine){
        this.machines.forEach((it: Machine)=>{
            if(it === machine) {it.state = null};
        });
    };
}

export class Machine {
  state: string | null = '';
  performAudit(){};
}