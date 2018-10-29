import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TARIFFS } from '../mock-tariffs';
import { TariffModel } from '../tariff-model';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  public getTariffs(): Observable<TariffModel[]> {
    return of(TARIFFS);
  }

  public getTariff(id: number): Observable<TariffModel> {
    return of(TARIFFS.find(tariff => tariff.id === id));
  }
}
