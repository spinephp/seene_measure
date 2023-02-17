import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      // const userId = params.userId;
      console.log(params);
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // const userId = params.userId;
      console.log(params);
    });

}

}
