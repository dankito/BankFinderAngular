import { Component } from '@angular/core';

import { banks } from '../banks';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {
  banks = banks;

}
