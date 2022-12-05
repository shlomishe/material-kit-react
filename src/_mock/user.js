import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  date: faker.company.name(),
  benficery: faker.company.name(),
  phone: faker.company.name(),
  count: sample(['1', '2', '3']),
  sender: faker.company.name(),
  status: sample(['active', 'banned']),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
}));
// const { id, name, date, sender, benficery, phone, count, status, isVerified} = row;

export default users;
