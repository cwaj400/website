import {Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  downloadPDF() {
    window.open('./cv.pdf', '_blank', 'fullscreen=yes');
    return false;
  }

}
