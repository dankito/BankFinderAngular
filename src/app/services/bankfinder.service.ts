import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Bank } from "../model/bank";


@Injectable({
    providedIn: 'root'
})
export class BankFinderService {

    banks: Bank[] = []


    constructor(
        private http: HttpClient
    ) {
        this.http.get('/assets/BankList.json')
            .subscribe(banks => {
                this.banks = banks as Bank[]
            })
    }


    searchBanks(query: String, result: (banks: Bank[]) => void) {
        if (!!! query || !!! query.trim()) {
            result(this.banks)

            return
        }

        let lowerCaseQuery = query.toLocaleLowerCase()

        result(this.banks.filter(bank => {
            return bank.bankCode.startsWith(lowerCaseQuery)
                || bank.name.toLocaleLowerCase().includes(lowerCaseQuery)
                || bank.city.toLocaleLowerCase().startsWith(lowerCaseQuery)
        }));
    }
}
