import { Publisher, Subjects, TicketUpdatedEvent } from '@iaincarr/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
