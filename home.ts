export class Greeter {
  greeting: string;
  constructor(mensage: string) {
    this.greeting = mensage;
  }

  getGreeting() {
    return 'Olá, ' + this.greeting;
  }
}
