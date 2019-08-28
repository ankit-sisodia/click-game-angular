import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {

  @Input() highlight;
  @Output('clicked') clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    if ( this.highlight ) {
      this.clicked.emit({add: true});
    } else {
      this.clicked.emit({add: false});
    }
  }

}
