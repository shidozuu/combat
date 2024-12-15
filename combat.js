
class Guerrier {
    constructor(nom, pointsDeVie, attaque, precision) {
      this.nom = nom;
      this.pointsDeVie = pointsDeVie;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    attaquer(adversaire) {
      console.log(`${this.nom} tente d'attaquer ${adversaire.nom}...`);
  
    
      if (Math.random() < this.precision) {
        console.log(`L'attaque de ${this.nom} est réussie !`);
        adversaire.pointsDeVie = adversaire.pointsDeVie - this.attaque;
        console.log(`${adversaire.nom} perd ${this.attaque} points de vie.`);
      } else {
        console.log(`${this.nom} rate son attaque !`);
      }
    }
  
    estEnVie() {
      return this.pointsDeVie > 0;
    }
  }
  

  const guerrier1 = new Guerrier("Alexis", 30, 8, 0.7);
  const guerrier2 = new Guerrier("Bastien", 25, 10, 0.6);
  

  console.log("Début du combat !");
  
  while (guerrier1.estEnVie() && guerrier2.estEnVie()) {
    guerrier1.attaquer(guerrier2);
    if (!guerrier2.estEnVie()) break; 
  
    guerrier2.attaquer(guerrier1); 
  }
  
  if (guerrier1.estEnVie()) {
    console.log(`${guerrier1.nom} a gagné le combat avec ${guerrier1.pointsDeVie} points de vie restants !`);
  } else {
    console.log(`${guerrier2.nom} a gagné le combat avec ${guerrier2.pointsDeVie} points de vie restants !`);
  }
  