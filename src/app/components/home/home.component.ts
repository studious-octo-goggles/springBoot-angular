import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade',
  ];
  demoform: FormGroup;
  validMessage: string = "";
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required), 
      contact: new FormControl()
      
    });
  }
  submitRegistration(){

    if (this.demoform.valid){
      this.validMessage = "Your bike registration has been submitted. Thank you!";
      this.demoService.createDemoRegistration(this.demoform.value).subscribe(
        data => {
          this.demoform.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}