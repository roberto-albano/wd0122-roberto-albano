import { Component, OnInit } from '@angular/core';
import { getPosts } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

activePost !: Post[]

  constructor() {
    getPosts().then((p)=>{
      this.activePost = p
    })

   }

  ngOnInit(): void {
  }

}
