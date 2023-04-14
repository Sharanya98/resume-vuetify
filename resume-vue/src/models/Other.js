export class Other {
    constructor({ sex = ``, birthday =` ` ,nationality = ``, email = `` ,phone = ``,bio = ``,your_motive =``,self_PR =``,health_status=``,programming_lanuage=[]} = {}) {
      this.sex = sex;
      this.birthday = birthday;
      this.nationality = nationality;
      this.email = email;
      this.phone = phone;
      this.bio =  bio;
      this.your_motive = your_motive;
      this.self_PR = self_PR;
      this.health_status = health_status
      this.programming_lanuage = programming_lanuage
    }
  }
  
  export function createOther(data) {
    return Object.freeze(new Other(data));
  }