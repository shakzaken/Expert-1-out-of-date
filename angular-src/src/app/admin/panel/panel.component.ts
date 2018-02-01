import { Router,Params,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  routeName : string;
  routesArray : string[];

  constructor(private route : ActivatedRoute , 
              private router : Router) {
    this.route.params.subscribe((params : Params) => {
      this.routeName = params.name;
    });
   }

  ngOnInit() {
    
  }

  



}
