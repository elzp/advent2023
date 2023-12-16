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
    init: Function = ()=>{};
    update: Function = ()=>{};
    dispose: Function = ()=>{};

    registerTools(tool: Tool){
        this.init = tool.init;
        this.update = tool.update;
        this.dispose = tool.dispose;
    };
    initializeTools(){this.init();};
    updateTools(){ this.update()};
    disposeTools(){this.dispose()};
}