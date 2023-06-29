import request from 'supertest';
import { app } from '../app';

const createTicket = async (title: string, price: number) => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title, price })
    .expect(201);
};

it('can fetch a list of tickets', async () => {
  await createTicket('concert', 20);
  await createTicket('football', 50);
  await createTicket('swimming', 2.5);

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
