// Tutaj skopiuj kod zadania
`Napięty grafik na kilka dni przed świętami powoduje mnóstwo stresu. Zespół elfów odpowiedzialny
za produkcję zabawek nie radzi sobie z ilością pracy, więc część pracowników zaczyna omijać procesy
i improwizować. Wszystko to powoduje, że jakość zabawek w tym kluczowym okresie spada. Mikołaj, aby
zapobiec dalszemu pogorszeniu sytuacji, postanawia zatrudnić kogoś, kto rozwiązywał w przeszłości
takie problemy. Nowy inżynier jakości postanawia wdrożyć politykę odwróconych zależności - zamiast
pozwalać elfom tworzyć narzędzia i zabawki na własną rękę, będą oni korzystać z jednego wspólnego
kontenera "dobrych praktyk i rekomendacji". Tylko w ten sposób można zapewnić, że wszystkie zabawki
będą spełniać wymagania jakościowe.`

export class InjectionToken<T> {
	[key: string]: any;
	constructor(nameOfValue: T | string) {
		this[`${nameOfValue}`] = '';
	}
}

export class FactoryInjector {
	instanceOfClass = {};
	[key: string]: any;

	registerClass(newClass: any) {
		this.instanceOfClass = new newClass;
	}
	get<T>(element: any): any | never {
		if (Object.keys(element).length !== 0) {
			return this[`${element.value}`]
		} else {
			if (this.instanceOfClass instanceof element) {
				return this.instanceOfClass;
			} else {
				throw Error();
			}
		}
	}
	provideValue<T>(token: InjectionToken<T>, tokensValue: string) {
		console.log('provideValue')
		this[`${token.value}`] = tokensValue;
	}
}