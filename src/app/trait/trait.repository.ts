import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trait } from './trait.model';

@Injectable({ providedIn: 'root' })
export class TraitRepository {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTraits(userId: number): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.apiUrl}/user/${userId}`)
  }
}
