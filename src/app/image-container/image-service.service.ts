import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ImageModel } from './image-model';

const jwt: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW1wdXMxMjMxMjMxYSIsImdpdmVuX25hbWUiOiJIYW1wdXMiLCJmYW1pbHlfbmFtZSI6Ik5pbHNzb24iLCJlbWFpbCI6ImhhbXB1YTJzc2Rzc0BnbWFpbC5jb21hIiwieF9wZXJtaXNzaW9uX2xldmVsIjo4LCJ4X3VzZXJfaWQiOiI2NDE2NGJiODZlNGRkMTkzZDc2ODE0ODkiLCJpYXQiOjE2NzkyMzE3NTUsImV4cCI6MTY3OTIzNTM1NX0.Y9WvHNgPZRnkeHnYYVXa2wUsKhJ_UOHg4MwUyk10uweqZJx8XDrF-JEYngV4PmIHyCBSqPcOxRrXU0SGiKp1ElwtcJzgCER3eHryV99RTU2S-clk3Kq6YgfAsLFM5AkET8IcZBZmpaJZjcp2dUZ-xUW5dbHQ3bolNoE0WqPtbSrrC3uoRcpihGJlbp09NCxzgFq7YdMPEsmz0mK3UbHxaA0_XN_QONAfFkiYbL3q8Pb8hLyJu5V_YrRdWBYfbZ-19mqQ28Mpdf6OT3e5VzFyj1ELpyFhM0g5cxY9iJhJ1vDqBEenqMhrhlgL9JWSuT1nWNoRuzyNVkRKDfUpu0VDFw'
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

  getImage(id: number): Observable<any> {
    return this.http.get(`${this.imageApiUrl}/${id}`, httpOptions).pipe(
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
