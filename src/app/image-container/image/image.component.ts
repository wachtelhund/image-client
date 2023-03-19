import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() imageData: any;
  detailsActive: boolean = false;
  isActive: boolean = false;
  editActive: boolean = false;

  ngOnInit() {
    console.log(this.imageData);
  }

  onShowDetails(event: MouseEvent) {
    this.isActive = !this.isActive;
    this.detailsActive = !this.detailsActive;
    if (this.editActive) {
      this.editActive = false;
    }
  }

  onEdit(event: MouseEvent) {
    this.isActive = !this.isActive;
    this.editActive = !this.editActive;
    if (this.detailsActive) {
      this.detailsActive = false;
    }
    this.editActive && this.detailsActive ? this.detailsActive = false : this.detailsActive = this.detailsActive;
  }
}
