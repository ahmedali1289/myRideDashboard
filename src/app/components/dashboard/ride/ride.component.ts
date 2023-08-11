import { Component } from "@angular/core";

@Component({
  selector: "app-ride",
  templateUrl: "./ride.component.html",
  styleUrls: ["./ride.component.scss"],
})
export class RideComponent {
  public searchInput!: any;
  public users: [] = [];
}
