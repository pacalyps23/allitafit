import { Component, OnInit } from '@angular/core';
import { parseCookieValue } from '@angular/common/src/cookie';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {
   ama1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ama2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ama1Total: number;
   ama2Total: number;
   amaAll: number;

   anna1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   anna2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   anna1Total: number;
   anna2Total: number;
   annaAll: number;

   bruce1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   bruce2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   bruce1Total: number;
   bruce2Total: number;
   bruceAll: number;

   debra1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   debra2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   debra1Total: number;
   debra2Total: number;
   debraAll: number;

   evg1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   evg2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   evg1Total: number;
   evg2Total: number;
   evgAll: number;

   gwen1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   gwen2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   gwen1Total: number;
   gwen2Total: number;
   gwenAll: number;
   
   ind1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ind2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ind1Total: number;
   ind2Total: number;
   indAll: number;

   met1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   met2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   met1Total: number;
   met2Total: number;
   metAll: number;

   nao1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   nao2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   nao1Total: number;
   nao2Total: number;
   naoAll: number;

   pam1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pam2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pam1Total: number;
   pam2Total: number;
   pamAll: number;

   pav1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pav2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pav1Total: number;
   pav2Total: number;
   pavAll: number;

   sham1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sham2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sham1Total: number;
   sham2Total: number;
   shamAll: number;

   son1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   son2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   son1Total: number;
   son2Total: number;
   sonAll: number;

  constructor() {
    this.ama1Total = this.ama1.reduce((partial_sum, a) => partial_sum + a); 
    this.ama2Total = this.ama2.reduce((partial_sum, a) => partial_sum + a);
    this.amaAll = this.ama1Total + this.ama2Total;

    this.anna1Total = this.anna1.reduce((a,b)=> a + b);
    this.anna2Total = this.anna2.reduce((a,b)=> a + b);
    this.annaAll = this.anna1Total + this.anna2Total;

    this.bruce1Total = this.bruce1.reduce((a,b)=> a + b);
    this.bruce2Total = this.bruce2.reduce((a,b)=> a + b);
    this.bruceAll = this.bruce1Total + this.bruce2Total;

    this.debra1Total = this.debra1.reduce((a,b)=> a + b);
    this.debra2Total = this.debra2.reduce((a,b)=> a + b);
    this.debraAll = this.debra1Total + this.debra2Total;

    this.evg1Total = this.evg1.reduce((a,b)=> a + b);
    this.evg2Total = this.evg2.reduce((a,b)=> a + b);
    this.evgAll = this.evg1Total + this.evg2Total;

    this.gwen1Total = this.gwen1.reduce((a,b)=> a + b);
    this.gwen2Total = this.gwen2.reduce((a,b)=> a + b);
    this.gwenAll = this.gwen1Total + this.gwen2Total;

    this.ind1Total = this.ind1.reduce((a,b)=> a + b);
    this.ind2Total = this.ind2.reduce((a,b)=> a + b);
    this.indAll = this.ind1Total + this.ind2Total;

    this.met1Total = this.met1.reduce((a,b)=> a + b);
    this.met2Total = this.met2.reduce((a,b)=> a + b);
    this.metAll = this.met1Total + this.met2Total;

    this.nao1Total = this.nao1.reduce((a,b)=> a + b);
    this.nao2Total = this.nao2.reduce((a,b) => a + b);
    this.naoAll = this.nao1Total + this.nao2Total;

    this.pam1Total = this.pam1.reduce((a,b)=> a + b);
    this.pam2Total = this.pam2.reduce((a,b)=> a + b);
    this.pamAll = this.pam1Total + this.pam2Total;

    this.pav1Total = this.pav1.reduce((a,b)=> a + b);
    this.pav2Total = this.pav2.reduce((a,b)=> a + b);
    this.pavAll = this.pav1Total + this.pav2Total;

    this.sham1Total = this.sham1.reduce((a,b)=> a + b);
    this.sham2Total = this.sham2.reduce((a,b)=> a + b);
    this.shamAll = this.sham1Total + this.sham2Total;

    this.son1Total = this.son1.reduce((a,b)=> a + b);
    this.son2Total = this.son2.reduce((a,b)=> a + b);
    this.sonAll = this.son1Total + this.son2Total;
   }

  ngOnInit() {
  }

}
