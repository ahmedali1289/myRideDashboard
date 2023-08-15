import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss']
})
export class RideDetailComponent {
  public ride;
  constructor(private route: ActivatedRoute, private http:HttpService){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = params['id'];
      this.loadData(userId)
    });
  }
  async loadData(id:any) {
    await Promise.all([this.getRide(id)]);
  }

  async getRide(id:any) {
    try {
      const res: any = await this.http.get(`get-ride/${id}`, true).toPromise();
      this.ride = res?.data;
      console.log(res);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
