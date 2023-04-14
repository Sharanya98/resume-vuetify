export class Certificate {
    constructor({ licenseName = ``,licenseDateYear = ``,licenseDateMonth = ``} = {}) {
      this.licenseName = licenseName,
      this.licenseDateYear = licenseDateYear,
      this.licenseDateMonth = licenseDateMonth

 
    }
  }
  
  export function createCertificate(data) {
    return Object.freeze(new Certificate(data));
  }