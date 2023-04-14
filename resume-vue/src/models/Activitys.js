export class Activity {
    constructor({ activityName = ``,totalYear = ``} = {}) {
      this.activityName = activityName,
      this.totalYear = totalYear
 
    }
  }
  
  export function createActivity(data) {
    return Object.freeze(new Activity(data));
  }