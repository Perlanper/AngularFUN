import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-org-per',
  templateUrl: './per.component.html',
  styleUrls: ['./per.component.scss']
})
export class PerComponent implements OnInit {
  clickedCV = false;
  clickedPL = false;
  constructor() { }
  ngOnInit(): void {
  }
  HandleClickCV(){
    this.clickedCV = !this.clickedCV;

  }
  HandleClickPL(){
    this.clickedPL = !this.clickedPL;

  }
}
