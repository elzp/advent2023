`W pierwszych dniach okresu przedświątecznego, Święty Mikołaj napotkał na nieoczekiwane wyzwanie. 
Jego główny komputer, który przechowuje listę prezentów dla dzieci na całym świecie, uległ awarii. 
Na szczęście dane nie zostały utracone, ale zostały całkowicie pomieszane. Każde dziecko ma przypisane ID 
i listę prezentów, które chciałoby otrzymać, ale teraz wszystko jest w nieładzie. Mikołaj musi szybko 
uporządkować te informacje, aby zapewnić, że każde dziecko otrzyma właściwe prezenty na czas. Mikołaj 
potrzebuje systemu, który pomoże mu zorganizować listę prezentów. Każdy prezent ma unikalny identyfikator
i należy do konkretnego dziecka. Twoim zadaniem jest stworzenie struktury danych, która pozwoli Mikołajowi
szybko odnaleźć wszystkie prezenty należące do danego dziecka oraz umożliwi łatwe dodawanie i usuwanie 
prezentów z listy. Pomóż Mikołajowi i zaprojektuj wydajną strukturę danych, która rozwiąże jego problem
przed świętami!`
// Tutaj skopiuj kod zadania
export class GiftRegistry {
  
  childrenIDs: Array<number> = [];
  presents: Array<Array<string>> = [];
  
  addGift(childId: number, present: string) {
    if(this.childrenIDs.indexOf(childId) < 0) {
      this.childrenIDs.push(childId);
      this.presents.push([present]);
    }
     else {
      if(this.presents[childId - 1].indexOf(present) === -1){
        this.presents[childId - 1].push(present);
      }
    }
  } 
  removeGift(childId: number, present: string) {
    if(this.childrenIDs.indexOf(childId) !== -1) {
      const id = this.presents[childId - 1].indexOf(present);
      if(id === -1){
        throw new Error('Gift not found');
      } else {
        this.presents[childId - 1].splice(id, 1);
      }
    }
  }
  getGiftsForChild(childId: number) {
    return this.presents[childId - 1];
  }
}
