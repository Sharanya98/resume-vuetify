import { createAddress } from './Address';
import { createOther } from './Other';
import { createName } from './Name';
import { createEducation } from './Education';
import { createExperience } from './Experience';
import { isProxy, toRaw } from 'vue';

export class CreateProfile {
  constructor({ address = null, name = null,sex , birthday  ,nationality, email ,phone ,bio ,your_motive ,self_PR ,health_status ,education =[],experience=[],programming_lanuage=[],special_skills_and_hobbies=[],extra_curricular_activities=[],sports=[],licenses_certification=[]} = {}) {
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
    this.experience = experience;
    this.programming_lanuage = programming_lanuage;
    this.special_skills_and_hobbies = special_skills_and_hobbies;
    this.extra_curricular_activities = extra_curricular_activities;
    this.sports = sports;
    this.licenses_certification = licenses_certification

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
  const education = toRaw(data.education)
  const experience = toRaw(data.experience)
  const programming_lanuage = toRaw(data.programming_lanuage)
  const special_skills_and_hobbies = toRaw(data.skill)
  const extra_curricular_activities = toRaw(data.activity)
  const sports = toRaw(data.sports)
  const licenses_certification = toRaw(data.certificate)


  return Object.freeze(new CreateProfile({ licenses_certification, sports,extra_curricular_activities,special_skills_and_hobbies,programming_lanuage,experience, education,address, name,sex , birthday  ,nationality, email ,phone ,bio ,your_motive ,self_PR ,health_status}));
}