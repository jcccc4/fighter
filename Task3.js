function Fighter(name, strength, agility, vitality) {
    this.name = name;
    this.strength = strength > 30 ? 30 : strength;
    this.agility = agility > 30 ? 30 : agility;
    this.vitality = vitality > 30 ? 30 : vitality;
    this.damage = 10 + 5 * strength - 3 * agility;
    this.defense = 10 + 5 * agility + 3 * strength + vitality;
    this.hp = 50 + 10 * vitality + 5 * strength + 3 * agility;

    return {
      getName: () => name,
      getHp: () => this.hp,
      takeDamage: (dealt) => (this.hp -= dealt),
      dealDamage: () => this.damage,
    };
  }

  function battle(fighter1, fighter2) {
    console.log(`${myFighter1.getName()} vs ${myFighter2.getName()}`);
    console.log(
      `${myFighter1.getName()}'s Total Health: ${myFighter1.getHp()}`
    );
    console.log(
      `${myFighter2.getName()}'s Total Health: ${myFighter2.getHp()}`
    );

    while (fighter1.getHp() > 0 && fighter2.getHp() > 0) {
      console.log(`${myFighter1.getName()}'s attack turn`);
      myFighter2.takeDamage(myFighter1.dealDamage());

      console.log(
        `${myFighter2.getName()} takes ${myFighter1.dealDamage()} damage `
      );
      console.log(`${myFighter2.getName()}'s Health: ${myFighter2.getHp()}`);

      console.log(`${myFighter2.getName()}'s attack turn`);
      myFighter1.takeDamage(myFighter2.dealDamage());
      console.log(
        `${myFighter1.getName()} takes ${myFighter2.dealDamage()} damage`
      );
      console.log(`${myFighter1.getName()}'s Health: ${myFighter1.getHp()}`);
    }
    if (fighter1.getHp() <= 0) {
      console.log(`${fighter2.getName()} won the fight`);
      return `${fighter2.getName()} won the fight`;
    } else if (fighter2.getHp() <= 0) {
      console.log(`${fighter1.getName()} won the fight`);
      return `${fighter1.getName()} won the fight`;
    }
  }

  const myFighter1 = new Fighter("Maximus", 20, 20, 15);
  const myFighter2 = new Fighter("Comodus", 25, 25, 20);

  console.log(
    myFighter1.getHp(),
    myFighter2.getHp(),
    battle(myFighter1, myFighter2)
  );


