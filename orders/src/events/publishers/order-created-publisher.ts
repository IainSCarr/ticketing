import { Publisher, OrderCreatedEvent, Subjects } from '@iaincarr/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
