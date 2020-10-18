import { Component } from '@angular/core';

import { BankFinderService } from "../bankfinder.service";
import { Bank } from "../model/bank";


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {

  searchResult: Bank[]


  constructor(
      private bankFinderService: BankFinderService
  ) {
    this.searchResult = this.bankFinderService.banks
  }


  searchTextChanged(enteredText: String) {
    this.bankFinderService.searchBanks(enteredText, banks => this.searchResult = banks)
  }

}
