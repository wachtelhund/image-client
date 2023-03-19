import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ImageModel } from './image-model';
import { Payload } from './payload-model';

const jwt: string = localStorage.getItem('token') || '';
const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`
  })
}

@Injectable()
export class ImageServiceService {
  imageApiUrl: string = 'http://localhost:8080/api/v1/images/';
  constructor(private http: HttpClient) { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  updateImage(dataObject: any) {
    const id = dataObject.id
    const payload = {
      description: dataObject.description,
      location: dataObject.location
    }
    const url = `${this.imageApiUrl}${id}`
    return this.http.patch(url, payload, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getImages(): Observable<any> {
    return this.http.get(this.imageApiUrl, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  postImage(image: any): Observable<any> {
    // const arr = image.image.split(',');
    const payload: Payload = {
      data: image.image,
      contentType: image.contentType
    }
    if (image.description && image.description.trim() !== '') {
      payload['description'] = image.description;
    }

    if (image.location && image.location.trim() !== '') {
      payload['location'] = image.location;
    }
    console.log(image);
    console.log('payload', payload);


    // description: image.description,
    // location: image.location,
    return this.http.post(this.imageApiUrl, payload, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addImage(image: any): Observable<any> {
    return this.http.post(this.imageApiUrl, image, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  createImage(image: any): Observable<any> {
    return this.http.post(this.imageApiUrl, image, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${this.imageApiUrl}${id}`, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
