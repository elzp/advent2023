// Tutaj skopiuj kod zadania

`Jak co roku, w okresie świąt o działalności Świętego Mikołaja szeroko rozpisują się media.
Dziennikarze chcą wiedzieć jak organizuje on swoją podróż, jakie są jego plany na przyszłość,
a także co robi w wolnym czasie. Jako, że do świąt zostało już naprawdę niewiele czasu, Mikołaj
zdecydował się na przeprowadzenie wywiadów o z góry ustalonych ramach czasowych. Niestety, nie
każdy dziennikarz trzyma się ustalonych zasad. Mikołaj potrzebuje systemu, który pozwoli mu anulować
przeciągające się rozmowy.`

export async function conductInterviews(
    subjects: string[],
    interview: (subject: string) => Promise<string>,
    timeConstraint: number
  ): Promise<string[]> {
    const result: string[] = [];
    subjects.forEach((subject: string)=>{
        interview(subject)
            .then(()=>{result.push('Discussed: ' + subject)})
            .catch((rejected)=>{})
    }
        )
    return result;
  }
  