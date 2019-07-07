import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SizeDetectionService {
    constructor() {}

    shouldShowSplitPane(): boolean {
        return window.innerWidth > 768;
    }
}
