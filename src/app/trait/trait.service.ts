import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TraitRepository} from './trait.repository';
import {Trait} from './trait.model';

@Injectable({
  providedIn: 'root'
})
export class TraitService {

  constructor(private traitRepo: TraitRepository) { }

  getTraits(userId: number): Observable<Trait[]> {
    return this.traitRepo.getTraits(userId)
  }
}
