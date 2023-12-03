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
  removeGift(childId: number, present: string) {}
  getGiftsForChild(childId: number) {
    return this.presents[childId - 1];
  }
}
