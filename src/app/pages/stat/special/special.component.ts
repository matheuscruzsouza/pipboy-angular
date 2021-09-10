import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/service/data.service";

@Component({
  selector: "app-special",
  templateUrl: "./special.component.html",
  styleUrls: ["./special.component.sass"],
})
export class SpecialComponent implements OnInit {
  SPECIAL = {
    strength: {
      image: "assets/images/HUD/Special/strength.gif",
      text:
        "Força é uma medida de sua força física bruta. Isso afeta o quanto você pode carregar e determina a eficácia de todos os ataques corpo a corpo.",
    },
    perception: {
      image: "assets/images/HUD/Special/perception2.gif",
      text:
        'A percepção é a sua consciência ambiental e "sexto sentido", e afeta a precisão da arma em VATS',
    },
    endurance: {
      image: "assets/images/HUD/Special/endurance.gif",
      text:
        "A resistência é a medida da aptidão física geral. Afeta sua saúde total e o dreno de pontos de ação da corrida",
    },
    charisma: {
      image: "assets/images/HUD/Special/charisma2.gif",
      text:
        "Carisma é sua habilidade de encantar e convencer os outros. Isso afeta seu sucesso em persuadir outras pessoas a dialogar e a estabelecer preços quando você faz uma troca.",
    },
    inteligence: {
      image: "assets/images/HUD/Special/inteligence.gif",
      text:
        "Inteligência é a medida de sua acuidade mental geral e afeta o número de pontos de experiência ganhos.",
    },
    agility: {
      image: "assets/images/HUD/Special/agility.gif",
      text:
        "Agilidade é uma medida de sua sutileza e reflexos gerais. Isso afeta o número de pontos de ação em VATS e sua capacidade de esgueirar-se.",
    },
    luck: {
      image: "assets/images/HUD/Special/luck2.gif",
      text:
        "A sorte é uma medida de sua boa sorte geral e afeta as taxas de recarga de acertos críticos.",
    },
  };

  LABELS = Object.keys(this.SPECIAL);

  selected: string;
  img: string;
  text: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.img, this.text);

    this.setSpecial("strength");
  }

  setSpecial(special: string) {
    const perfil = this.SPECIAL[special];

    this.selected = special;
    this.img = perfil.image;
    this.text = perfil.text;
  }

  getValue(key) {
    return this.dataService.player.special[key];
  }
}
