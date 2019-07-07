import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const TABS = {
    GROUPS: 'groups',
    DIRECTS: 'directs',
    PATIENTS: 'patients'
};

@Component({
    selector: 'app-chat-tabs',
    templateUrl: './chat-tabs.page.html',
    styleUrls: ['./chat-tabs.page.scss']
})
export class ChatTabsPage implements OnInit {
    TABS = TABS;
    private selectedTab = TABS.GROUPS;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {}

    selectTab(tab): void {
        this.selectedTab = tab;
    }
}
