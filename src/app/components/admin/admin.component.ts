import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public demos;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getDemo();
  }

  getDemo() {
    this.demoService.getDemo().subscribe(
      data => { this.demos = data },
      err => console.error(err),
      () => console.log('demos loaded')
    );
  }
}
