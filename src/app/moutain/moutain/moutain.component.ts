import {Component, Input, OnInit} from '@angular/core';
import {Moutain} from '../models/Moutain';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MoutainDetailComponent} from '../moutain-detail/moutain-detail.component';

@Component({
  selector: 'app-moutain',
  templateUrl: './moutain.component.html',
  styleUrls: ['./moutain.component.css']
})
export class MoutainComponent implements OnInit {
  @Input() moutains: Moutain[] = [];
  currentIndex = -1;

  constructor(private moutainService: ServiceService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.showMoutains();
  }

  showMoutains(): void {
    this.moutainService.getAllMoutains().subscribe((moutains: Moutain[]) => {
      this.moutains = moutains;
    });
  }

  editObject(moutain: Moutain): void {
    this.router.navigateByUrl(`/edit/${moutain.id}`).catch(console.error);
  }

  newObject(): void {
    this.router.navigateByUrl(`/add`).catch(console.error);
  }

  deleteMoutain(id: string): void {
    this.moutainService.delete(id).subscribe(() => {
      this.showMoutains()
    });
  }

    open(currentMoutain: Moutain): void {
    const modalRef = this.modalService.open(MoutainDetailComponent,
      {ariaLabelledBy: 'modal-basic-title'})
    modalRef.componentInstance.currentMoutain = currentMoutain;
    }
}
