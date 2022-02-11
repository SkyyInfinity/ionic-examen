import { Component } from '@angular/core';
import { ArtsService } from 'src/app/services/arts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
    art: any;
    loading = true;

    constructor(public route: ActivatedRoute, public artsService: ArtsService) {
        const id: number = parseInt(route.snapshot.params.id, 10);

        artsService.getOneById(id).subscribe(data => {
            this.art = data;
            console.log(data);
        });
    }
}
