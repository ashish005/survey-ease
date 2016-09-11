import { Component } from '@angular/core';
import { SecureViewComponent } from '../secure-view.main';
import { AppHeaderComponent } from '../common/app-header.main';
@Component({
    templateUrl: './survey-ease-app/app-modules/test-2/test-2.html',
    directives: [SecureViewComponent, AppHeaderComponent],
})
export class Test2Component {
}