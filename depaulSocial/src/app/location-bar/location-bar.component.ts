import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent implements OnInit {
	@Input() locationName: string;
	@Input() percent: string;

  constructor() { }

  ngOnInit() {
  }

}
