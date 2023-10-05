import { faker } from '@faker-js/faker';
import prisma from 'database';

export function buildMovie() {
  prisma.movie.create({
    data: {
      name: faker.music.songName(),
      adultsOnly: faker.datatype.boolean(),
    },
  });
}
