import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeDetectionService } from './../../../providers/size-detection.service';

@Component({
    selector: 'chat-content',
    templateUrl: './chat-content.component.html',
    styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {
    constructor(private router: Router, public size: SizeDetectionService) {}

    ngOnInit() {}

    toggleChatInfo(): void {
        if (this.router.url.indexOf('details') > -1) {
            this.router.navigate([this.router.url.replace('details', '')]);
        } else {
            this.router.navigate([this.router.url + '/details']);
        }
    }

    goBack(event: Event): void {
        event.stopPropagation();
        this.router.navigate(['/']);
    }
}
