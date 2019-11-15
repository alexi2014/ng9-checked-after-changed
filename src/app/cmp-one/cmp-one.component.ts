import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css'],
  inputs: ['value']
})
export class CmpOneComponent implements OnInit {

  constructor() { }

  value: number;

  ngOnInit() {
  }

}
