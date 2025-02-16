import React, { useState, useEffect } from 'react';
import './style.css'; // Importando seu CSS atual

function App() {
  const [currentSection, setCurrentSection] = useState('wiki'); // Controla qual seção exibir
  const [balance, setBalance] = useState(null); // Estado para armazenar o saldo
  const [transactions, setTransactions] = useState([]); // Estado para armazenar transações
  const [receiver, setReceiver] = useState(''); // Estado para o receptor da transação
  const [amount, setAmount] = useState(''); // Estado para o valor da transação
  

  useEffect(() => {
    if (currentSection === 'home') {
      fetch('http://localhost:8000/user/123/balance') // Substitua pela URL real do backend
        .then(response => response.json())
        .then(data => setBalance(data.balance))
        .catch(error => console.error('Erro ao obter saldo:', error));

      fetch('http://localhost:8000/user/123/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data))
        .catch(error => console.error('Erro ao obter transações:', error));
    }
  }, [currentSection]);

  const sendTransaction = async () => {
    try {
      const response = await fetch('http://localhost:8000/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receiver, amount }),
      });
      if (response.ok) {
        alert('Transação enviada com sucesso!');
        setReceiver('');
        setAmount('');
        setCurrentSection('home'); // Atualiza seção para recarregar dados
      } else {
        console.error('Erro ao enviar transação:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div>
      <nav>
        <a href="#wiki" onClick={() => setCurrentSection('wiki')}>Wiki</a>
        <a href="#home" onClick={() => setCurrentSection('home')}>Home</a>
      </nav>

      {currentSection === 'wiki' && (
        <section className="wiki">
          <h1>Bem-vindo à Wiki</h1>
          <p>Essa é a seção da Wiki, onde você pode encontrar informações úteis.</p>
          
        </section>
      )}

      {currentSection === 'home' && (
        <section className="home">
          <h1>Painel da Criptomoeda</h1>
          <p>Seu saldo é: {balance !== null ? `${balance} tokens` : 'Carregando...'}</p>
          <h2>Enviar Transação</h2>
          <input
            type="text"
            placeholder="Receptor"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={sendTransaction}>Enviar</button>
          <h2>Histórico de Transações</h2>
          <ul>
            {transactions.map(tx => (
              <li key={tx.id}>
                {tx.amount} tokens para {tx.receiver}, em {tx.date}.
              </li>
            ))}
          </ul>
        </section>
      )}
      {currentSection === 'wiki' && (
        <section className="wiki">
        <div>
          <article>
          <h2>Construtores </h2>
            <p>    Quando se trata de tipos primitivos, um aspecto interessante do Rust comparado a C é que seus tipos numéricos são divididos na quantidade de bits de memória que ocupam e, consecutivamente, os intervalos de memória a quais podem ser endereçados. Por exemplo, i32 é um inteiro de 32 bits e, portanto, só pode ser armazenado em um endereço múltiplo de 32, enquanto u16 é um inteiro sem sinal de 16 bits. No geral, inteiros com ou sem sinal podem ser de 8, 16, 32, 64 ou 128 bits, e floats podem ser de 32 ou 64, tal funcionalidade pode ser feita com bibliotecas em C, mas em Rust tal detalhamento é padrão.   </p>

            <p>    Além disso, Rust possui 2 tipos primitivos além de C, “Strings” e “Never”. Strings são implementadas em C como “char *” por padrão, mas em Rust esse tipo é implementado diretamente, o que permite à linguagem fazer certas presunções sobre os dados desse tipo que não poderia da outra maneira. Por outro lado, o tipo Never é um tipo sem nenhum valor, que serve </p>
            
            <img src="Capturar.PNG" alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
          </article>
          <article>
            <h2>Legibilidade </h2>
            <p>Quando se trata de Legibilidade, há vários fatores que podem a afetar: </p> 

            <p>Ortogonalidade: Quando se trata de ortogonalidade, Rust sofre significativamente devido a suas medidas de segurança, o conceito de “ownership” restringe várias combinações lógicas e significativas, de operadores e operações por razões puramente de segurança, o que tem o efeito colateral de prejudicar a legibilidade, em especial por tratar diferentemente tipos como strings, de tipos como inteiros, que podem ser passados sem perder a permissão. </p>

            <p>Exemplo: Nesse caso, quando se atribui s1 a s2, s1 perde sua posse do conteúdo e, portanto, não pode ser lido novamente, logo esse programa retorna um erro. Entretanto, em C, o mesmo pode ser feito assim como se faria com um valor Inteiro e sem erro, gerando um resultado com significado. Apesar de existir formas de replicar tais funcionalidades, </p>

            <p>Rust (Dá erro na compilação): </p>

            <img src="Capturar2.PNG" alt="Descrição da imagem da seção 2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p> C (Compila Corretamente e retorna “ABCD”): </p>

            <img src="Capturar3.PNG" alt="Descrição da imagem da seção 2.1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Entretanto, mesmo no espaço da Ortogonalidade, há aspectos que o Rust se sai melhor que C. Por exemplo, apesar de em C vetores e structs ambos serem tipos de dados estruturados, apenas o segundo pode ser usado como retorno de função, o que invalida uma combinação que significativa. Em Rust, porém é possível facilmente retornar um vetor. 
        
        Exemplo: Tentando retornar uma estrutura com 3 elementos e um array de 3 elementos. Rust consegue compilar e exeutar com sucesso ambas as funções, enquanto C apenas consegue compilar a que retorna struct, dando erro ao tentar compilar a de retorno array. Há formas de contornar esse problema em C, mas isso não muda o fato de que isso evidencia uma certa falta de ortogonalidade 
        
        Rust / C: </p>

            <img src="Capturar4.PNG" alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
            
            <p>Tipos de Dados: Na questão de tipos de dados, Rust tem uma ligeira vantagem, por não só possuir o tipo “trait”, que funciona como interface de forma bem mais clara e legível que alternativas em C (Esse tipo será explorado em Capacidade de Escrita), mas também por ter explicitamente o tipo “String”, o que eleva um pouco a legibilidade comparado a C, onde o padrão é utilizar-se um ponteiro “char *”. Além disso, Rust tem um tipo quase exclusivamente utilizado para auxiliar a compreender e explicitar uma funcionalidade do código, o tipo “Never”, que marca quando uma computação não irá terminar. </p>
            
            <p>Exemplo: Esse é um caso de uso do Never, representado por um “!”, “panic!” gera uma exceção com uma mensagem de erro igual aos valores em parênteses. O retorno “!” indica que a computação dentro da função será interrompida, nesse caso pelo “Panic!”. </p>
          </article>
          <article>
            <h2>Capacidade de Escrita </h2>
            
            <p>A Capacidade de Escrita é afetada também por fatores que facilitam a Legibilidade. Por esse motivo, as restrições para garantir a segurança das operações em Rust também prejudicam a capacidade de escrita, uma vez que certos programadores podem não compreender todos as regras de propriedade e empréstimo, assim como formas específicas de manipular essas informações, o que resulta em erros sendo cometidos por tentar combinações que parecem lógicas de elementos.</p>
            
            <p>Entretanto, uma qualidade boa de Capacidade de Escrita em Rust é que ela possui maior capacidade de Abstração que C. Apesar de também ser procedural, possui mais suporte que ele a Programação Orientada a Objetos, primariamente pela implementação de traits, que funcionam como interfaces, permitindo declarar a assinatura de um método que então pode ser implementada para um dado tipo.</p>
            
            <p>Exemplo: Nesse exemplo, no Rust se utiliza Equals como interface para o método “equals”, que é então implementado para 2 Structs, “Pessoa” e “Coordenada”, cada uma com uma forma própria de determinar se objetos são iguais. Em C, é possível implementar funcionalidade parecida utilizando structs e ponteiros para funções, mas em estruturas mais complexas se torna menos intuitivo e legível, além de ser consideravelmente mais trabalhoso comparado a Rust. </p>
            
            <p>Rust: </p>
            
            <img src="Capturar5.PNG" alt="Descrição da imagem da seção 3" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
    
          </article>
          <article>
            <h2>Confiabilidade </h2>

            <p>Rust é uma linguagem criada com segurança em mente e, apesar de deliberadamente implementar funcionalidades que poderiam ser consideradas inseguras, elas são bloqueadas por trás da palavra-chave “unsafe” e, caso se use os procedimentos recomendados e esperados, Rust é incrivelmente seguro. Enquanto um usuário está apenas usando funcionalidades seguras, Rust garante que o compilador reconhecerá brechas de contratos requeridos por funções e atributos e que nunca haverá Comportamento Indefinido, ao contrário de linguagens como C. </p>

            <p>Um aspecto fundamental de Rust é o conceito de “Ownership”, no qual todo valor tem um, e apenas um, dono a que pertence e, se o dono desaparecer do escopo, o espaço alocado ao valor é automaticamente liberado. Isso é relevante comparado a C, pois C tem bem menos controle sobre os acessos e ponteiros a valores, o que pode levar a ponteiros soltos que apontam para áreas de memórias liberadas, múltiplos ponteiros tentando acessar o mesmo valor e o modificando sem consideração sobre a existência desses acessos alternativos. Rust impede isso de acontecer, o que deixa a linguagem consideravelmente mais confiável que C. </p>

            <p>Adicionalmente, C por padrão não possui suporte a tratamento de exceções, ele pode ser simulado com “setjmp” e “longjmp”, mas tal implementação é menos intuitiva e pode gerar problemas. Em comparação, Rust possui suporte a tratamento de exceções através do Enum “Result”, que é usado por funções que podem falhar, retornando um Ok, contendo o dado do tipo T requisitado caso ela tenha tido sucesso, ou um Err contendo um dado do tipo Error caso tenha falhado. </p>
            
            <p>Exemplo – Ponteiros Soltos:  </p>

            <p>C – Esse programa cria um ponteiro alocando espaço para ele, e então o libera e tenta o referenciar novamente. Essa implementação não gera erros na compilação, mas retorna resultados instáveis e indesejados, oferecendo graves perigos</p>

            <img src="Capturar6.PNG" alt="Descrição da imagem da seção 4" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Rust – Essa implementação em rust faz algo parecido, criando uma referência para uma String em s1, passando a posse da String para s2, e então tentando acessar o valor de s1. Entretanto, esse programa não compila em Rust, o que evita o risco de comportamento inconfiável.  </p>

            <img src="Capturar7.PNG" alt="Descrição da imagem da seção 4.1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – “Data Race”, acesso concorrente às mesmas posições da memória: </p>

            <p>C – Em C, quando se têm múltiplos ponteiros a um mesmo espaço na memória e o valor nesse local é modificado por um desses acessos, o valor muda para todo acesso. Esse comportamento muitas vezes pode ser desejado, para manter o estado mais atualizado do valor, mas, em muitos casos pode levar a erros causados pela presunção de que o valor para qual um ponteiro aponta só será modificado por meio dele. Programas feitos com essa expectativa, o que pode facilmente acontecer com estruturas mais complexas, facilmente apresentam comportamento inesperado ao desenvolvedor, esse código abaixo é um exemplo bem simplificado isso, no qual modificando-se o valor no endereço de ‘a’ para 2 através de ‘c’, o valor também muda para ‘b’. </p>

            <img src="Capturar8.PNG" alt="Descrição da imagem da seção 4.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Rust – Em Rust, isso não se pode ser feito, apenas uma referência a um valor com capacidade de mudá-lo pode existir e, se ela existe, também não podem existir outras referências, mesmo com apenas acesso de leitura. Isso serve para garantir consistência e coerência no acesso e mudanças de variáveis. Esse código abaixo exemplifica essa limitação, bloqueando a criação e uso de uma referência mutável. </p>

            <img src="Capturar9.PNG" alt="Descrição da imagem da seção 4.3" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – Tratamento de Exceções: Considerando um caso onde desejamos lançar uma exceção quando um número que se tenta obter a raiz é negativo. É possível fazer isso em Rust e em C com enums ou meramente checando o retorno, mas em C é simples de um programador ignorar a possibilidade do retorno indicar erro, pois não há nenhum requisito de que tal erro seja abordado. Por outro lado, Rust possui por padrão enum “Result”, que foi feito para ser utilizado como mecanismo de tratamento de erros e é marcado com a necessidade de ser utilizado, ou seja, se o valor de retorno de uma função é um Result e ele não é usado em uma expressão ou atribuído em uma variável, o compilador emite um aviso. </p>

            <p>Exemplo em Rust funcionando corretamente: </p>

            <img src="Capturar10.PNG" alt="Descrição da imagem da seção 4.4" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo em Rust com o aviso por valor não utilizado: </p>

            <img src="Capturar11.PNG" alt="Descrição da imagem da seção 4.5" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
          </article>
          
          <article>
            <h2>Custos</h2>
            <p>Custo de Treinamento: C no geral será bem menos custoso nesse aspecto pelo simples fato de que sua adoção quase universal garante que inúmeras fontes existem que podem ser usadas para o aprendizado, assim como que já existem inúmeros profissionais qualificados para programar na linguagem, comparado a Rust. Outro fator que influencia nisso é a ortogonalidade, que, como já analisado, é ligeiramente maior em C, o que contribui para sua facilidade de aprender, pois o sistema de posse e empréstimo de Rust, apesar de ser bem útil, ainda são restrições que podem não são muito intuitivas. </p>

            <p>Custo de Escrever Programas: O maior benefício de Rust contra C nesse quesito é o fato de, tendo-se um programador já acostumado com as tecnicalidades da linguagem, Rust permite detectar muitos potenciais erros antes que C, na compilação ao invés de na execução, o que leva a bastante tempo sendo salvo que seria gasto vasculhando o código pela fonte de erros banais causados por uso equivocado de memória. Dessa maneira, aplicações que precisam manipular bastante ponteiros e espaços na memória se beneficiariam bastante do Rust, mas em situações onde isso não é o caso é possível que o custo das restrições na ortogonalidade pelas medidas protetivas elevem esse custo acima do de C. </p>

            <p>Custo de Execução: A maior rapidez em execução de C comparado a Rust pode resultar em custos ligeiramente menores de execução dos programas no primeiro.</p>

            <p>Custo de Compilação: Rust costuma ser significativamente mais lento para compilar que C, primariamente por possuir mais abstrações que são mais difíceis de serem compreendidas pelo compilador. Ademais, sua checagem extensiva que garante sua famosa segurança tem de ser que ser garantida pelo compilador, o que requer uma análise detalhada e complexa que inevitavelmente trás custos significativos. Entretanto, vale notar que Rust já é uma linguagem bem otimizada comparada a outras como Python, então tal diferença não costuma ser grande e, dependendo da implementação exata, Rust pode ser equivalente ou até mais rápido que C. </p>

            <p>Custo do Sistema de Implementação:</p>

            <p>Custo de Má – Confiabilidade: Quando se trata de custos, Rust se eleva sobre C primariamente no Custo da má confiabilidade em sistemas críticos, uma vez que sua confiabilidade mais alta diminui a chance e impacto de ocorrerem problemas na confiabilidade de sistemas. </p>

            <p>Custo de Manutenção dos Programas: Como esse fator é influenciado pela legibilidade, </p>
          </article>
          <article>
            <h2>Portabilidade</h2>
            <p>Em prática, devido à idade e predominância do C comparado a Rust, o primeiro tem bem mais plataformas que o suportam e inúmeros compiladores para a linguagem para inúmeras plataformas, enquanto Rust depende da portabilidade do LLVM, que é menos universal. Entretanto, quando se trata da linguagem em si, Rust ainda é bem portátil e, quando uma plataforma é suportada por Rust, pode exceder a Portabilidade de C em desenvolver para múltiplas plataformas, o “rustc”, seu compilador é cross-compiler e pode especificar diretamente que arquitetura compilar para com “--target”. Além disso, o gerenciador de pacote “Cargo” do Rust facilita a organização e declaração de dependências, o que ajuda a evitar uso inadequado de dependências em diferentes versões, o que muitas vezes contribui para problemas de Portabilidade. </p>
          </article>
          <article>
            <h2>Generabilidade</h2>
            <p>Rust possui um foco em alta performance e segurança, o que em muitos casos pode ser extremamente útil, mas também impõe certas limitações. Apesar de se poder utilizar comportamentos inseguros com a palavra chave “unsafe”, o fato de que tal uso é desencorajado pela linguagem e que C é de nível um pouco mais baixo que Rust, faz o primeiro ser um pouco mais geral que o segundo. Em prática, isso também é exacerbado pelos recursos externos mais abundantes em C que facilita sua aplicação em casos mais diversos. </p>
          </article>
          <article>
            <h2>Qualidade de Definição </h2>

            <p>O Rust não possui um documento oficinal que define a Gramática Formal da linguagem, mas possui algumas descrições informais, mas oficiais, dos elementos da gramática, apesar de ele estar incompleto pela sua própria admissão. Esse documento pode ser acessado pelo link: </p>
            
            <a href = "https://doc.rust-lang.org/reference/">https://doc.rust-lang.org/reference/</a>  

            <p>C define sua Gramática Formal, que é visível na definição da linguagem presente em: </p>

            <a href="https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf">https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf </a>
          </article>
        </div>
        </section>
        )}
      <footer>
        <p>© 2025 Seu Projeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
