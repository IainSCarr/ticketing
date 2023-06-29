import { Subjects, Publisher, ExpirationCompleteEvent } from '@iaincarr/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
