import { Component } from '@angular/core';
import { ArtsService } from 'src/app/services/arts.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    arts: Array<any>;
    loading = true;

    constructor(public artsService: ArtsService) {
        artsService.getAll().subscribe(data => {
            this.arts = data;
            this.loading = false;
        });
    }
}
