// Tutaj skopiuj kod zadania

`Jak co roku, w okresie świąt o działalności Świętego Mikołaja szeroko rozpisują się media.
Dziennikarze chcą wiedzieć jak organizuje on swoją podróż, jakie są jego plany na przyszłość,
a także co robi w wolnym czasie. Jako, że do świąt zostało już naprawdę niewiele czasu, Mikołaj
zdecydował się na przeprowadzenie wywiadów o z góry ustalonych ramach czasowych. Niestety, nie
każdy dziennikarz trzyma się ustalonych zasad. Mikołaj potrzebuje systemu, który pozwoli mu anulować
przeciągające się rozmowy.`

import { performance } from 'perf_hooks'
interface TimedPromiseSettledResult {
		settledPromises: Promise<PromiseSettledResult<string>[]>,
		times: Record<number, number>,
	}


function allSettledTimed(promises: Array<Promise<string>>): TimedPromiseSettledResult {
	//credit: https://stackoverflow.com/a/76453599
	const start = performance.now();
		let times: Record<number, number> = {};
	let promise =  Promise.allSettled(promises.map((p: Promise<string>, index: number) => {
		return p.finally(async () => {
			const end = await performance.now();
			times[index] = await end - start;
		});
	}))
		return {settledPromises: promise, times: times}
}
export async function conductInterviews(
	subjects: string[],
	interview: (subject: string) => Promise<string>,
	timeConstraint: number
): Promise<string[]> {
	let result: string[] = []
	const promises = subjects.map(subject => interview(subject));
	const {settledPromises, times } = allSettledTimed(promises);

    await settledPromises.then(async (values) => {
        const newValues = values.map((it, index) => {
            if (it.status === 'fulfilled') {
                if(times[index] > timeConstraint){
                    return 'Error: Timeout';
                } else {
                    return it.value;
                }
            }
            else { return 'Error: ' + it.reason.message; }
        })
        result.push(...newValues);
    })
	return result;
}