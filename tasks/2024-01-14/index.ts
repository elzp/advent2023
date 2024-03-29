// Tutaj skopiuj kod zadania
`W ostatnim tygodniu przed Świętami, Święty Mikołaj zmaga się z nowym wyzwaniem.
Jego warsztat pełen jest prezentów gotowych do dostarczenia dzieciom na całym świecie.
Jednak ilość prezentów jest tak ogromna, że zwykłe metody organizacji zawiodły.
Elfowie, chcąc ułatwić Mikołajowi zadanie, zaproponowali stworzenie magicznego systemu
paginacji prezentów. System ten miałby umożliwić Mikołajowi przeglądanie prezentów partiami,
zamiast wszystkich na raz, co znacznie przyspieszyłoby proces wyboru prezentów do dostarczenia.`

export function usePagination<T>(items: T[], itemsPerPage: number, pageNumber: number) {
  let totalPages = Math.ceil(items.length/itemsPerPage);
  let currentPageItems: T[] = [];

  if(pageNumber > totalPages || items.length === 0){
    currentPageItems = [];
  } else {
    let startIdOfCurrentPage = (pageNumber - 1) * itemsPerPage;
		let endIdOfCurrentPage = startIdOfCurrentPage + itemsPerPage > items.length ? items.length : startIdOfCurrentPage + itemsPerPage;
		currentPageItems = items.slice(startIdOfCurrentPage, endIdOfCurrentPage);
  }
  return {
    currentPageItems,
    totalPages,
    totalItems: items.length,
  }
}