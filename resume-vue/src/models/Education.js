export class Education {
    constructor({ schoolName ,degree,startYear,startMonth } = {}) {
      this.schoolName = schoolName,
      this.degree = degree,
      this.startYear = startYear,
      this.startMonth = startMonth
    }
  }
  
  export function createEducation(data) {
    return Object.freeze(new Education(data));
  }