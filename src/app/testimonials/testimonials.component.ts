import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';
import { Testimonial } from '../testimonial-model/testimonial.model';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  sortedTestimonials: Array<Testimonial> = new Array();
  testimonials: Array<any> = new Array<any>();
  ama: Testimonial;
  chet: Testimonial;
  kiki: Testimonial;
  bruce: Testimonial;
  naomi: Testimonial;
  amber: Testimonial;
  metty: Testimonial;
  india: Testimonial;
  pavithra: Testimonial;
  simone: Testimonial;
  tracy: Testimonial;
  sara: Testimonial;

  amaPics = [];
  chetPics = [];
  kikiPics = [];
  brucePics = [];
  naomiPics = [];
  amberPics = [];
  mettyPics = [];
  indiaPics = [];
  pavPics = [];
  simonePics = [];
  tracyPics = [];
  saraPics = [];
  mobileWidth;

  constructor(private sanitizer: DomSanitizer, private auth: AuthService) {

    for(var i = 1; i < 3; i++){
      this.amaPics.push(`../../assets/img/ama/ama${i}.jpg`);
    }
    for(var i = 1; i < 4; i++){
      this.chetPics.push(`../../assets/img/chet/chet${i}.jpg`);
    }
    for(var i = 1; i < 6; i++){
      this.kikiPics.push(`../../assets/img/kiki/kiki${i}.jpg`);
    }
    for(var i = 1; i < 5; i++){
      this.brucePics.push(`../../assets/img/bruce/bruce${i}.jpg`);
    }

    for(var i = 1; i < 5; i++){
      this.naomiPics.push(`../../assets/img/naomi/naomi${i}.jpg`);
    }

    for(var i = 1; i < 3; i++){
      this.amberPics.push(`../../assets/img/amber/amber${i}.jpg`);
    }

    for(var i = 1; i < 3; i++){
      this.mettyPics.push(`../../assets/img/metty/metty${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.indiaPics.push(`../../assets/img/india/india${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.pavPics.push(`../../assets/img/pav/pav${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.simonePics.push(`../../assets/img/simone/sim${i}.jpg`);
    }

    for(var i = 2; i < 3; i++){
      this.tracyPics.push(`../../assets/img/tracy/tracy${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.saraPics.push(`../../assets/img/sara/sara${i}.jpg`);
    }

    this.amaPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/UeAjr2p25po"));
    this.chetPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/b-SVOkghCb4"));
    this.kikiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OrM-fcOhc-8"));
    this.brucePics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dwDLnmQMWKI"));
    this.naomiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/f5PQAwLApm4"));
    this.mettyPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VPM-dzrEx4E"));
    this.indiaPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qQ0bSwyVFgE"));

    this.ama = new Testimonial(this.amaPics, "Ama", "Welcome Ama! She is 61 years old, and just accomplished 15 \
    months of training!!! Wow, great job! Ama got stronger, happier, and healthier! Love her very much and very \
    proud of her! Together with Metty she has too much fun during trainings, very active in a group life and \
    pushes her limits.", new Date(2018, 3, 4));

    this.amber = new Testimonial(this.amberPics, "Amber", "My experience training with Alla was amazing! Alla \
    is not only the best trainer, but also a wonderful person. My experience training with Alla was fun and a \
    great learning experience. Alla created a fun competition between myself and 4 other women, where after a \
    month of training whomever lost the most weight and inches and gained muscle won a cash prize. With the \
    physical training and nutritional knowledge I received from Alla, I was able to win that competition. It \
    was nice to win that prize, but what was even better than winning was the knowledge and experience I got\
    while achieving my goals. Thank You Alla for all of your help!", new Date(2018, 5, 22));

    this.bruce = new Testimonial(this.brucePics, "Bruce", 'Bruce started training with me a few month ago \
    and already have great results! Besides weight loss, his flexibility and mobility improved, and (I say \
    that guys are very lucky to be more athletic by nature) his strength increasing every training and I am\
    very happy to be able increase workout intensity more and more! Also, he and Naomi got to the final \
    round of "Body Fat% Loss" competition and final measurements are on April 14th, let\'s see who will get 1st place!',
    new Date(2018, 6, 14));

    this.chet = new Testimonial(this.chetPics, "Chet", "Everyone please welcome Chet! He was in the military for 12 \
    years, and when I met him first he was already 12 month out of service. If you have spent years following a \
    military work schedule, deployments and early morning group physical exercises, a relaxed lifestyle can be a \
    welcome change. The transition period from active duty to civilian life can be both exciting and stressful. \
    However, one change that isn’t wanted is a substantial weight gain, which many veterans experience following \
    their separation from service. According to the Department of Veterans Affairs (VA), 78% of veterans are either \
    overweight or obese. In 6 month of training with me Chet regain his mobility and strength, also he started yoga \
    classes and improved flexibility and balance. Chet put 110% in every workout, and with a good muscle background \
    body responded immediately! We saw progress in 4 month already! Very proud of you and honored to work with you!",
    new Date(2018, 7, 18));

    this.india = new Testimonial(this.indiaPics, "India", "India, it's been almost 1.5 year as we are in this fitness \
    journey together! I love your positivity and enthusiasm during trainings, you take every challenge with laugh \
    even when you say you will cry :) You pushing your limits and thats what brings results! You have made this \
    testimonial when you just started and you moved so much since then! It's time to set new goals and crush them! \
    Get summer 2019 ready! Vacation is coming soon :)", new Date(2018, 9, 29));

    this.kiki = new Testimonial(this.kikiPics, "Kiki", "Kiki's goal was to be in the best shape in her life by her \
    birthday...But she didn't stop! She keep crushing her goals, setting new goals and besides 2-3 times a week \
    training with me she does soul cycling, yoga, and HIIT classes! This girl is a fire!", new Date(2019, 10, 30));

    this.metty = new Testimonial(this.mettyPics, "Metty", "Metty started exercise with me a little over a year ago, \
    she lost 17 lb and gained muscles, improved health and increased strength level. She says that she doesn't want \
    to loose weight any more, but she keeps working out because it's her lifestyle now and exercise makes her feel \
    good. She is always having way too much fun with girls during our sessions and sometimes it seems like we have \
    a party!:))) Metty is very dedicated and I always set her as example of good nutrition and consistent trainings. \
    So happy to have such amazing clients who become family!", new Date(2018, 11, 24));

    this.naomi = new Testimonial(this.naomiPics, "Naomi", "Naomi made this testimonial when she was working out 7 \
    month with me and now we are celebrating 18 months of training! Keep it up! During this year you won “Fat loss%” \
    2018 competition, got in a third round of “Body fat% loss” competition 2019 with Bruce (wish you “good luck!”),\
    celebrate with our team “Stronger Together” Thanksgiving, Secret Santa and Valentines! There is no limit for \
    perfection, and the secret is in consistency, discipline and knowledge. You inspired many, I wish you the best \
    luck in reaching more goals and I will be there for you!", new Date(2017, 10, 23));

    this.pavithra = new Testimonial(this.pavPics, "Pavithra", "My name is Pavithra George and I started training with \
    Alla in May 2018. I had worked out with several trainers earlier but was unable to stick to a workout program, partly \
    because I always found them intimidating. At age 40, battling hypothyroidism and bad knees, I was even more \
    apprehensive about starting a new workout regime with another trainer. Alla made me feel at ease right away. She \
    has allowed me to work at my own pace, while making sure I maintain proper form and breathing habits. I have an \
    unpredictable work schedule and Alla has always found a way to work with me, ensuring that I never miss my workouts \
    with her twice a week. She works hard everyday to create individual routines for her diverse group of clients who \
    are of all ages and fitness levels. In addition to fitness, she also takes great interest in our nutrition and often \
    holds seminars to improve our eating habits. In about six months, I have lost almost 14 inches and 11 pounds and I am \
    much stronger than what I used to be. Alla believes in all of her clients and it shows in the hard work and dedication \
    with which she approaches her training sessions with us. I highly recommend her!", new Date(2018, 12, 13));

    this.simone = new Testimonial(this.simonePics, "Simone", "There are many good fitness instructors. What sets Alla \
    apart is that she doesn’t just craft a workout program perfectly customized to your goals and physique, she cares about\
    your holistic health and fitness progress more than any trainer I’ve ever worked with. Alla believes that an educated \
    client makes the most successful client and provides guidance on every aspect of fitness, from technique to nutrition \
    to sleep and stress management. She‘s like your best friend, drill sergeant, and mother rolled into one. You can’t go \
    wrong with Alla.", new Date(2019, 1, 28));

    this.tracy = new Testimonial(this.tracyPics, "Tracy", "At first, I was hesitant to invest money in a personal \
    trainer. I believed maybe I could push myself harder to achieve what I wanted. I didn’t know what to expect \
    when I asked for a consultation with Alla. Forward to the present, I’ve worked with Alla for almost 10 months, \
    and I’ve had amazing results. My BMI, fat, weight have all reduced, my posture is better, my body looks more \
    toned. I now walk with confidence and my clothes feel better. Alla radiates positivity, patience, passion for \
    physical training and nutrition, and with the technical savvy that gave me results. From the smallest corrections \
    of proper body mechanics, and explaining objectives of an exercise, I got much better results with the same exercise \
    under her guidance, as I did before I worked out with her! There hasn’t been a day I worked out with her, that her \
    positivity wasn’t infectious. No matter what was going on that day, I left my work out smiling. She got to know me well \
    enough to customize my workouts to me. She paid attention to what level of a challenge I required, in combination with \
    my physical limitations (below average balance, and knee issues), she even customized the time of the day of our training \
    schedule to my preferences. Unfortunately, she had to move, but she earns all the credit in me forming the healthy habit \
    of exercising regularly, even without her. I’ve used multiple personal trainers in the past, and worked in a gym, and \
    she’s the very best I’ve personally used and witnessed. There is no hesitation in my recommendation of Alla as a personal \
    trainer. The only regret you will have is not having started training with her sooner.", new Date(2017, 3, 22));

    this.sara = new Testimonial(this.saraPics, "Sara", "I have had such a positive experience working with Alla these past few months.\
     I have always struggled with inconsistency in dieting and working out but since I’ve met Alla, I have been able to incorporate\
     these things into my normal lifestyle. I’ve been able to see results quickly but in a way that is healthy and productive that\
     will last long term. Since working out with Alla, I have lost fat, decreased my BMI, gained muscle and most importantly,\
     I have stayed consistent and made healthier choices. The best part of it all is that I actually look forward to our workouts,\
    which I never thought in a million years I would say. But Alla is such a joy to be around- she has a great positive energy,\
    she’s kind, focused, patient, knowledgeable and the best cheerleader. She truly goes above and beyond for her clients. Not\
    only does she come up with specific individual workout plans, she also holds nutrition seminars, organizes fun boot camps\
    and comes up with monthly competitions for us as extra motivation. From the beginning, Alla has made it clear she wanted\
    me to reach the goals I had set out for myself and her support, motivation and passion makes it easier to reach those goals.\
    She has made such a positive impact on my life in the short time I’ve known her and I’m so grateful to her for that! Highly highly recommend!", new Date(2020, 4, 19));

    this.testimonials.push(this.ama, this.bruce, this.chet, this.india, this.kiki, this.metty, this.naomi, 
      this.pavithra, this.simone, this.tracy, this.sara);
    
  }

  ngOnInit() {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px"}
    }
    this.testimonials.sort((a: any, b:any) => b.date - a.date);
  }

}
