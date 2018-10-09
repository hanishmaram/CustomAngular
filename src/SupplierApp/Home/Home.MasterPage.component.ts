import { Logger } from './../Utility/Utility.Logger';
import { Component } from "@angular/core";


@Component({
  selector:'app-master',
  templateUrl:'./Home.MasterPage.html'
})
export class HomeMasterPageComponent{
  constructor(_logger:Logger){
    _logger.Log();
  }
}