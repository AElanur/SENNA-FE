import { Component } from '@angular/core';
import { TraitComponent} from '../trait/trait.component';
import {Trait} from '../../../trait/trait.model';
import {TraitService} from '../../../trait/trait.service';

@Component({
  selector: 'app-trait-list',
  imports: [
    TraitComponent
  ],
  templateUrl: './trait-list.component.html',
  styleUrl: './trait-list.component.scss'
})
export class TraitListComponent {
  traits: Trait[] | null = null;
  constructor(private traitService: TraitService) {}

  ngOnInit() {
    this.getTraits(1)
  }

  getTraits(userId: number): void {
    this.traitService.getTraits(userId).subscribe({
      next: (traits: Trait[]) => {
        this.traits = traits;
        console.log(this.traits)
      },
      error: (err) => {
        this.traits = [];
        console.error('Error fetching traits: ', err)
      }
    })
  }
}
