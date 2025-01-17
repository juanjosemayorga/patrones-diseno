/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburguer {
  prepare(): void;
}

class ChickenHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Preparing a chicken hamburguer");
  }
}

class BeefHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Preparing a beef hamburguer");
  }
}

class BeanHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Preparing a bean hamburguer");
  }
}

abstract class Restaurant {
  abstract createHamburguer(): Hamburguer;

  orderHamburguer(): void {
    const hamburguer = this.createHamburguer();
    hamburguer.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeefHamburguer();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeanHamburguer();
  }
}

function main() {
  // const chickenRestaurant = new ChickenRestaurant();
  // chickenRestaurant.orderHamburguer();

  // const beefRestaurant = new BeefRestaurant();
  // beefRestaurant.orderHamburguer();

  let restaurant: Restaurant;
  const burguerType = prompt("What type of hamburguer do you want?");

  switch (burguerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "bean":
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error("Invalid hamburguer type");
  }

  restaurant.orderHamburguer();
}

main();
