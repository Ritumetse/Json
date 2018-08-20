import { DetailsPage } from './../details/details';
import { CoursesServiceProvider } from './../../providers/courses-service/courses-service';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  courses:any;
  arrcourses=[];
  arrlesson:any;

  constructor(public navCtrl: NavController,private CourseProvider:CoursesServiceProvider ) {
    
   CourseProvider.getCourses().subscribe(res=>{
     console.log("response:",res)
     this.courses = res;
     this.arrcourses=this.courses.courses;
      console.log("response",this.courses);

   })
  

  }
  Submit(courses:any){
    this.navCtrl.push(DetailsPage,{data:courses});

  }

}
