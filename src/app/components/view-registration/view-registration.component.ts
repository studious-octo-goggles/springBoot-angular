import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public demoReg;

  constructor(private demoService: DemoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDemoReg(this.route.snapshot.params.id);
   
  }
  getDemoReg(id: number) {
    this.demoService.getOneDemo(id).subscribe(
      data => {
        this.demoReg = data;
        console.log(data);
        console.log(this.demoReg);
      },
      err => console.error(err),
      () => console.log('req. data is loaded')
    );
  }
}
