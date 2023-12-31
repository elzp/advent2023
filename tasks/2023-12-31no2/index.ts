`Trudne warunki pogodowe sprawiły, że Święty Mikołaj pogubił niektóre z prezentów
przewożonych na saniach. Przy pierwszej możliwej okazji skontaktował się z Elfami
przekazując im listę brakujących prezentów nalegając o jak najszybsze dostarczenie
zapasowych odpowiedników. Niestety, wersje zapasowe przechowywane są w ścieśle
strzeżonym magazynie, którego system skrytek komplikuje dostęp do przedmiotów.
Elfy muszą wykonać zapytanie do systemu, które zwróci im numery skrytek umożliwiających
zbudowanie awaryjnego zestawu prezentów. Jak to zrobić, kiedy wszyscy działają pod
presją czasu a z magazynu zapasowego od dawna nie korzystano?`

export function* storageQuery(range: number, gift: string, resolver: (n: number, gift: string) => boolean): Generator<number> {
    throw new Error('Not implemented');
}

export function storageResolver(n: number, gift: string): boolean {
    return false;
}