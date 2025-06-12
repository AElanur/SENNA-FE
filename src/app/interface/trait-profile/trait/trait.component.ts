import {Component, Input} from '@angular/core';
import {Trait} from '../../../models/trait.model';

@Component({
  selector: 'app-trait',
  imports: [],
  templateUrl: './trait.component.html',
  styleUrl: './trait.component.scss'
})
export class TraitComponent {
  @Input() trait!: Trait

}
