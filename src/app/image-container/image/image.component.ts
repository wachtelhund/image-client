import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() imageData: any;
  @Output() submitEvent = new EventEmitter<Object>();
  detailsActive: boolean = false;
  isActive: boolean = false;
  editActive: boolean = false;
  detailsForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(event: SubmitEvent) {
    const { description, location } = this.detailsForm.value;
    const payload = {
      description,
      location,
      id: this.imageData.id
    }
    this.submitEvent.emit({ ...this.detailsForm.value, id: this.imageData.id })
  }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      description: [this.imageData.description, Validators.required],
      location: [this.imageData.location, Validators.required]
    })
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

  onDelete() {
    this.submitEvent.emit({ id: this.imageData.id, delete: true })
  }
}
