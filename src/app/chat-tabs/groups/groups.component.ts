import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    public openChat(chat: string): void {
        this.router.navigate(['groups/' + chat]);
    }
}
