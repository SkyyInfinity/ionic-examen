import { Component } from '@angular/core';
import { Art } from 'src/app/models/art';
import { Router } from '@angular/router';
import { ArtsService } from 'src/app/services/arts.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {
    art: Art = new Art();
    success = false;

    constructor(private router: Router, private artService: ArtsService, private toastController:ToastController) { }

    onSubmit() {
        this.artService.add(this.art).subscribe(async () => {
            const toast = await this.toastController.create({
                message: 'La ville est ajouté !',
                duration: 3500,
                color: 'success'
            });
            toast.present();
            this.success = true;
            this.router.navigate(['/']);
        });
    }
}
