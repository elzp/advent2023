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


export class Equipment {
    init: Array<Function> = [];
    update: Array<Function> = [];
    dispose: Array<Function> = [];

    registerTools(tool: Tool){
        this.init.push(tool.init);
        this.update.push(tool.update);
        this.dispose.push(tool.dispose);
    };
    initializeTools(){this.init.forEach((it)=>{it();});};
    updateTools(){ this.update.forEach((it)=>{it();});};
    disposeTools(){this.dispose.forEach((it)=>{it();});};
}