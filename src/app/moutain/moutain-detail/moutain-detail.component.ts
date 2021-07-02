import {Component, Input, OnInit} from '@angular/core';
import {Moutain} from '../models/Moutain';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moutain-detail',
  templateUrl: './moutain-detail.component.html',
  styleUrls: ['./moutain-detail.component.css']
})
export class MoutainDetailComponent implements OnInit {
@Input() modal: any;
@Input() currentMoutain!: Moutain;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
