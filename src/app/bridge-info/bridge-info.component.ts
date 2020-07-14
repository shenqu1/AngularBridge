import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {DataManagerService} from '../data-manager.service';
import {Subscription} from 'rxjs';

import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrls: ['./bridge-info.component.css']
})
export class BridgeInfoComponent implements OnInit, OnDestroy {

  bridge: Bridge;
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute, private dataService: DataManagerService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>
        this.dataService.getBridge(params.id).subscribe(
          data => this.bridge = data
        )
    );
  }

  ngOnDestroy(): void {
    if(this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

}
