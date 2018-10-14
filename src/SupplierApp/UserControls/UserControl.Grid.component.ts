import { Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector:'my-grid',
  templateUrl:'./UserControl.Grid.html'
})
export class GridComponent{

  gridColumns:Array<Object>=new Array<Object>();

  gridData:Array<Object>=new Array<Object>();

  @Input("grid-columns")
  set setgridColumns(_gridColumns:Array<Object>){
    this.gridColumns=_gridColumns;
  }

  @Input("grid-data")
  set setgridDataset(_gridData:Array<Object>){
    this.gridData=_gridData;
  }

  @Output("grid-selected")
  selected:EventEmitter<object>=new EventEmitter<object>();

  Select(_selected:Object){
    this.selected.emit(_selected);
  }



}