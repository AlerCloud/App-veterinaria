import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() public titulo:string = ""
  constructor(private menu: MenuController) { }

  ngOnInit() {}

  public abrirMenu(){
    this.menu.open("first")
  }
}
