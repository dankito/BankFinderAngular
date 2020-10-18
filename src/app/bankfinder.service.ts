import {Injectable, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class BankFinderService implements OnInit {

    banks = [];

    constructor(
        private http: HttpClient
    ) {
        this.http.get('/assets/BankList.json')
            .subscribe(banks => {
                this.banks = banks as any[]
            })
    }

    ngOnInit(): void {

    }

    searchBanks(query: String, result: (banks: any[]) => void) {
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
