import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeDetectionService } from './../../../providers/size-detection.service';

@Component({
    selector: 'chat-info',
    templateUrl: './chat-info.component.html',
    styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent implements OnInit {
    constructor(private router: Router, public size: SizeDetectionService) {}

    ngOnInit() {}

    goBack(): void {
        this.router.navigate([this.router.url.replace('/details', '')]);
    }
}
