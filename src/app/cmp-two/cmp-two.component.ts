import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-two',
  templateUrl: './cmp-two.component.html',
  styleUrls: ['./cmp-two.component.css'],
  inputs: ['value']
})
export class CmpTwoComponent implements OnInit {

  constructor() { }

  value: number;

  ngOnInit() {
  }

}
