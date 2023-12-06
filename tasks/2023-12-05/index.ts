// Tutaj skopiuj kod zadania
`Przygotowując się do najważniejszego okresu w roku Święty Mikołaj zauważył,
że jego pomocnicy tracą dużo czasu na powtarzanie tych samych operacji przy
obliczaniu trajektorii lotu sań z prezentami. Aby zoptymalizować pracę, Mikołaj
postanowił wprowadzić poprawkę algorytmu, która pozwoli na przechowywanie i ponowne
wykorzystanie wyników obliczeń. Niestety, nikt z zespołu elfów nie potrafił
zaimplementować takiej funkcjonalności. Pomóż Mikołajowi i jego pomocnikom w
rozwiązaniu tego problemu.`

interface fn { (x: any): any };


export function memoize(func: fn): any {

    let cache = new Map<string | number, string | number>();
    return (n: string | number) => {
      if (cache.has(n)) {
        console.log('Fetching from cache');
        const nString = `${n}`
        return cache.get(n);
      }
      else {
        console.log('Calculating result');
        let result = func(n);
        cache.set(n, result);
        return result;
      }
    }
  }