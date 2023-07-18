import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

export class EditUserResolver implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
    })
  }
  
}