import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

router:Router;

  constructor(router:Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

goToActive(){
  this.router.navigate([''])


}

}
