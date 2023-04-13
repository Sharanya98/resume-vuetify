import { createAddress } from './Address';
import { createOther } from './Other';
import { createName } from './Name';
import { createEducation } from './Education';

export class CreateProfile {
  constructor({ address = null, name = null,sex , birthday  ,nationality, email ,phone ,bio ,your_motive ,self_PR ,health_status ,education =[]} = {}) {
    this.name = name;
    this.address = address;
    this.sex = sex;   
      this.birthday = birthday;
      this.nationality = nationality;
      this.email = email;
      this.phone = phone;
      this.bio =  bio;
      this.your_motive = your_motive;
      this.self_PR = self_PR;
      this.health_status = health_status;
    this.education = education;

  }
}

export function createProfile(data) {
  const name = createName(data.name);
  const address = createAddress(data.address);
  const sex =  data.sex;   
  const birthday = data.birthday;
  const nationality = data.nationality;
  const email = data.email;
  const phone = data.phone;
  const bio =  data.bio;
  const your_motive = data.your_motive;
  const self_PR = data.self_PR;
  const health_status = data.health_status
  const education = data.education.map(x => createEducation(x))


  return Object.freeze(new CreateProfile({ education,address, name,sex , birthday  ,nationality, email ,phone ,bio ,your_motive ,self_PR ,health_status}));
}