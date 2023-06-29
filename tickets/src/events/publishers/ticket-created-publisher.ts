import { Publisher, Subjects, TicketCreatedEvent } from '@iaincarr/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
