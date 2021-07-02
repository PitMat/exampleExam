import {Component, OnInit} from '@angular/core';
import {Moutain} from '../models/Moutain';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import {MoutainComponent} from '../moutain/moutain.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id = '';
  moutain!: Moutain;
  submitted = false;
  message = '';
  form: FormGroup;
  regexURL = /(pl.wikipedia.org|en.wikipedia.org)/gm;
  regexDD = /^[-+]?([1-8]?\d(.\d+)?|90(.0+)?),\s*[-+]?(180(.0+)?|((1[0-7]\d)|([1-9]?\d))(.\d+)?)$/;

  constructor(private moutainService: ServiceService, private moutainComponent: MoutainComponent,
              private aRoute: ActivatedRoute, private router: Router) {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required, Validators.pattern(this.regexDD)]),
        description: new FormControl('', [Validators.required]),
        url: new FormControl('', [Validators.required, Validators.pattern(this.regexURL)])
      }
    );
    this.aRoute.params.subscribe(params => this.id = params.id);
  }

  errorMessage(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].touched && this.form.controls[controlName]?.errors?.[errorName];
  }
  ngOnInit(): void {
    if (this.id) {
      this.moutainService.getMoutain(this.id).subscribe((data: Moutain) => {
        this.moutain = {
          id: this.id,
          name: data.name,
          location: data.location,
          description: data.description,
          url: data.url,
        };
        this.form.patchValue(this.moutain);
      });
    }
    return this.form.value;
  }

  upDate(): void{
    if (this.moutain) {
      this.moutainService.updateMoutain(this.form.value, this.moutain.id).subscribe(() => {
        this.message = 'Edit Moutain';
        this.router.navigateByUrl('/').catch(console.error);
        this.submitted = true;
        this.moutainComponent.showMoutains();
      });
      return;
    }
    this.message = 'Add new Moutain';
    const newValue = this.form.value;
    newValue.id = '_' + Math.random().toString(36).substr(2, 9);
    this.moutainService.addNewMoutain(newValue).subscribe(() => {
      this.submitted = true;
      this.moutainComponent.showMoutains()
    });
  }
}
