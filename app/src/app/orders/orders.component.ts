import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { EStatus, IOrders } from './types/orders.type';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { StatusPipe } from './pipes/status.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalCancelComponent } from './components/modal-cancel/modal-cancel.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    StatusPipe,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'date',
    'customer',
    'address1',
    'city',
    'postcode',
    'country',
    'amount',
    'status',
    'last_modified',
    'action',
  ];

  ordersNotFiltered: IOrders[] = [];
  orders!: MatTableDataSource<IOrders>;
  selectedStatus: EStatus | 0 = 0;
  searchValue = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  readonly EStatus = EStatus;

  constructor(
    private _ordersService: OrdersService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._getData();
  }

  applyFilter() {
    if (this.selectedStatus !== 0) {
      this.orders = new MatTableDataSource(
        this.ordersNotFiltered.filter((order) => order.status === this.selectedStatus)
      )
    }else{
      this.orders = new MatTableDataSource(this.ordersNotFiltered)
    }

    this.orders.paginator = this.paginator;
    this.orders.sort = this.sort;

    const filterValue = this.searchValue;
    this.orders.filter = filterValue.trim().toLowerCase();

    if (this.orders.paginator) {
      this.orders.paginator.firstPage();
    }
  }

  updateSearch(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.applyFilter();
  }

  cancelOrder(id: number) {
    this._dialog
      .open(ModalCancelComponent, {
        data: { id },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._ordersService.cancel(id).subscribe((data) => {
            this._snackBar.open(data.message, 'Close', {
              duration: 3000,
            });

            this._getData();
          });
        }
      });
  }

  private _getData() {
    this._ordersService.get().subscribe((orders) => {
      this.ordersNotFiltered = orders;

      this.applyFilter();
    });
  }
}
