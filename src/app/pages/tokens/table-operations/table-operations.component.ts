import { Component, OnInit } from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-table-operations',
  templateUrl: './table-operations.component.html',
  styleUrls: ['./table-operations.component.scss']
})
export class TableOperationsComponent implements OnInit {
  currentDataOperations: any;
  displayBoolean: boolean = false;
  
  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData('count').subscribe((data: any) => {
      this.currentDataOperations = data.tokens
    })
  }

showMoreTokens(){
  this.displayBoolean = !this.displayBoolean;
}

}
