import { Component } from '@angular/core';
import {Trait} from '../../../../models/trait.model';
import {TraitService} from '../../../../services/trait.service';

@Component({
  selector: 'app-trait-list',
  imports: [

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
      },
      error: (err) => {
        this.traits = [];
        console.error('Error fetching traits: ', err)
      }
    })
  }
}
