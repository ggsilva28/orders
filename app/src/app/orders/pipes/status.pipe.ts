import { Pipe, PipeTransform } from '@angular/core';
import { EStatus } from '../types/orders.type';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(status: EStatus): string {
      switch (status) {
        case EStatus.CANCELLED:
          return 'Cancelled';
        case EStatus.PENDING:
          return 'Pending';
        case EStatus.IN_PRODUCTION:
          return 'In Production';
        default:
          return 'Unknown';
      }
  }

}
