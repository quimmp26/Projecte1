import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosaltres',
  templateUrl: './nosaltres.component.html',
  styleUrls: ['./nosaltres.component.css']
})
export class NosaltresComponent implements OnInit {

  infoNosotros: string = 'contact';

  constructor() {}

  ngOnInit(): void {
  }


  public mostrarMapa(infoNosotros: string): void{
    this.infoNosotros = infoNosotros;
  }

}
