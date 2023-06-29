import { Publisher, OrderCancelledEvent, Subjects } from '@iaincarr/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
