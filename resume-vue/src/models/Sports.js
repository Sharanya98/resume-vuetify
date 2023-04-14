export class Sport {
    constructor({ sportName = ``,totalYear = ``} = {}) {
      this.sportName = sportName,
      this.totalYear = totalYear
 
    }
  }
  
  export function createSport(data) {
    return Object.freeze(new Sport(data));
  }