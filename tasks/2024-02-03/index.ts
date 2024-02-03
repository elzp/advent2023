// Tutaj skopiuj kod zadania
`Napięty grafik na kilka dni przed świętami powoduje mnóstwo stresu. 
Zespół elfów odpowiedzialny za produkcję zabawek nie radzi sobie z 
ilością pracy, więc część pracowników zaczyna omijać procesy i 
improwizować. Wszystko to powoduje, że jakość zabawek w tym kluczowym 
okresie spada. Mikołaj, aby zapobiec dalszemu pogorszeniu sytuacji, 
postanawia zatrudnić kogoś, kto rozwiązywał w przeszłości takie problemy. 
Nowy inżynier jakości postanawia wdrożyć politykę odwróconych zależności 
- zamiast pozwalać elfom tworzyć narzędzia i zabawki na własną rękę, będą 
oni korzystać z jednego wspólnego kontenera "dobrych praktyk i rekomendacji". 
Tylko w ten sposób można zapewnić, że wszystkie zabawki będą spełniać wymagania 
jakościowe.`

export interface TextProcessingPlugin {

}
export class ReplaceCharsPlugin {
    [key: string]: any;
    constructor(options: any){
        this.method = (a: string) => {
			let newA = a;
			let keys: string[] = Object.keys(options);
			let values: string[] = Object.values(options);
			keys.forEach((el, id) => {
				let regexp = new RegExp(el, 'g');
				newA = newA.replace(regexp, values[id])
			})
			return newA;
		}
    }
}
export class TextProcessor {
    methods: Function[] = [];

    use(process: any): void{
        this.methods.push(process.method)
    }
    process(text: string){
        let newText = text;
        if(this.methods.length !== 0){
            this.methods.forEach(el=>{
                newText = el(newText)
            })
        }
        return newText;
    }
}