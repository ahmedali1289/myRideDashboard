import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

  public helps: [] = [];
  public duePage!: any;
  public total!: any;
  public searchInput!: any;
  constructor(
    private http: HttpService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  userForm: any = this.fb.group({
    id: [null, Validators.required],
    status: [null, Validators.required],
  });
  ngOnInit() {
    this.loadData();
  }
  async loadData() {
    await Promise.all([this.getHelps()]);
  }

  async getHelps() {
    try {
      const res: any = await this.http.get('get-help', true).toPromise();
      console.log(res);
      this.helps = res?.help;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async stateItem(event: any, data: any) {
    const { id } = event || {};
    await this.userForm.patchValue({
      id: id,
      status: data.target.checked ? 1 : 0,
    });
    await this.save()
  }
  async save(){
    await this.http.post('user-update',this.userForm.value,true).subscribe((res:any)=>{
      console.log(res);
      this.getHelps();
    })
  }

}
