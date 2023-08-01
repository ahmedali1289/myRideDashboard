import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  public searchInput!: any;
  public users: [] = [];
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
  ){}
  public modalReference: any;
  public promoForm: any = this.fb.group({
    mode_id: [null, Validators.required],
    name: [null, Validators.required],
    description: [null, Validators.required],
    paid_or_free: ['free', Validators.required],
    price: [0],
  });
  open(content: any, state: string) {
    this.modalReference = this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      windowClass: 'checkoutModal',
    });
  }
  proceed() {
    this.modalReference.close();
    this.promoForm.reset();
    this.promoForm.removeControl('id');
    this.promoForm.removeControl('active_status');
  }
}
