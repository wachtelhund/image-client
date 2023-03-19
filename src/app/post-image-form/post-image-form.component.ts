import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageServiceService } from '../image-container/image-service.service';

@Component({
  selector: 'app-post-image-form',
  templateUrl: './post-image-form.component.html',
  styleUrls: ['./post-image-form.component.scss']
})
export class PostImageFormComponent {
  imageUploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private imageService: ImageServiceService, private router: Router) {
    this.imageUploadForm = this.formBuilder.group({
      image: [null, Validators.required],
      contentType: ['', Validators.required],
      description: [''],
      location: ['']
    });
  }

  ngOnInit(): void { }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      // Create a file reader to read the file as a base64 encoded data URL
      const reader = new FileReader();

      // Callback function to handle the loaded base64 data
      reader.onload = () => {

        const base64Image = reader.result as string;

        const startIndex = base64Image.indexOf(',') + 1;
        const cleanBase64Image = base64Image.slice(startIndex);

        this.imageUploadForm.patchValue({
          image: cleanBase64Image
        });
      };

      // Read the file
      reader.readAsDataURL(file);

      // console.log(reader.readAsDataURL(file.image));
    }
  }

  onSubmit() {
    if (this.imageUploadForm.valid) {
      this.imageService.postImage(this.imageUploadForm.value).subscribe(data => {
      });
      this.imageUploadForm.reset();
    } else {
      console.log('Invalid form data');
    }
  }
}
