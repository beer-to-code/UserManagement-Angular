import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: 'buttonstyle' })


export class buttonDirective implements OnInit {

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "green";
        this.elementRef.nativeElement.style.color="red";
    }
}