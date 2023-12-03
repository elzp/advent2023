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
