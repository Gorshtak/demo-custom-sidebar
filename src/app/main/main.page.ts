import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SizeDetectionService } from './../providers/size-detection.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
    constructor(public router: Router, public sizeDetect: SizeDetectionService) {}

    ngOnInit() {}

    showEmptyChat(): boolean {
        return this.sizeDetect.shouldShowSplitPane() && this.router.url.length < 2;
    }
}
