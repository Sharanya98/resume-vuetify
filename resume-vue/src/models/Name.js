export class Name {
    constructor({ first_name = ``, last_name = ``,first_name_Kana = ``,last_name_Kana = ``} = {}) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.first_name_Kana = first_name_Kana;
      this.last_name_Kana = last_name_Kana;
    }
  }
  
  export function createName(data) {
    return Object.freeze(new Name(data));
  }