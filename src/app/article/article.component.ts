import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogComponent } from '../blog/blog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cscClass = 'row';
@Input() article: any;
isAuth: boolean = false;
email: string;
voters: Array<String>;

  constructor(private afs: AngularFirestore, private blog: BlogComponent, private toastr: ToastrService) {
    if(blog.user !== null){
      this.isAuth = true;
      this.email = blog.user.email;
    }
   }

voteUp(postId){
  this.voters = this.article.data.voters;
  if(!this.isAuth){
    this.toastr.error("Must sign in to vote");
  }
  else if(this.hasVoted()){
    this.toastr.info("Already Voted!")
  }
  else{
     this.afs.collection('article').doc(postId).update({votes: this.article.data.votes + 1,
       voters: this.voters });
  }
  return false;//tries to call parent class so it tries to reloasd if you don't make it return false
}

voteDown(postId){
  this.voters = this.article.data.voters;
  if(!this.isAuth){
    this.toastr.error("Must sign in to vote");
  }
  else if(this.hasVoted()){
    this.toastr.info("Already Voted!")
  }
  else{
     this.afs.collection('article').doc(postId).update({votes: this.article.data.votes - 1,
       voters: this.voters });
  }
  return false;//tries to call parent class so it tries to reloasd if you don't make it return false
}

hasVoted(){
  if(this.voters.includes(this.email)){
    return true;
  } else{
    this.voters.push(this.email);
    return false;
  }
  
}

  ngOnInit() {

  }

}
