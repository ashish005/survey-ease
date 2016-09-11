import { Component } from '@angular/core';
import { SecureViewComponent } from '../secure-view.main';

@Component({
    template: `<div><set-header></set-header><div>Test1</div></div>`,
    directives: [SecureViewComponent],
})
export class Test1Component {
}