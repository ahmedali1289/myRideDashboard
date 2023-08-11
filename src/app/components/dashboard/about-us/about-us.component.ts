import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public Editor:any = ClassicEditor;
  public codes: [] = [];
  public duePage!: any;
  public total!: any;
  public searchInput!: any;
  public selectedCode: any;
  public modalReference: any;
  public state: boolean = false;
  public codeForm: any = this.fb.group({
    coupon_no: [null, Validators.required],
    discount: [null, Validators.required],
  });
  constructor(
    private http: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) {}
  userForm: any = this.fb.group({
    id: [null, Validators.required],
    status: [null, Validators.required],
  });
  ngOnInit() {
    this.loadData();
  }
  open(content: any, state: string) {
    this.modalReference = this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      windowClass: 'checkoutModal',
    });
    this.state = state == 'edit' ? true : false;
    if (state == 'edit') {
      const { id, coupon_no, discount } = this.selectedCode || {};
      this.codeForm.addControl('id', new FormControl(id));
      this.codeForm.patchValue({
        ...this.codeForm.value,
        coupon_no,
        discount,
      });
    }
  }
  proceed() {
    this.modalReference.close();
    this.codeForm.reset();
    this.codeForm.removeControl('id');
    this.codeForm.removeControl('status');
    this.state = false;
  }
  async loadData() {
    await Promise.all([this.getCodes()]);
  }

  save(modal: boolean) {
    if (!this.state) {
      this.codeForm.patchValue({
        ...this.codeForm.value,
        position: this.codes?.length + 1,
      });
    }
    this.http
      .post('create-promo', this.codeForm.value, true)

      .subscribe({
        next: () => {
          if (modal) {
            this.proceed();
          }
          this.codeForm.reset();
        },
        complete: () => {
          this.getCodes();
          this.codeForm.removeControl('id');
          this.codeForm.removeControl('status');
          this.state = false;
        },
      });
  }



  async getCodes() {
    try {
      const res: any = await this.http.get('get-promo', true).toPromise();
      console.log(res);
      this.codes = res?.codes;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

 async stateItem(event: any, data: any) {
  this.selectedCode = this.codes?.find((e: any) => e?.id == event.id);
  if (this.selectedCode) {
    const { id, title, description } = this.selectedCode || {};
    this.codeForm.patchValue({
      ...this.codeForm.value,
      title,
      description,
    });
    this.codeForm.addControl('id', new FormControl(id));
    this.codeForm.addControl(
      'status',
      new FormControl(data.target.checked ? 1 : 0)
    );
    console.log(this.codeForm.value);
      
  }
  this.save(false);
}


deleteCode(id: number) {
  this.http.post(`promo-delete/${id}`, {}, true).subscribe(
    () => {
      console.log(this.codeForm.value);
      this.getCodes();
    },
    (error) => {
      console.error('Error deleting video:', error);
    }
  );
}
}
