export class Address {
    constructor({ full_address = ``,full_address_kana = ``,postal_code = ``} = {}) {
      this.full_address = full_address;
      this.full_address_kana = full_address_kana;
      this.postal_code = postal_code;
    }
  }
  
  export function createAddress(data) {
    return Object.freeze(new Address(data));
  }