import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bridge-form-template-driven',
  templateUrl: './bridge-form-template-driven.component.html',
  styleUrls: ['./bridge-form-template-driven.component.css']
})
export class BridgeFormTemplateDrivenComponent implements OnInit {

  id: string;
  name: string;
  lat: number;
  lng: number;
  year: number;
  length: number | null;
  width: number | null;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('submit', {value: form.value, valild: form.valid, dirty: form.dirty, touched: form.touched});
  }

}
