import { Subjects, Publisher, PaymentCreatedEvent } from '@iaincarr/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
