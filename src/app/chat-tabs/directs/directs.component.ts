import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-directs',
    templateUrl: './directs.component.html',
    styleUrls: ['./directs.component.scss']
})
export class DirectsComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    public openChat(chat: string): void {
        this.router.navigate(['directs/' + chat]);
    }
}
