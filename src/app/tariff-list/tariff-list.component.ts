import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { TariffModel } from '../tariff-model';
import { TariffService } from '../services/tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffListComponent implements OnInit {
  tariffs: TariffModel[] = [];
  sortedTariffs: TariffModel[] = [];

  constructor(private tariffService: TariffService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.tariffService.getTariffs().subscribe(tariffs => {
      this.tariffs = tariffs;
      this.sortedTariffs = tariffs;
      this.cdr.markForCheck();
    });
  }
  
  public trackByFn(index, item) {
    return item.id;
  }

  public sortBy(property): void {
    this.sortedTariffs = [...this.tariffs].sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      else if (a[property] < b[property]) {
        return -1;
      }

      return 0;
    });

    this.cdr.markForCheck();
  }

}
