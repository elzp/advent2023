// Tutaj skopiuj kod zadania
`Mikołaj dokonuje ostatniego przeglądu ekwipunku, który pozwoli mu przebyć świąteczną
podróż. W tym celu podążą za ściśle określonym protokołem, według którego każdy zabierany
w podróż sprzęt zostanie sprawdzony pod kątem włączenia, wymiany i usunięcia z sań.
Niestety, czas nagli, a Mikołaj nie jest pewien, czy uda mu się wykonać wszystkie
operacje na czas. Czy możesz zautomatyzować proces weryfikacji ekwipunku?`

export interface Tool {
    init: Function,
    update: Function,
    dispose: Function,
};
interface InitObject {
    initFunctions: Array<Function>,
    noOfInits: number,
}

export class Equipment {
    init: InitObject = { initFunctions: [], noOfInits: 0,};
    update: Array<Function> = [];
    dispose: Array<Function> = [];

    registerTools(tool: Tool){
        this.init.initFunctions.push(tool.init);
        this.update.push(tool.update);
        this.dispose.push(tool.dispose);
    };
    initializeTools(){
        this.init.initFunctions.forEach((it)=>{it();});
        this.init.noOfInits++;
    };
    updateTools(){ 
        if(this.init.noOfInits === 0){
            throw Error("Cannot update any tools before initialization.");
        } else {
            this.update.forEach((it)=>{it();});
        }
    };
    disposeTools(){this.dispose.forEach((it)=>{it();});};
}