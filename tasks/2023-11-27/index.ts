// Tutaj skopiuj kod zadania
`Święty Mikołaj ma problem. Jego renifery zauważyły, że listy od dzieci z całego świata 
nie są odpowiednio sortowane. Listy powinny być uporządkowane według priorytetu, który 
jest wyrażony liczbą - im wyższa liczba, tym wyższy priorytet. Mikołaj potrzebuje systemu, 
który pomoże mu szybko i efektywnie organizować listy, aby żadne życzenie nie zostało pominięte. 
Renifery są ekspertami od logistyki, a nie od struktur danych, więc Mikołaj zwraca się o pomoc do 
programistów. Czy jesteś w stanie stworzyć dla niego odpowiednią strukturę danych, która pomoże mu 
w sortowaniu listów? Czas ucieka!`


export class ChristmasQueue <T> {
  queue: Array<any> = [];
    // from max to min order
  enqueue(gift: T, orderNumber: number) {
    const giftObject = {gift, orderNumber};
    if(this.isEmpty() === true) {
      this.queue.push(giftObject);
    } else {
      let index = 0;
      if(orderNumber>this.queue[index].orderNumber) {
        this.queue.unshift(giftObject);
      } else {
        while(orderNumber<=this.queue[index].orderNumber && index < this.queue.length - 1) {
          index++;
        }
        this.queue.splice(index, 0, giftObject);
      }

    }
  }
  dequeue() {
    if(this.isEmpty() === true) {
      throw new Error('There are no letters in the queue!');
    } else {
      const show = this.queue[0].gift;
      this.queue.shift();
      return show;
    }
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}