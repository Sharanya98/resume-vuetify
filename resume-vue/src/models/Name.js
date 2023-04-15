export class Name {
    constructor({ first_name = ``, last_name = ``,first_name_kana = ``,last_name_kana = ``} = {}) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.first_name_kana = first_name_kana;
      this.last_name_kana = last_name_kana;
    }
  }
  
  export function createName(data) {
    return Object.freeze(new Name(data));
  }