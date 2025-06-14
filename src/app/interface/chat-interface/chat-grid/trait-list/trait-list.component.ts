import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Trait} from '../../../../models/trait.model';
import {TraitService} from '../../../../services/trait.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trait-list',
  imports: [

  ],
  templateUrl: './trait-list.component.html',
  styleUrl: './trait-list.component.scss'
})
export class TraitListComponent implements OnInit, OnChanges {
  @Input() refreshTrigger: number = 0;
  traits: Trait[] | null = null;
  constructor(private traitService: TraitService,
              private router: ActivatedRoute) {}

  ngOnInit() {
    const userId = Number(this.router.snapshot.paramMap.get('userID'));
    this.getTraits(userId)
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['refreshTrigger'] && !changes['refreshTrigger'].firstChange) {
      const userId = Number(this.router.snapshot.paramMap.get('userID'));
      this.getTraits(userId); // Refresh traits
    }
  }
}
