import { Component } from '@angular/core';
import { SecureViewComponent } from '../secure-view.main';
import { AppHeaderComponent } from '../common/app-header.main';
import { SurveyContentItemComponent } from '../common/utility/survey-content-item.component';

@Component({
    templateUrl: './survey-ease-app/app-modules/test-1/test-1.html',
    directives: [SecureViewComponent, AppHeaderComponent, SurveyContentItemComponent],
})
export class Test1Component {
}