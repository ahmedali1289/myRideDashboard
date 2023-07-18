import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';


@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class SearchResultModule { }
