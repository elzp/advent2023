`W ostatnim tygodniu przed Bożym Narodzeniem, Święty Mikołaj stanął przed niecodziennym wyzwaniem.
Pomocnicy Mikołaja zgłosili, że w centralnym systemie zarządzania listami życzeń dzieci nastąpił
ogromny wzrost ruchu. Na skutek tego, dostęp do bazy danych z życzeniami zagroził przeciążeniem
systemu. Święty Mikołaj postanowił, że potrzebny jest algoritm limitowania ruchu do systemu, aby
każde dziecko miało sprawiedliwą szansę na złożenie swojego zamówienia do Świętego. Algorytm miał 
gwarantować, że w określonej jednostce czasu, tylko pewna liczba prób dostępu będzie przetwarzana,
a wszystkie nadmiarowe próby zostaną odrzucone lub odłożone do późniejszego czasu. Właśnie ty, jako
doświadczony inżynier oprogramowania, zostałeś poproszony, byś zaprojektował i wdrożył niezawodny
system limitowania ruchu, który zadba o równowagę obciążenia w systemie.`
const { performance } = require('perf_hooks');
export class RateLimiter {
  maxRequests: number = 0;
  intervalMs: number = 0;
  timesOfGivenAccess: number = 0;
  timeOfLastAccess= 0
  constructor(maxRequests: number, intervalMs: number){
    this.maxRequests = maxRequests;
    this.intervalMs = intervalMs;

  }
  attemptAccess(){
    if(this.timesOfGivenAccess < this.maxRequests){
      this.timeOfLastAccess = performance.now();
      this.timesOfGivenAccess++;
      return true;
    } else {
      if(performance.now() - this.timeOfLastAccess > this.intervalMs){
        return true
      } else {
        return false;
      }
    }
  }

}
