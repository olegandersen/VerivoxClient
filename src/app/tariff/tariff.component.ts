import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TariffModel } from '../tariff-model';
import { TariffService } from '../services/tariff.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffComponent implements OnInit {
  @Input()
  tariff: TariffModel;
  isFromRoute: Boolean = false;

  constructor(private route: ActivatedRoute, private tariffService: TariffService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    const tariffId = this.route.snapshot.paramMap.get('id');
    if (tariffId) {
      this.isFromRoute = true;
      this.tariffService.getTariff(Number(tariffId)).subscribe(tariff => {
        this.tariff = tariff;
        this.cdr.markForCheck();
      });
    }
  }

}
