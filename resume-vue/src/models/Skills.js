export class Skill {
    constructor({ skillName = ``,totalYear = ``} = {}) {
      this.skillName = skillName,
      this.totalYear = totalYear
 
    }
  }
  
  export function createSkill(data) {
    return Object.freeze(new Skill(data));
  }