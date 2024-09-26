# Comandos Básicos do Git Bash no Windows

Esta lista apresenta os comandos essenciais para navegar, manipular arquivos e utilizar o terminal no Windows, 
além de algumas opções úteis para cada um.

## Comandos de Navegação

### `pwd` (Print Working Directory)
Exibe o caminho completo do diretório atual onde você está.

```bash
pwd
```

### `ls` (List)
Lista os arquivos e diretórios no diretório atual. Também pode ser usado com várias opções.

#### Opções:
- `-l`: Exibe a lista detalhada dos arquivos.
- `-a`: Mostra todos os arquivos, incluindo arquivos ocultos (arquivos que normalmente não ficam visíveis).
- `-lh`: Exibe a lista detalhada com tamanhos legíveis.

```bash
ls
ls -l        # Lista detalhada
ls -a        # Lista todos os arquivos (inclusive ocultos)
ls -lh       # Lista com tamanhos legíveis
```

### `cd` (Change Directory)
Navega entre diretórios.

#### Exemplo de uso:
```bash
cd nome-do-diretorio        # Vai para o diretório especificado
cd ..                       # Volta para o diretório anterior
cd ~                        # Vai para o diretório inicial (home)
```

## Manipulação de Arquivos e Diretórios

### `touch` 
Cria um novo arquivo vazio.

```bash
touch nome-do-arquivo.txt
```

### `mkdir` (Make Directory)
Cria um novo diretório.

```bash
mkdir nome-do-diretorio
```

### `cp` (Copy)
Copia arquivos ou diretórios de um lugar para outro.

#### Opções:
- `-r`: Copia diretórios, ou seja, pastas e seus conteúdos.

```bash
cp nome-do-arquivo.txt /caminho/destino
cp -r nome-da-pasta /caminho/destino   # Copia um diretório
```

### `mv` (Move)
Move ou renomeia arquivos e diretórios.

```bash
mv nome-do-arquivo.txt /novo/caminho   # Move arquivo para o novo caminho
mv nome-do-arquivo.txt novo-nome.txt   # Renomeia o arquivo
```

### `rm` (Remove)
Remove (exclui) arquivos e/ou diretórios. Cuidado ao usar pois remove sem possibilidade de retorno do arquivo.

#### Opções:
- `-r`: Remove diretórios e todo o seu conteúdo.
- `-f`: Força a remoção, ignorando avisos.

```bash
rm nome-do-arquivo.txt        # Remove um arquivo
rm -r nome-da-pasta           # Remove uma pasta e seu conteúdo
rm -rf nome-da-pasta          # Força a remoção de uma pasta sem confirmação
```

## Comandos de Sistema

### `clear`
Limpa a tela do terminal.

```bash
clear
```

### `cat` (Concatenate)
Mostra o conteúdo de um arquivo no terminal.

```bash
cat nome-do-arquivo.txt
```

### `echo`
Imprime uma mensagem no terminal ou escreve texto em um arquivo.

```bash
echo "Olá Mundo"
echo "Texto para escrever no arquivo" > arquivo.txt   # Sobrescreve o conteúdo do arquivo
echo "Texto adicional" >> arquivo.txt                 # Adiciona ao final do arquivo
```

### `whoami`
Mostra o nome do usuário na tela.

```bash
whoami
```

### `head`
Head significa "cabeça". Imprime as 10 primeiras linhas de um arquivo. A opção -n permite indicar quantas linhas queremos ver.

```bash
head nome-do-arquivo.txt       # Imprime as 10 primeiras linhas do arquivo
head -n 5 nome-do-arquivo.txt  # Imprime o número de linhas especificadas, a partir do início
```

### `tail`
Tail significa "cauda". Imprime as 10 últimas linhas de um arquivo. A opção -n permite indicar quantas linhas queremos ver.

```bash
tail nome-do-arquivo.txt       # Imprime as 10 últimas linhas do arquivo
tail -n 12 nome-do-arquivo.txt  # Imprime o número de linhas especificadas, a partir do final
```

### `grep`
Permite buscar um determinado texto no conteúdo de um arquivo.

```bash
grep Palavra nome-do-arquivo.txt      # Busca uma palavra em um determinado arquivo
grep -A5 Palavra nome-do-arquivo.txt  # Busca uma palavra em um determinado arquivo e também imprime o número de linhas especificadas após a palavra
grep -B2 Palavra nome-do-arquivo.txt  # Busca uma palavra em um determinado arquivo e também imprime o número de linhas especificadas antes da palavra
grep -n Palavra nome-do-arquivo.txt   # Busca uma palavra em um determinado arquivo e também imprime o número da linha
grep -c Palavra nome-do-arquivo.txt   # Exibe apenas o número de ocorrências de correspondência no arquivo (quantas vezes a palavra ocorre no arquivo)
```

