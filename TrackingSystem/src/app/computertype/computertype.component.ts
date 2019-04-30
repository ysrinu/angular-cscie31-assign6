import {Component, OnInit} from '@angular/core';
import {ComputertypeService} from '../computertype.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-computertype',
  templateUrl: './computertype.component.html',
  styleUrls: ['./computertype.component.css'],
  providers: [ComputertypeService]
})
export class ComputertypeComponent implements OnInit {

  kind: string;
  singleId: number;

  // Because it was added as a provider to this class in the decorator,
  // Angular will initialize and pass a ComputerTypeService object into the constructor.
  // We have assigned it the local property name 'computertypeService'
  constructor(private computertypeService: ComputertypeService, router: Router, route: ActivatedRoute) {
    this.kind = route.snapshot.data['kind'];
    this.singleId = route.snapshot.params['id'];
    console.log(route.snapshot.data['kind']);
    console.log(route.snapshot.params['id']);
  }

  computertypeList = null;
  computertype = null;
  showList = null;
  showSingle = null;

  ngOnInit() {

    // If route is to display computer type list, then call Service for list
    // Otherwise call Service by id
    if (this.kind == 'list') {
      this.showList = true
      this.computertypeList = this.computertypeService.listComputerTypes();
      console.log('computertypeList:');
      console.log(this.computertypeList);
    } else {
      this.showSingle = true;
      this.computertype = this.computertypeService.getComputertype(this.singleId);
    }
  }

}
