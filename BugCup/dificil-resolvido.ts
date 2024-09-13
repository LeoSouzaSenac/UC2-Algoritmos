import * as readlineSync from 'readline-sync';

// Definindo o enumerador para o estado dos livros
enum EstadoLivro {
    Disponivel = 'Disponível',
    Emprestado = 'Emprestado'
}

// Interface que define os métodos de um ItemArcano
interface ItemArcano {
    emprestar(): void; // Método para emprestar o livro
    devolver(): void;  // Método para devolver o livro
    getTitulo(): string; // Método para obter o título do livro
    getAutor(): string;  // Método para obter o autor do livro
    getEstado(): EstadoLivro; // Método para obter o estado atual do livro
}

// Classe LivroProibido que implementa a interface ItemArcano
class LivroProibido implements ItemArcano {
    private titulo: string;
    private autor: string;
    private estado: EstadoLivro;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = EstadoLivro.Disponivel; // Estado inicial é Disponível
    }

    // Método privado para atualizar o estado do livro
    private atualizarEstado(estado: EstadoLivro): void {
        this.estado = estado;
    }

    // Método público para emprestar o livro
    public emprestar(): void {
        if (this.estado === EstadoLivro.Emprestado) {
            console.log(`${this.titulo} já está emprestado e não pode ser emprestado novamente.`);
        } else {
            console.log(`${this.titulo} foi emprestado com sucesso.`);
            this.atualizarEstado(EstadoLivro.Emprestado); // Atualiza o estado para Emprestado
        }
    }

    // Método público para devolver o livro
    public devolver(): void {
        if (this.estado === EstadoLivro.Disponivel) {
            console.log(`${this.titulo} não está emprestado, então não pode ser devolvido.`);
        } else {
            console.log(`${this.titulo} foi devolvido!`);
            this.atualizarEstado(EstadoLivro.Disponivel); // Atualiza o estado para Disponível após devolução
        }
    }

    // Método para obter o título do livro
    public getTitulo(): string {
        return this.titulo;
    }

    // Método para obter o autor do livro
    public getAutor(): string {
        return this.autor;
    }

    // Método para obter o estado atual do livro
    public getEstado(): EstadoLivro {
        return this.estado;
    }
}

// Criando a lista de livros da biblioteca
const biblioteca: ItemArcano[] = [
    new LivroProibido("O Grimório das Sombras", "Mestre Arcano"),
    new LivroProibido("O Livro das Runas", "Sábio Místico"),
    new LivroProibido("O Códice dos Magos", "Ancião Esotérico"),
    new LivroProibido("O Manual das Feitiçarias", "Feiticeiro Anônimo")
];

// Função principal que exibe o menu e processa a escolha do usuário
function menuBiblioteca(): void {
    while (true) {
        console.log("\n--- Biblioteca Arcana e Proibida ---");
        console.log("Escolha uma opção:");
        console.log("1. Listar livros");
        console.log("2. Emprestar livro");
        console.log("3. Devolver livro");
        console.log("4. Sair");

        // Captura a opção escolhida pelo usuário
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
                return; // Sai do loop e encerra o programa
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Função para listar todos os livros da biblioteca
function listarLivros(): void {
    console.log("\nLivros disponíveis na biblioteca:");
    biblioteca.forEach((livro, index) => {
        console.log(`${index + 1}. Título: "${livro.getTitulo()}", Autor: ${livro.getAutor()}, Estado: ${livro.getEstado()}`);
    });
}

// Função para emprestar um livro
function emprestarLivro(): void {
    listarLivros();
    const escolha = Number(readlineSync.question("\nDigite o número do livro que deseja emprestar: "));
    const livro = biblioteca[escolha - 1];
    
    if (livro) {
        livro.emprestar(); // Empresta o livro selecionado
    } else {
        console.log("Número de livro inválido.");
    }
}

// Função para devolver um livro
function devolverLivro(): void {
    listarLivros();
    const escolha = Number(readlineSync.question("\nDigite o número do livro que deseja devolver: "));
    const livro = biblioteca[escolha - 1];
    
    if (livro) {
        livro.devolver(); // Devolve o livro selecionado
    } else {
        console.log("Número de livro inválido.");
    }
}

// Inicia o menu da biblioteca
menuBiblioteca();
