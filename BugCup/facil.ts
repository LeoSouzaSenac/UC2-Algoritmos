// Descubra como implementar corretamente a classe Lobisomem

interface Criatura {
    aparecer(): void;
    atacar(): void;
}

class Monstro implements Criatura {
    aparecer(): void {
        console.log("Monstro apareceu.");
    }

    atacar(): void {
        console.log("Monstro atacando.");
    }
}

class Lobisomem extends Monstro {
    atacar(arma: string): void {
        console.log("Lobisomem atacando com arma: " + arma);
    }
}

function gerenciarCriatura(criatura: Criatura): void {
    criatura.aparecer();
    criatura.atacar();
}

const monstro = new Monstro();
const lobisomem = new Lobisomem();

gerenciarCriatura(monstro);       
gerenciarCriatura(lobisomem); 
