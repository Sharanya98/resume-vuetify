export class Experience {
    constructor({ companyName = ``,position = ``,startYear = ``,startMonth = ``} = {}) {
      this.companyName = companyName,
      this.position = position,
      this.startYear = startYear,
      this.startMonth = startMonth
    }
  }
  
  export function createExperience(data) {
    return Object.freeze(new Experience(data));
  }