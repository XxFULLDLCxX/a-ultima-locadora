import { faker } from '@faker-js/faker';
import prisma from 'database';

export function buildRental({ endDate = faker.date.birthdate(), closed = faker.datatype.boolean() } = {}) {
  return prisma.rental.create({ data: { endDate, closed } });
}
