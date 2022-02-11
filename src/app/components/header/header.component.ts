import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() title = 'Header';
    @Input() hasBackButton = false;

    constructor() {}

}
/*
HowToUse :
<app-header
    title="ArtSpot"
    [hasBackButton]="true"
></app-header>
*/
