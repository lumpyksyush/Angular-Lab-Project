import { Component, OnInit } from '@angular/core'
import { CanComponentDeactivate } from '../cancel-guard.guard'

@Component({
    selector: 'app-cancel-dialog',
    templateUrl: './cancel-dialog.component.html',
    styleUrls: ['./cancel-dialog.component.scss'],
})
export class CancelDialogComponent implements CanComponentDeactivate {
    constructor() {}

    ngOnInit(): void {}

    confirm() {
        return confirm('Are you sure you want to exit the editing form?')
    }
}
