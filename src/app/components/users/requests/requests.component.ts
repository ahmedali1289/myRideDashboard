import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/shared/services/http.service';
// import * as bcrypt from 'bcrypt';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
  public requestsUsers: [] = [];
  public duePage!: any;
  public total!: any;
  public selectedRequest: any;
  public searchInput!: any;
  public modalReference: any;
  public state: boolean = false;
  public id: number;
  
  public RequestForm: any = this.fb.group({
    password: [null, Validators.required],
  });
  constructor(
    private http: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}
  userForm: any = this.fb.group({
    id: [null, Validators.required],
    status: [null, Validators.required],
  });
  ngOnInit() {
    this.loadData();
  }
  async loadData() {
    await Promise.all([this.getUsers()]);
  }

  async getUsers() {
    try {
      const res: any = await this.http.get('userRequests', true).toPromise();
      console.log(res);
      this.requestsUsers = res?.data;
    } catch (error) {  
      console.error('Error fetching users:', error);
    }
  }

  async userDetail(id) {
    this.router.navigateByUrl(`/users/user/${id}`);
  }

  async stateItem(event: any, data: any) {
    const { id } = event || {};
    await this.userForm.patchValue({
      id: id,
      active_status: data.target.click ? 1 : 0,
    });
    await this.save()
  }

  async save(){
    await this.http.post('updateUser',this.userForm.value,true).subscribe((res:any)=>{
      console.log(res);
      this.getUsers();
    })
  }

  async updateUser(active_status:number){
    const data={
      user_id:this.id,
      active_status:active_status,
      password:this.RequestForm.controls['password'].value,
      request:1,
    }
    console.log(data)
    await this.http.post('adminApproveRequests', data,true).subscribe((res:any)=>{
      console.log(res);
      this.getUsers();
    })
  }


  open(content: any, state: string) {
    this.modalReference = this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      windowClass: 'checkoutModal',
    });
    this.state = state == 'edit' ? true : false;
    if (state == 'edit') {
      const { id, password} = this.selectedRequest || {};
      this.RequestForm.addControl('id', new FormControl(id));
      this.RequestForm.patchValue({
        ...this.RequestForm.value,
        password,
      });
    }
  }
  proceed() {
    this.modalReference.close();
    this.RequestForm.reset();
    this.RequestForm.removeControl('id');
    this.RequestForm.removeControl('status');
    this.state = false;
  }
}
