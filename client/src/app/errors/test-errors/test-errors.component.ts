import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    const url = `${this.baseUrl}buggy/not-found`;

    this.http.get(url).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400Error() {
    const url = `${this.baseUrl}buggy/bad-request`;

    this.http.get(url).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get500Error() {
    const url = `${this.baseUrl}buggy/server-error`;

    this.http.get(url).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get401Error() {
    const url = `${this.baseUrl}buggy/auth`;

    this.http.get(url).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400ValidationError() {
    const url = `${this.baseUrl}account/register`;
    const body = {};

    this.http.post(url, body).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }
}
