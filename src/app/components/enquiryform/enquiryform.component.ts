import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from "rxjs";
import   emailjs   from "@emailjs/browser";
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent implements OnInit {

  contactform !:FormGroup;
    meassage ="hello";

  constructor(private fb: FormBuilder,private router:Router){}
  ngOnInit(): void {
  
    this.contactform = this.fb.group({
      name:['',Validators.required],
      mobileNumber:['',Validators.required],
      emailId:['',Validators.required],
      timeapt:['',Validators.required],
      description:['',Validators.required],

    })
  }


  async onsubmit(value:any)
  {   

    var namefiled = this.contactform.value.name;
    var mobileNumberfield = this.contactform.value.mobileNumber;
    var emailIdfield = this.contactform.value.emailId;
    var timefield = this.contactform.value.timeapt;
    var descriptionfield = this.contactform.value.description;
    if(namefiled =="" || mobileNumberfield =="" || emailIdfield =="" || timefield =="" || descriptionfield =="")
    {
      alert('Please Fill out all the details')
    }
     else
     {
      console.log(value);
      emailjs.init('pz-wxuNdH4DvaTUF5')
     let   response =await emailjs.send("service_l5a93va","template_t0m9htc",{
      name: this.contactform.value.name,
      mobileNumber:  this.contactform.value.mobileNumber,
      emailId:  this.contactform.value.emailId,
      time: this.contactform.value.timeapt,
      description:  this.contactform.value.description,
      });
      
      this.contactform.reset();
     alert('Submitted Succefully');
     this.route();
   
  }
    
}
route()
{
  this.router.navigate(['/main']);    
}


}
