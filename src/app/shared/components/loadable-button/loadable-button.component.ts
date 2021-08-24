import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loadable-button',
  templateUrl: './loadable-button.component.html',
  styleUrls: ['./loadable-button.component.scss']
})
export class LoadableButtonComponent {

  @Input() class: string;
  @Input() icon: string;
  @Input() loading: boolean;


}
