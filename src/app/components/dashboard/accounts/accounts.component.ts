import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  public searchInput!: any;
  public users: [] = [];
  public isFilter: boolean = false;
}
