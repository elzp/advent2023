// Tutaj skopiuj kod zadania
`Aplikacja do wymiany wiadomości, z której korzysta całe biuro Świętego Mikołaja,
ma jedną istotną wadę - nie zawsze aktualizuje się poprawnie. Kiedy pracownicy korzystają
z różnych wersji aplikacji, mogą wysyłać i otrzymywać błędnie sformatowane wiadomości.
Tak przydarzyło się i tym razem, kiedy wiadomości od podróżującego Mikołaja zaczęły
docierać do Elfów w nietypowym formacie. Każda z nich składa się z dwóch fragmentów,
które dodatkowo wyglądają na zaszyfrowane. Pomóż Elfom odczytać wiadomości i przywróć
świąteczny porządek.`

function decodeValue(value: string) {
    const code = value.split(':')[0];
    const text = value.split(':')[1]; 
console.log(code, text)

    switch(code){
            case 'c13':
            return text.split('').map(char=>{
                if (char.charCodeAt(0) + 13 > 122){
                    return String.fromCharCode((char.charCodeAt(0) + 13) % 122 + 96);	
                } else {
                    return String.fromCharCode(char.charCodeAt(0)  + 13);
                }
            }).join('');
        case 'b64':
                return atob(text);
        case 'uri':
                return decodeURIComponent(text);
        default:
            return '';
    }
}
export function decodeMessage(template: string, values: Record<string, string>): string {
	let decodedValues = Object.values(values).map(it => decodeValue(it));
	let result = Object.keys(values).reduce((accumulator, el, currentIndex) => {
		let value = "{{ " + el + " }}"
		let regExpr = new RegExp(value, "ig");
		let changedTemplate = accumulator.replace(regExpr, decodedValues[currentIndex])
		return changedTemplate;
	}, template)

	return result;
}