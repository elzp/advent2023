// Tutaj skopiuj kod zadania
`Na czas nieobecności Świętego Mikołaja zespół elfów-programistów eksperymentuje z nowościami,
jakie zostaną wdrożone w przyszłym roku do procesu przygotowywania prezentów. Jednym z pomysłów
jest zbudowanie nowego języka opisu prezentów, który będzie bardziej czytelny dla każdego pracownika
fabryki. Powstaje prototyp języka GSL (GiftStylingLanguage), którego pierwsze polecenia wyglądają
naprawdę obiecująco. Problem w tym, że nikt nie potrafi ich przetłumaczyć na wykonywalny kod, a
system do obsługi prezentów nie jest w stanie ich zinterpretować. Czy uda się zbudować funkcję do
obsługi języka GSL, która będzie zwracać poprawnie sformatowany opis prezentu?`


export type Wearable = Wearable1 & Literary;
export interface Wearable1 {
	type: string,
	size: string,
	color: string,
}
export interface Literary {
	type: string,
	size: string,
	title: string,
	author: string,
}
export interface Gift {
	items: [] | Array<Wearable>,
}
export const GSL_DEMO_SNIPPET = `
Gift(ribbon: "gold curly", label: "Merry Christmas!") {
    Wearable(type: "socks", size: "small", color: "red").if(winterSeason: true) {
      pattern: "snowflakes"
    }

    Wearable(type: "scarf", size: "medium", color: "green") {
      pattern: "snowflakes"
    }

    Literary(type: "book", size: "15cm 22cm 2cm", title: "Christmas Stories", author: "C. Claus")
}
`;

export function parseGSL(gslScript: string): Gift {
	let regexp1 = /Gift/g;

	if (regexp1.test(gslScript)) {
		let regexp2 = /(?<=\()(\"type.*?)(?=\))/g;
		let match = gslScript.replace(/(?<=\(|,\s)(.*?)(?=\:)/g, `"$1"`).match(regexp2);
		let matchWithCurlyBraces = match?.map(el => {
      return JSON.parse(`{${el}}`);
    }) || [];

		return { items: matchWithCurlyBraces }
	} else { 
		return { items: [] }
	}
}