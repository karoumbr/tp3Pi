import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {

  style: string = "italic";
  titre: string = "1. Opérations sur un tableau";
  titre2: string = "2. Affichage des boutons des éléments pairs du tableau";

  tab = [15, 46, 0, 89, 80];
  onPosition(ind: number, cpt: number) {
    console.log(this.tab[ind] + " a la position " + (ind + 1) + "/" + cpt);
    console.log(this.tab[ind]);
  }
  colorier(nb: number) {
    if (nb % 3 == 0) {
      return "magenta";
    }
    else {
      return "blue";
    }
  }
}
