import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('ngOnInit en el PriceComponent');

    this.interval$ = interval(1000).subscribe((value) =>
      console.log({ 'interval price component': value })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges en el PriceComponent');
    console.log({ PriceComponent: changes });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy en el PriceComponent');
    this.interval$?.unsubscribe();
  }
}
