import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeDetectionService } from './../../providers/size-detection.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
    constructor(private router: Router, public sizeDetect: SizeDetectionService) {}

    ngOnInit() {}

    showChatInfo(): boolean {
        return this.sizeDetect.shouldShowSplitPane() && this.router.url.indexOf('details') > -1;
    }
}
