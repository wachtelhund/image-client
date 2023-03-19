import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ImageServiceService } from './image-service.service';
import { ImageModel } from './image-model';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent {
  active: boolean = false;
  realData: ImageModel[] = [];
  constructor(private imageService: ImageServiceService) { }
  onClick(event: MouseEvent) {
    const clickedItemId: any = (event.target as HTMLElement).parentElement?.parentElement?.id;
    console.log(clickedItemId);
    console.log(event);
    console.log(this);
    // if ((event.target as HTMLElement).getAttribute('id') === 'delete-btn') this.deleteItem(clickedItemId);
    // if ((event.target as HTMLElement).getAttribute('id') === 'edit-btn') this.editItem(clickedItemId);
    // if ((event.target as HTMLElement).getAttribute('id') === 'details-btn') this.showDetails(clickedItemId);
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.realData = data;
    });
  }

  // deleteItem(id: String) {
  //   const itemIndex = this.realData.findIndex(item => item.id === id);
  //   if (itemIndex !== -1) {
  //     this.fakeData.splice(itemIndex, 1);
  //   }
  // }
  // fakeData =
  //   [
  //     {
  //       "imageUrl": "https://image.spreadshirtmedia.com/image-server/v1/compositions/T31A1PA29PT10X0Y4D1022210092W6027H6027/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/angular-logo-developer-programmer-mug.jpg",
  //       "contentType": "image/gif",
  //       "createdAt": "2021-03-01T08:09:53.963Z",
  //       "updatedAt": "2021-03-01T08:39:59.748Z",
  //       "description": "A cat",
  //       "id": "2"
  //     },
  //     {
  //       "imageUrl": "https://image.spreadshirtmedia.com/image-server/v1/compositions/T31A1PA29PT10X0Y4D1022210092W6027H6027/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/angular-logo-developer-programmer-mug.jpg",
  //       "contentType": "image/gif",
  //       "createdAt": "2021-03-01T08:09:53.963Z",
  //       "updatedAt": "2021-03-01T08:39:59.748Z",
  //       "description": "A catasdfadsfasfasdfs",
  //       "location": "Stockholm",
  //       "id": "3"
  //     },
  //     {
  //       "imageUrl": "https://image.spreadshirtmedia.com/image-server/v1/compositions/T31A1PA29PT10X0Y4D1022210092W6027H6027/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/angular-logo-developer-programmer-mug.jpg",
  //       "contentType": "image/gif",
  //       "createdAt": "2021-03-01T08:09:53.963Z",
  //       "updatedAt": "2021-03-01T08:39:59.748Z",
  //       "id": "4"
  //     },
  //     {
  //       "imageUrl": "https://image.spreadshirtmedia.com/image-server/v1/compositions/T31A1PA29PT10X0Y4D1022210092W6027H6027/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/angular-logo-developer-programmer-mug.jpg",
  //       "contentType": "image/gif",
  //       "createdAt": "2021-03-01T08:09:53.963Z",
  //       "updatedAt": "2021-03-01T08:39:59.748Z",
  //       "id": "5"
  //     },
  //   ]

  toggle(event: any) {
    event.target.active = !event.target.active;
    console.log(event);
  }

}
