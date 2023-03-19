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

  updateImage(image: any) {
    const imageData = image;
    if (imageData.delete) {
      this.imageService.deleteImage(imageData.id).subscribe(data => {
        this.realData = this.realData.filter(item => item.id !== imageData.id);
      });
    } else {
      this.imageService.updateImage(image).subscribe(data => { });
    }
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.realData = data;
    });
  }
}
