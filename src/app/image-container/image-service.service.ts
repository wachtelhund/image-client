import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const jwt: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW1wdXMxMjMxMjMxYSIsImdpdmVuX25hbWUiOiJIYW1wdXMiLCJmYW1pbHlfbmFtZSI6Ik5pbHNzb24iLCJlbWFpbCI6ImhhbXB1YTJzc2Rzc0BnbWFpbC5jb21hIiwieF9wZXJtaXNzaW9uX2xldmVsIjo4LCJ4X3VzZXJfaWQiOiI2NDE2NGJiODZlNGRkMTkzZDc2ODE0ODkiLCJpYXQiOjE2NzkxODU2MjIsImV4cCI6MTY3OTE4OTIyMn0.FlCjb0T458KQ-wj6spAm4AezaFUt0S8CTPALef9rxnAPypzvQvM3X1Q1XGnTZ4lgCDs0vnVLvgv_iqmzaoJ2xyt2qmNYSi8yi-C4hTUs-zS0fTTETmTucQUa1hPcbJmXfYPjuQDpB4K7o-UW3eJ9_QJoOFFBe6LxeFpgGZyofzlmhnYMUhaOCm2wIkFy-cFqYbpW15Su8UGx_53uCu-orrscOzYdCEKEJ-aVMj5qfFpgvIR6e9ZpmVsY5RXuu7LIddZuEdLFP3-V7YkArqNOGzM2CfaH_o-C8-JO49fvcfydVdbnLHPAgsV7og413wqE648xFWze-AvxDZ1vZc6ZYw'
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
    return this.http.delete(`${this.imageApiUrl}/${id}`, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
