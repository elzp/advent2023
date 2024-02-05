// Tutaj skopiuj kod zadania
`W noc przed Wigilią, Święty Mikołaj zorientował się, że ma problem z weryfikacją listów od dzieci. 
Każdy list jest w formacie JSON i musi spełniać różne schematy w zależności od kraju pochodzenia. 
Mikołaj postanowił, że potrzebuje systemu do dynamicznego generowania schematów weryfikacji, który 
będzie elastyczny i pozwoli na szybkie dostosowywanie do różnorodnych wymagań. System ten musi być 
gotowy w ciągu dwóch dni, aby Mikołaj mógł sprawdzić wszystkie listy przed rozdaniem prezentów. Zadanie 
polega na stworzeniu generatora schematów w TypeScript, który pozwoli Mikołajowi na sprawne zarządzanie 
listami i zapewnienie, że żadne dziecko nie zostanie pominięte.`

export type JsonSchema = {
    type: string;
    properties?: Record<string, JsonSchema>;
    required?: string[];
    items?: JsonSchema;
    nullable?: boolean;
  };
  
  export const generateSchema = (schemaDefinition: JsonSchema): JsonSchema => {
    return schemaDefinition;
  };
  
  const checkNonStandardTypes = (el: any) => {
	if (Array.isArray(el)) return 'array';
	if (el === null) return null;
	return 'object'
}

  export const validate = (schema: JsonSchema, jsonObject: any): boolean => {
    if (typeof jsonObject === schema.type) {
		if (schema.required) {
			let objectPropertiesNames = Object.keys(jsonObject)
			let ifAllRequiredExists = schema.required.map(it => objectPropertiesNames.some(it2 => it === it2));
			if (ifAllRequiredExists.every(it => it === true)) {
				if (schema.properties) {
					let types = schema.properties;
					let typesOfPropertiesAreValid = objectPropertiesNames
						.map((it: Object) => {
							let realPropertyType = typeof jsonObject[`${it}`] === 'object' ? checkNonStandardTypes(jsonObject[`${it}`]) : typeof jsonObject[`${it}`];
							let requiredProperties: (string | null)[] = [types[`${it}`].type]
							if (types[`${it}`].nullable === true) {
								requiredProperties = [...requiredProperties, null];
							}
							return requiredProperties.some(it => it === realPropertyType);
						})
					if (typesOfPropertiesAreValid.every(it => it === true)) {
						return true
					} else { return false }
				} { return false }
			} else { return false }
		} else { return false }
	} else { return false; }
  };