import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!:Subscription;
  sub2!:Subscription;
  ngOnInit(): void {

    this.sub = interval(1000).subscribe(numero => console.log(numero));

    const customInterval = new Observable(observer => {

    let count = 0;
    setInterval(() => {

    observer.next()

    if(count > 3){
      observer.error('numero troppo elevato')
    }

    if(count == 2){
      observer.complete();
    }
      count++;
    },1000)

    })

    this.sub2 = customInterval.subscribe(
      numero => console.log(numero),
      error => console.log(error),
      () => console.log('completo')
    );

  }
  ngOnDestroy(): void {
    //this.sub.unsubscribe();
    this.sub2.unsubscribe();
}

  }
