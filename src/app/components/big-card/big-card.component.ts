import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://colbybryant.com/wp-content/uploads/2018/03/iron_man_featured_image.jpg?w=1200"
  @Input()
  cardTitle:string= "NOVO HOMEM DE FERRO"
  @Input()
  cardDescription:string ="Marvel studios anuncia novo filme do homem de ferro"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
