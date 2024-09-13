//Descubra o erro no sistema e corrija

import * as readlineSync from 'readline-sync';

enum EstadoLivro {
    Disponivel = 'Disponível',
    Emprestado = 'Emprestado'
}

interface ItemArcano {
    emprestar(): void;
    devolver(): void;
    getTitulo(): string;
    getAutor(): string;
    getEstado(): EstadoLivro;
}

class LivroProibido implements ItemArcano {
    private titulo: string;
    private autor: string;
    private estado: EstadoLivro;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = EstadoLivro.Disponivel; 
    }

    private atualizarEstado(estado: EstadoLivro): void {
        this.estado = estado;
    }

    public emprestar(): void {
        if (this.estado === EstadoLivro.Emprestado) {
            console.log(`${this.titulo} já está emprestado e não pode ser emprestado novamente.`);
        } else {
            console.log(`${this.titulo} foi emprestado com sucesso.`);
            
        }
    }

    
    public devolver(): void {
        if (this.estado === EstadoLivro.Disponivel) {
            console.log(`${this.titulo} não está emprestado, então não pode ser devolvido.`);
        } else {
            console.log(`${this.titulo} foi devolvido!`);
            
        }
    }

    
    public getTitulo(): string {
        return this.titulo;
    }

    
    public getAutor(): string {
        return this.autor;
    }

    
    public getEstado(): EstadoLivro {
        return this.estado;
    }
}


// Criando o "banco de dados" da biblioteca
const biblioteca: ItemArcano[] = [
    new LivroProibido("O Grimório das Sombras", "Mestre Arcano"),
    new LivroProibido("O Livro das Runas", "Sábio Místico"),
    new LivroProibido("O Códice dos Magos", "Ancião Esotérico"),
    new LivroProibido("O Manual das Feitiçarias", "Feiticeiro Anônimo")
];

// Função para exibir o menu e processar a escolha do usuário
function menuBiblioteca(): void {
    while (true) {
        console.log("\n--- Biblioteca Arcana e Proibida ---");
        console.log("Escolha uma opção:");
        console.log("1. Listar livros");
        console.log("2. Emprestar livro");
        console.log("3. Devolver livro");
        console.log("4. Sair");

        const escolha = readlineSync.question("Digite o número da opção desejada: ");

        switch (escolha) {
            case '1':
                listarLivros();
                break;
            case '2':
                emprestarLivro();
                break;
            case '3':
                devolverLivro();
                break;
            case '4':
                console.log("Saindo do sistema...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

function listarLivros(): void {
    console.log("\nLivros disponíveis na biblioteca:");
    biblioteca.forEach((livro, index) => {
        console.log(`${index + 1}. Título: "${livro.getTitulo()}", Autor: ${livro.getAutor()}, Estado: ${livro.getEstado()}`);
    });
}

function emprestarLivro(): void {
    listarLivros();
    const escolha = Number(readlineSync.question("\nDigite o número do livro que deseja emprestar: "));
    const livro = biblioteca[escolha - 1];
    
    if (livro) {
        livro.emprestar();
    } else {
        console.log("Número de livro inválido.");
    }
}

function devolverLivro(): void {
    listarLivros();
    const escolha = Number(readlineSync.question("\nDigite o número do livro que deseja devolver: "));
    const livro = biblioteca[escolha - 1];
    
    if (livro) {
        livro.devolver();
    } else {
        console.log("Número de livro inválido.");
    }
}

menuBiblioteca();
