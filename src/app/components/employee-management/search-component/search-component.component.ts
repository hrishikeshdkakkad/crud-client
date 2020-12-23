import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent implements OnInit {
  constructor() {}

  public image: string = '';
  public showImage: boolean = false;
  public showSearch: boolean = true;
  public toggleButton: boolean = false;
  public found: boolean = false;
  public error: any =
    'Image does not exist for the given user! Please upload through the dashboard';

  ngOnInit(): void {}

  onSubmit(image: any) {
    if (this.found) {
      this.found = false;
    }
    this.showImage = true;
    this.showSearch = false;
    this.toggleButton = true;
    this.image = `http://localhost:3000/api/v1/employee-management/employee/${image.value.photo}/photo`;
  }

  toggleButtonNav() {
    this.showImage = false;
    this.showSearch = true;
    this.toggleButton = false;
  }

  imageError() {
    this.found = true;
    this.showImage = false;
    this.showSearch = true;
  }
}
