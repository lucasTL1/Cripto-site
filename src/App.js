import React, { useState, useEffect } from 'react';
import './style.css';
import capturarImg from './assets/Capturar.PNG';
import capturarImg2 from './assets/Capturar2.PNG';
import capturarImg3 from './assets/Capturar3.PNG';
import capturarImg4 from './assets/Capturar4.PNG';
import capturarImg5 from './assets/Capturar5.PNG';
import capturarImg6 from './assets/Capturar6.PNG';
import capturarImg7 from './assets/Capturar7.PNG';
import capturarImg8 from './assets/Capturar8.PNG';
import capturarImg9 from './assets/Capturar9.PNG';
import capturarImg10 from './assets/Capturar10.PNG';
import capturarImg11 from './assets/Capturar11.PNG';
import capturarImg12 from './assets/Capturar12.PNG';
import capturarImg13 from './assets/Capturar13.PNG';
import capturarImg14 from './assets/Capturar14.PNG';
import capturarImg15 from './assets/Capturar15.PNG';
import capturarImg16 from './assets/Capturar16.PNG';
import capturarImg17 from './assets/Capturar17.PNG';
import capturarImg18 from './assets/Capturar18.PNG';
import capturarImg19 from './assets/Capturar19.PNG';
import capturarImg20 from './assets/Capturar20.PNG';
import diagrama from './assets/diagrama.PNG';

const images = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
const imageList = images.keys().map(image => images(image));

const Navigation = ({ setCurrentSection }) => (
  <nav>
    <a href="#wiki" onClick={() => setCurrentSection('wiki')}>Wiki</a>
    <a href="#home" onClick={() => setCurrentSection('home')}>Home</a>
  </nav>
);

const WikiSection = () => (
  <section className="wiki">
    <h1>Wiki - Blockchain em Rust </h1>
    <p>Essa é a seção da Wiki, onde você pode encontrar informações úteis a respeito do nosso projeto da disciplina Linguagens de Programação da Universidade de Brasília, semestre 2024/2.</p>
    <p style={{color: "#1ffff0"}}><b>Nicolas Meloni</b> - 222001369<br />
    <b>Lucas Teles Leiro</b> - 211066131<br />
    <b>Mateus Elias de Macedo</b> - 222011561</p>

    <article>
      <h2>Sobre o nosso projeto...</h2>
      <p>
        Para o projeto dessa disciplina, decidimos criar um protótipo de blockchain, em que transações são feitas e armazenadas em blocos, que, ao serem minerados, são validados e adicionados à blockchain. A blockchain criada nesse projeto foi simples, enfocando apenas os aspectos essenciais da estrutura, deixando de lado questões como smartcontracts e afins, que dão vida a verdadeiros ativos digitais.
      </p>
      <h2>Por que Rust + Blockchain?</h2>
      <p>
        Rust, como será visto mais a frente, é uma linguagem com bastante foco em segurança e desempenho, critérios essenciais em sistemas com qualquer relevância financeira, ou em qualquer sistema em que o registro correto dos eventos seja uma das principais características.
      </p>
      <p>
        Como maior prova disso, temos redes como Polkadot, Casper Network, Hyperledger e, principalmente, Solana, que possui maior parte dos seus sistemas e programas feitos em Rust. Solana se tornou um dos ecossistemas mais promissores para aplicações descentralizadas (dApps), incluindo finanças descentralizadas (DeFi), marketplaces de NFTs, jogos blockchain e projetos de infraestrutura Web3. Um dos fenômenos recentes dentro da rede Solana é a ascensão da moeda TRUMP, um memecoin inspirado no presidente dos Estados Unidos, Donald Trump. Solana se destaca como um ambiente propício para negociações rápidas e liquidez em ativos altamente voláteis e, por isso, tem se tornado a pricipal blockchain para negociação de memecoins nos últimos anos.
      </p>
      <h2>Estrutura da nossa Blockchain</h2>
      <p>
        Priorizamos uma blockchain simples, mas que aborde a maioria das funcionalidades básicas. Temos uma blockchain principal que irá receber blocos, os quais precisam ser validados antes que possam entrar na cadeia. Essas validações garantem que o bloco não é adulterado e que seguem a cadeia de hashes dos blocos anteriores. Em uma blockchain robusta, essa validação também incluiria que cada nó da rede reconhecesse o bloco como legítimo antes de ser integrado, e uma série de outras verificações.
      </p>
      <p>
        Cada bloco nosso é composto por pelo menos 3 transações. Nenhuma será verificada até que o bloco tente ser integrado à blockchain, sendo esse o momento em que problemas serão encontrados, podendo fazer com que um bloco seja aceito ou rejeitado.
      </p>
      <p>
        Adicionamos também o conceito de minerador, em que o usuário responsável por conseguir encontrar uma nonce que satisfaça a dificuldade (normalmente isso requer muito poder computacional) e valide o bloco, receba uma recompensa. Essa recompensa entraria no bloco minerado como a primeira transação, a qual é chamada de coinbase. No nosso projeto, no entanto, decidimos que a primeira transação é aquela em que "dinheiro" pode ser dado a qualquer usuário desde que o remetente seja null, para que possamos criar saldos e gastá-los na demonstração. Com isso, a recompensa do minerador entraria diretamente no ledger (registro de saldos da blockchain), sem fazer parte do bloco como coinbase.
      </p>
      <p>
        Vale ressaltar que ainda não podemos chamar esse "dinheiro" do nosso sistema de criptomoeda, pois isso envolveria a criação de smartcontracts, um tema mais específico dentro da área blockchain do qual não tratamos nesse projeto.
      </p>

      <div style={{ textAlign: 'center' }}>
      <img 
        src={diagrama} 
        alt="Diagrama simplificado da nossa blockchain" 
        style={{ maxWidth: '500px', height: 'auto', borderRadius: '10px' }} 
      />
      </div>


    </article>

    {/* Exibindo todas as imagens carregadas */}
    <div className="image-gallery">
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagem ${index}`}
          style={{ maxWidth: '100%', borderRadius: '10px' }}
        />
      ))}
    </div>
  </section>
);



const HomeSection = ({
  balance,
  setBalance,
  transactions,
  setTransactions,
  sender,
  setSender,
  receiver,
  setReceiver,
  amount,
  setAmount,
  miner,
  setMiner,
  transferCrypto,
  mineCrypto,
  apagarTransacao,
  apagarBloco,
  ledger,
  blockState,
  blockchainState
}) => (
  <section className="home">
    <h1>BLOCKCHAIN SIMULATOR</h1>
    <div className="home-container">

      <div className="input-column">
        <h2>Transferir</h2>
        <input
          type="text"
          placeholder="Remetente"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destinatário"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantia"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        
        <button onClick={transferCrypto} disabled={!receiver || amount <= 0}>TRANSFERIR</button>
        <h2>Minerar Bloco</h2>
        <input
          type="text"
          placeholder="Minerador"
          value={miner}
          onChange={(e) => setMiner(e.target.value)}
        />
        <button onClick={mineCrypto}>MINERAR</button>

      </div>

      <div className="ledger-column">
          
        <h2>Ledger</h2>
        <div className="code-box">
          <pre>{JSON.stringify(ledger, null, 2)}</pre>
        </div>

        <button onClick={apagarTransacao}>APAGAR TRANSAÇÃO</button>

        <button onClick={apagarBloco}>APAGAR BLOCO</button>
      </div>
    </div>
    
    
   
    <h2>Bloco Atual</h2>
    <div className="code-box">
      <pre>{JSON.stringify(blockState, null, 2)}</pre>
    </div>
      
  

    <h2>Blockchain</h2>
    <div className="code-box">
      <pre>{JSON.stringify(blockchainState, null, 2)}</pre>
    </div>


  </section>
);

function App() {
  const [currentSection, setCurrentSection] = useState('wiki');
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [miner, setMiner] = useState('');
  const [ledger, setLedger] = useState(null);
  const [blockState, setBlockState] = useState(null);
  const [blockchainState, setBlockchainState] = useState(null);

  useEffect(() => {
    if (currentSection === 'home') {
      fetchData();
    }
  }, [currentSection]);
///////////FETCH PARA ATUALIZAR DADOS NAS CAIXAS DE TEXTO LEDGER, BSTATE E BCSTATE////////////////////
  const fetchData = async () => {
    try {
      const [ledgerRes, blockStateRes, blockchainStateRes] = await Promise.all([
        fetch('http://blockchain-backend-production.up.railway.app/ledger'),
        fetch('http://blockchain-backend-production.up.railway.app/block'),
        fetch('http://blockchain-backend-production.up.railway.app/blockchain')
      ]);
  
      const [ledger, blockState, blockchainState] = await Promise.all([
        ledgerRes.json(),
        blockStateRes.json(),
        blockchainStateRes.json()
      ]);
  
      setLedger(ledger);
      setBlockState(blockState);
      setBlockchainState(blockchainState);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
    }
  };
//////////////////////////////////////  

  const transferCrypto = async () => {
    try {
      const senderValue = sender.trim() === "" ? null : sender;
      const response = await fetch('http://blockchain-backend-production.up.railway.app/transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          from: senderValue, 
          to: receiver, 
          amount: Number(amount) 
        }),
      });
      if (response.ok) {
        setSender('');
        setReceiver('');
        setAmount('');
        setCurrentSection('home'); // Atualiza dados
      } else {
        alert('Erro ao enviar transação.');
        console.error('Erro ao enviar transação:', response.statusText);
      }
    } catch (error) {
      alert('Erro ao enviar transação.');
      console.error('Erro na requisição:', error);
    }

    fetchData();

  };

  const apagarTransacao = async (transactionId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/delete_transaction`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        alert('Erro ao apagar transação.');
        throw new Error(`Erro ao apagar transação: ${response.statusText}`);
      }
  
      console.log('Transação apagada com sucesso');
      fetchData();
    } catch (error) {
      alert('Erro ao apagar transação.');
      console.error('Erro ao apagar transação:', error);
    }
  };

  const apagarBloco = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/clear_block', {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        alert('Erro ao apagar bloco.');
        throw new Error(`Erro ao apagar bloco: ${response.statusText}`);
      }
      
      console.log('Bloco apagado com sucesso');
      fetchData();
    } catch (error) {
      alert('Erro ao apagar bloco:', error);
      console.error('Erro ao apagar bloco:', error);
    }
  };
  

  const mineCrypto = async () => {
    try {
      const response = await fetch('http://blockchain-backend-production.up.railway.app/mine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(miner)
      });
      if (response.ok) {
        alert('Criptomoeda minerada com sucesso!');
        setMiner('');
        setCurrentSection('home'); // Atualiza dados
        fetchData();
      } else {
        alert('Erro ao minerar criptomoeda.');
        console.error('Erro ao minerar:', response.statusText);
      }
    } catch (error) {
      alert('Erro ao minerar criptomoeda:', error);
      console.error('Erro na requisição:', error);
    }

    

  };

  return (  
    <div>
      <Navigation setCurrentSection={setCurrentSection} />
      {currentSection === 'wiki' && <WikiSection />}
      {currentSection === 'home' && (
        <HomeSection
          balance={balance}
          setBalance={setBalance}
          transactions={transactions}
          setTransactions={setTransactions}
          sender={sender}
          setSender={setSender}
          receiver={receiver}
          setReceiver={setReceiver}
          amount={amount}
          setAmount={setAmount}
          miner={miner}
          setMiner={setMiner}
          transferCrypto={transferCrypto}
          mineCrypto={mineCrypto}
          apagarTransacao={apagarTransacao}
          apagarBloco={apagarBloco}
          ledger={ledger}
          blockState={blockState}
          blockchainState={blockchainState}
        />
      )}
      {currentSection === 'wiki' && (
        // <section className="wiki">

        // </section>


        <section className="wiki">
        <div>
          <article>
          <h2>A História de Rust</h2>
          <p>
              Rust é uma linguagem de programação moderna que foi projetada para oferecer alto desempenho, segurança e controle de memória, características que tradicionalmente pertenciam a linguagens como C e C++. Sua história começa em 2006, quando Graydon Hoare, um engenheiro da Mozilla, iniciou o desenvolvimento de Rust como um projeto pessoal. O objetivo era criar uma linguagem que resolvesse problemas comuns de segurança de memória, como ponteiros inválidos e condições de corrida, enquanto mantinha a eficiência necessária para sistemas de alto desempenho.
          </p>
          <p>
              Em 2009, o projeto ganhou suporte oficial da Mozilla, o que marcou um ponto de virada significativo para Rust. A empresa viu potencial na linguagem para ajudar a melhorar o desempenho e a segurança de seus produtos, incluindo o navegador Firefox. Com o apoio da Mozilla, Rust passou a ter uma equipe de desenvolvimento dedicada, o que permitiu que a linguagem evoluísse rapidamente.
          </p>
          <p>
              O primeiro lançamento público de Rust ocorreu em 2010, como uma versão preliminar. Na época, a linguagem ainda estava em suas fases iniciais e apresentava uma sintaxe muito diferente da atual. A evolução contínua resultou em melhorias significativas na linguagem, incluindo uma nova abordagem para controle de memória baseada no conceito de "ownership" (posse), que se tornou um dos pilares fundamentais de Rust.
          </p>
          <p>
              Em 2015, Rust alcançou a maturidade com o lançamento de sua versão 1.0. Este marco foi crucial, pois estabeleceu uma base estável para desenvolvedores e garantiu que novos projetos não seriam interrompidos por mudanças incompatíveis na linguagem. A partir deste ponto, Rust começou a ganhar ampla adoção, especialmente entre empresas e desenvolvedores que buscavam uma alternativa segura e eficiente às linguagens tradicionais de sistemas.
          </p>
          <p>
              Desde então, Rust tem sido amplamente utilizado em diversas áreas, incluindo sistemas operacionais, navegadores, bancos de dados e até mesmo blockchain. A linguagem foi escolhida para reescrever partes críticas do navegador Firefox, como o mecanismo de renderização Servo, devido à sua capacidade de prevenir erros de memória comuns.
          </p>
          <p>
              Rust tem uma abordagem centrada no desenvolvedor, busca criar ferramentas e documentação acessíveis para todos, tornando a linguagem não apenas poderosa, mas também agradável de usar.
          </p>
          <p>
              Hoje, Rust frequentemente recebe elogios por sua combinação única de segurança, desempenho e ergonomia. Ela continua a evoluir, impulsionada por sua comunidade e pelo crescente interesse em construir software confiável e de alto desempenho.
          </p>  
          </article>
          <article>
            <h2>
            Premissas, Usuário e Domínio de Aplicação da Linguagem Rust
            </h2>
            <p>
                A linguagem Rust se destaca como uma escolha estratégica para projetos que demandam segurança, desempenho e eficiência. Suas principais premissas residem na segurança de memória e concorrência, dois pilares fundamentais para o desenvolvimento de sistemas robustos. Diferentemente de outras linguagens, Rust evita problemas comuns, como condições de corrida, vazamentos e acessos inválidos à memória, utilizando um sistema de ownership e borrowing que opera em tempo de compilação, eliminando a necessidade de garbage collector (GC). Assim, é possível criar aplicações de alto desempenho que competem diretamente com linguagens como C e C++, mas sem sacrificar a confiabilidade.
            </p>
            <p>
                Outro ponto de destaque de Rust é sua capacidade de lidar com tarefas de concorrência de maneira segura e eficiente, possibilitando o uso de múltiplas threads sem o risco de introduzir erros sutis e críticos. Além disso, seu ecossistema crescente, com ferramentas como o cargo (gerenciador de pacotes) e uma ampla gama de crates (bibliotecas), amplia sua versatilidade para diversas áreas, como desenvolvimento web, blockchain, sistemas embarcados, jogos e ferramentas de linha de comando.
            </p>
            <p>
                Os usuários de Rust são amplamente variados, abrangendo desde desenvolvedores profissionais até entusiastas e estudantes. No caso de sistemas embarcados, Rust atende a engenheiros que precisam de controle rigoroso sobre a memória e processamento, especialmente em dispositivos com recursos limitados. Empresas de tecnologia, por sua vez, encontram em Rust uma linguagem confiável para aplicações críticas, como sistemas bancários ou redes descentralizadas. Entusiastas e desenvolvedores de blockchain veem em Rust uma ferramenta essencial para criar contratos inteligentes e redes seguras. Estudantes e pesquisadores, atraídos pelo modelo inovador de gerenciamento de memória e sistemas de tipos avançados, também se beneficiam do aprendizado e aplicação prática da linguagem.
            </p>
            <p>
                O domínio de aplicação de Rust é vasto e adaptável a diversos cenários. Na área de desenvolvimento web, frameworks como Rocket e Actix tornam a criação de APIs e servidores HTTP de alto desempenho acessível e eficiente. No contexto de blockchain, Rust é ideal para implementar criptomoedas, contratos inteligentes e sistemas descentralizados, graças à sua segurança intrínseca. No campo de sistemas embarcados, Rust permite o controle de dispositivos de baixo nível, como microcontroladores, maximizando o uso eficiente de recursos limitados. A linguagem também tem ganhado espaço no desenvolvimento de jogos, oferecendo ferramentas como o framework Bevy, que combina desempenho e facilidade de uso para criação de jogos e motores gráficos. Por fim, Rust se sobressai no desenvolvimento de ferramentas de linha de comando e software de alta performance, como algoritmos matemáticos e análise de dados, devido à sua capacidade de lidar com tarefas intensivas de forma otimizada.
            </p>
            <p>
                Em resumo, Rust é uma linguagem que atende a múltiplas demandas modernas, combinando segurança, desempenho e flexibilidade. Sua aplicação pode ser moldada para resolver problemas complexos em várias áreas, enquanto seu design inovador continua atraindo uma comunidade crescente de usuários em busca de soluções mais seguras e eficientes.
            </p>
          </article>
          <article>
          <h2>Construtores </h2>
            <p>    Quando se trata de tipos primitivos, um aspecto interessante do Rust comparado a C é que seus tipos numéricos são divididos na quantidade de bits de memória que ocupam e, consecutivamente, os intervalos de memória a quais podem ser endereçados. Por exemplo, i32 é um inteiro de 32 bits e, portanto, só pode ser armazenado em um endereço múltiplo de 32, enquanto u16 é um inteiro sem sinal de 16 bits. No geral, inteiros com ou sem sinal podem ser de 8, 16, 32, 64 ou 128 bits, e floats podem ser de 32 ou 64, tal funcionalidade pode ser feita com bibliotecas em C, mas em Rust tal detalhamento é padrão.    </p>

            <p>    Além disso, Rust não possui o tipo “Void” de C, mas possui 2 tipos primitivos além de C, “Strings” e “Never”. Strings são implementadas em C como “char *” por padrão, mas em Rust esse tipo é implementado diretamente, o que permite à linguagem fazer certas presunções sobre os dados desse tipo que não poderia da outra maneira. Por outro lado, o tipo Never é um tipo similar ao “Void” do C, sem nenhum valor, mas único em que serve para indicar quando uma função/expressão não espera um retorno, geralmente por gerarem uma exceção, mas também pode ser útil por expressões desse tipo poderem ser coagidas a qualquer outro tipo. Esse tipo será explorado na sessão de “Tipos de Dados” em “Legibilidade”, mas abaixo está um exemplo dessa propriedade de coerção:   </p>
            
            <p>Exemplo: “break” possui tipo “Never”, logo, apesar de “numerov” esperar um valor do tipo “u32”, ele aceita um match com retorno “break” por saber que a computação não será terminada nesse caso.  </p>
           
            <img src={capturarImg} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
            
            <p>
              Como elementos base da construção de sentenças em Rust, a maior parte deles é equivalente aos de C, mas possui algumas peculiaridades em sua estruturas e palavras chave, como:
            </p>
            
            <ul class="lista">
            
              <li>
                <b>“fn”:</b> Palavra-chave que inicia a declaração de uma função.
              </li>
              <li>
              <b>“let N”:</b> “let” é uma palavra-chave. Nessa estrutura inicia declaração de uma variável “N”,
              </li>
              <li>
              <b>“N : T”:</b> Construtor opcional para explicitar que a variável declarada “N” é do tipo “T” (pois o compilador de Rust muitas vezes é capaz de deduzir o tipo implícito).
              </li>
              <li>
              <b>“N as T”:</b> “as” é uma palavra-chave. Pode converter um valor “N” para o tipo “T“ou pode também renomear elemento “N” de um import para “T”.
              </li>
              <li>
              <b>“impl T”:</b> “impl” é uma palavra-chave. Nesse uso, declara implementação do tipo “T”, pode ser de uma “Trait”, assumindo forma de “impl R for T”, que implementa a trait “R” para o tipo “t”.
              </li>
              <li>
              <b>“mod”:</b> Palavra-chave que declara um módulo, separando o código em unidades lógicas que agrupam de funções, traits e structs. Por padrão, conteúdo de um módulo é privado, servindo como forma de controlar o escopo em Rust.
              </li>
              <li>
              <b>“pub”:</b> Palavra-chave que declara um conteúdo de um módulo como público ao invés de privado.
              </li>
              <li>
              <b>“self”:</b> Palavra-chave que se usa para referenciar o módulo atual.
              </li>
              <li>
              <b>“super”:</b> Palavra-chave que se usa para referenciar o módulo acima do atual.
              </li>
              <li>
              <b>“mut”:</b> Palavra-chave usada para declarar uma referência como mutável.
              </li>
              <li>
              <b>“move”:</b> Palavra-chave usada para converter variáveis declaradas por referências, mutáveis ou não, em variáveis capturadas por valor, passando a posse do valor à nova variável.
              </li>
              <li>
              <b>“loop”:</b> Palavra-chave que indica loop infinito.
              </li>
              <li>
              <b>“in”:</b> Palavra-chave que em loop for permite iterar por elementos da estrutura a seguinte desde que ela implemente a “trait” “IntoIterator”.
              </li>
              <li>
              <b>“where”:</b> Palavra-chave usada para impor restrições baseadas em “traits” necessárias para um item ser utilizado.
              </li>
              <li>
              <b>“trait”:</b> Palavra chave indicando uma “trait”, que funciona como interface comum.
              </li>
              <li>
              <b>“unsafe”:</b> Palavra-chave usada em blocos e métodos que utilizam funcionalidades cuja segurança não pode ser garantida pelo compilador. Desabilita certos cheques de integridade em troca de maiores funcionalidades, como desreferenciar um “raw pointer”.
              </li>
            </ul>
            <p>
              A respeito de outras estruturas além de tipos primitivos, Rust possui as seguintes estruturas notáveis diferentes daquelas em C:
            </p>
            <p>
              Ponteiros: Apesar de C ter ponteiros, Rust é peculiar por ter ponteiros de referência compartilhada “&”, que permitem apenas a leitura do valor que o sucede, “pegando-o emprestado”, e ponteiros mutáveis “&mut” que permitem a mudança do valor no endereço, mas só podem existir se não há nenhum outro ponteiro em uso para esse endereço, seja ele compartilhado ou mutável.
            </p>
            <p>
              Tipo Slice: Possui funcionalidade equivalente em C, mas em Rust é tipo próprio, sendo um tipo de tamanho dinâmico que fornece visão a uma sequência de elementos de um dado tipo.
            </p>
            <p>
              Expressões “Closure”: Servem o papel de Expressões Lambda, onde se pode criar closures dentro de uma função e usando os valores locais do bloco que a contém. Podem ser atribuídas, o que gera um tipo Closure com estrutura de struct que pode então ser chamado.
            </p>
            <p>
              Expressões “Range”: Uma estrutura que representa intervalos e pode ser iterado por em loops “for”.
            </p>
            <p>
              Expressões “Match”: Similar ao “Switch” em C, mas funciona com tipos de dados adicionais, como Enums.
            </p>
            <p>
              Expressões “If let”: Uma versão alternativa de “if” que tenta uma atribuição baseada em um padrão match, executando o bloco seguinte em um sucesso, ou “else” em um fracasso.
            </p>
            <p>
              Expressões Underscore(_): Usadas como placeholders em desestruturação.
            </p>
            <p>
            Enum &ldquo;Result&lt;T,e&gt;&rdquo;: Um Enum usado para tratamento de exceções, que pode ser um Ok contendo um valor do tipo T, ou um Err que contém o valor de erro de tipo &ldquo;e&rdquo;. Quando retornado, esse valor precisa ser atribuído.
            </p>
          </article>
          <article>
            <h2>Legibilidade </h2>
            <p>Quando se trata de Legibilidade, há vários fatores que podem a afetar:  </p> 

            <p>Simplicidade: Nesse quesito, C e Rust são relativamente parecidos, Rust possui mais funcionalidades que potencialmente complicariam o código, algumas das quais serão analisadas em outros quesitos, mas entre o resto delas, tal “complicação” pode resultar em maior facilidade para entender o código, como no caso da sobrecarga do termo “in”, que pode ser usado para “Range”, vetor e outros agrupamentos de termos.  </p>

            <p>Exemplo: O operador “in” condensa estruturas mais trabalhosas de tratar dados estruturados de uma forma que ainda é intuitiva. Rust vs C  </p>

            <img src={capturarImg2} alt="Descrição da imagem da seção 2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Similarmente, Rust permite a sobrecarga de suas operações básicas, o que não é possível em C, isso pode na realidade ajudar a compreender o código quando tais sobrecargas são feitas de forma sensata e intuitiva, mas como não restrição, é possível de sobrecargas aparentemente ilógicas de serem implementadas, o que pode prejudicar bastante o código.  </p>

            <p>
            Exemplo: Uma sobrecarga intuitiva à esquerda e uma ilógica à direita, ambas para o operador “+”. A da esquerda simplifica o entendimento do código e a da direita complica. 
            </p>

            <img src={capturarImg3} alt="Descrição da imagem da seção 2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p> Ortogonalidade: Quando se trata de ortogonalidade, Rust sofre significativamente devido a suas medidas de segurança, o conceito de “ownership” restringe várias combinações lógicas e significativas, de operadores e operações por razões puramente de segurança, o que tem o efeito colateral de prejudicar a legibilidade, em especial por tratar diferentemente tipos como strings, de tipos como inteiros, que podem ser passados sem perder a permissão.  </p>

            <p>Exemplo: Nesse caso, quando se atribui s1 a s2, s1 perde sua posse do conteúdo e, portanto, não pode ser lido novamente, logo esse programa retorna um erro. Entretanto, em C, o mesmo pode ser feito assim como se faria com um valor Inteiro e sem erro, gerando um resultado com significado. Apesar de existir formas de replicar tais funcionalidades, 

Rust (Dá erro na compilação):  </p>

            <img src={capturarImg4} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
            
            <p>C (Compila e retorna “ABCD”):  </p>

            <img src={capturarImg5} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
            
            <p>Entretanto, mesmo no espaço da Ortogonalidade, há aspectos que o Rust se sai melhor que C. Por exemplo, apesar de em C vetores e structs ambos serem tipos de dados estruturados, apenas o segundo pode ser usado como retorno de função, o que invalida uma combinação que significativa. Em Rust, porém é possível facilmente retornar um vetor.  </p>
          
            <p>
  Exemplo: Tentando retornar uma estrutura com 3 elementos e um array de 3 elementos. Rust consegue compilar e executar com sucesso ambas as funções, enquanto C apenas consegue compilar a que retorna struct, dando erro ao tentar compilar a de retorno array. Há formas de contornar esse problema em C, mas isso não muda o fato de que isso evidencia uma certa falta de ortogonalidade.
            </p>

            <p>
              Rust / C:
            </p>

            <img src={capturarImg6} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>
              Tipos de Dados: Na questão de tipos de dados, Rust tem uma ligeira vantagem, por não só possuir o tipo “trait”, que funciona como interface de forma bem mais clara e legível que alternativas em C (Esse tipo será explorado em Capacidade de Escrita), mas também por ter explicitamente o tipo “String”, o que eleva um pouco a legibilidade comparado a C, onde o padrão é utilizar-se um ponteiro “char *”.
            </p>

            <p>
              Além disso, Rust tem um tipo quase exclusivamente utilizado para auxiliar a compreender e explicitar uma funcionalidade do código, o tipo “Never”, que marca quando uma computação não irá terminar, deixando claro funções que não esperam retorno, ou cujo retorno significa que tiveram sucesso ou fracasso. O tipo “Void” em C é similar, mas distinto ao “Never”, o primeiro indica que nenhum valor está presente ou que é um ponteiro sem tipo específico, enquanto o segundo indica que a computação nunca será resolvida para um valor no geral.
            </p>

            <p>
              “Void” por si só contribui certas clarificações ao código, em especial como tipo de ponteiro, que em estruturas mais complexas facilita o trabalho de encadear as estruturas sem ter que constantemente mudar e atribuir tipos aos ponteiros, o que ajuda na simplicidade do programa.
            </p>

            <p>
              Exemplo – Função sem retorno esperado: Esse é um caso de uso do Never, representado por um “!”, “panic!” gera uma exceção com uma mensagem de erro igual aos valores em parênteses. O retorno “!” indica que a computação dentro da função será interrompida, nesse caso pelo “panic!” da função “PANICO”, que será chamada quando o input é inválido ou resultaria em uma divisão por 0.
            </p>

            <img src={capturarImg7} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>
  Exemplo: Nesse caso, a função “GETNUM” só dá retorno quando há um erro em obter e imprimir um número, caso contrário ela faz um loop eterno, isso é indicado pelo retorno Result&lt;!,char&gt;.
            </p>

            <img src={capturarImg8} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>
              Exemplo: Nesse código em C, é utilizado ponteiros void para simplificar aritméticas de endereçamento. Se cria um ponteiro void a um array de chars para poder simplificar manipulação de seu valor e pular de posição em posição, só atribuindo tipo na hora de dereferenciar o valor no endereço. Aritmética de ponteiros desse jeito não é possível em Rust padrão, por ser considerado inseguro.
            </p>

            <img src={capturarImg9} alt="Descrição da imagem da seção 2.2" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>
              Com todos esses pontos em mente, é evidente que o maior ponto negativo contra a Legibilidade em Rust são as restrições impostas pelo compilador para garantir a segurança no programa em si, que podem de fato causar problemas a respeito da ortogonalidade e em muitos casos deixa a linguagem menos legível que C. Essa desvantagem é especialmente impactante, pois, ao contrário dos outros pontos positivos apontados nessa seção, a manipulação do sistema de posse tem uso bem mais frequente e universal à linguagem, comparado ao caráter situacional e específico das outras melhorias.
            </p>

            <p>
              Entretanto, caso a aplicação seja uma onde essas restrições não se tornam muito relevantes com frequência, ou cujos principais usos são simples de abstrair em funções mais contidas, os outros fatores podem contribuir para compensar por essas restrições e tornar Rust tão legível ou mais que C.
            </p>

          </article>
          <article>
            <h2>Capacidade de Escrita </h2>
            
            <p>A Capacidade de Escrita é afetada também por fatores que facilitam a Legibilidade. Por esse motivo, as restrições para garantir a segurança das operações em Rust também prejudicam a capacidade de escrita, uma vez que certos programadores podem não compreender todos as regras de propriedade e empréstimo, assim como formas específicas de manipular essas informações, o que resulta em erros sendo cometidos por tentar combinações que parecem lógicas de elementos. Por outro lado, os fatores mencionados que de fato contribuem à legibilidade, como o tipo “Never”, também auxiliam na Capacidade de Escrita. </p>
            
            <p>Além disso, uma qualidade boa de Capacidade de Escrita em Rust é que ela possui maior capacidade de Abstração que C. Apesar de também ser procedural, Rust possui mais suporte que ele a Programação Orientada a Objetos, primariamente pela implementação de traits, que funcionam como interfaces, permitindo declarar a assinatura de um método que então pode ser implementada para um dado tipo.</p>
            
            <p>Outro fator que beneficia Rust é a presença de certos operadores e funcionalidades poderosos que aumentam a expressividade e que estão ausentes em C. Um exemplo é o “Range”, uma estrutura, que contém todos os valores entre o valor inferior e superior, que pode ser usado para simplificar loops “for” e rapidamente criar estruturas iteraveis frequentemente utilizadas que envolvem sequências simples de números. Outro exemplo de uma funcionalidade poderosa é a implementação de expressões lambda através de Closure, permitindo incluir funções anônimas dentro de outras funções e ainda chama-las através de um tipo “Closure” criado quando ela é atribuída.  </p>
            
            <p>Exemplo – Interface através de “trait”: Nesse exemplo, no Rust se utiliza Equals como interface para o método “equals”, que é então implementado para 2 Structs, “Pessoa” e “Coordenada”, cada uma com uma forma própria de determinar se objetos são iguais. Em C, é possível implementar funcionalidade parecida utilizando structs e ponteiros para funções, mas em estruturas mais complexas se torna menos intuitivo e legível, além de ser consideravelmente mais trabalhoso comparado a Rust. </p>
            
            <p>Rust: </p>
            
            <img src={capturarImg10} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – Expressividade através de expressão “Range”: Nesse caso, se cria um range que é usado em um loop “for” e itera-se por seus valores os imprimindo. O código equivalente em C não é muito complicado, mas o em Rust é mais condensado e sua estrutura poderosa. </p>

            <p>Rust: </p>

            <img src={capturarImg11} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>C: </p>

            <img src={capturarImg12} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – Closures: Implementação de uma closure que acessa o valor local “pot_atual” e aceita um argumento “i”, e retorna “i**pot_atual”.  </p>

            <img src={capturarImg13} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Em suma, no geral, Rust possui Capacidade de Escrita superior a C, com operadores poderosos, suporte maior à abstração e uma ortogonalidade, que, apesar de inferior em certos aspectos, possui muitas características interessantes que contribuem para elevar a linguagem. </p>

          </article>
          <article>
            <h2>Confiabilidade </h2>

            <p>Rust é uma linguagem criada com segurança em mente e, apesar de deliberadamente implementar funcionalidades que poderiam ser consideradas inseguras, elas são bloqueadas por trás da palavra-chave “unsafe” e, caso se use os procedimentos recomendados e esperados, Rust é incrivelmente seguro. Enquanto um usuário está apenas usando funcionalidades seguras, Rust garante que o compilador reconhecerá brechas de contratos requeridos por funções e atributos e que nunca haverá Comportamento Indefinido, ao contrário de linguagens como C.  </p>

            <p>Um aspecto fundamental de Rust é o conceito de “Ownership”, no qual todo valor tem um, e apenas um, dono a que pertence e, se o dono desaparecer do escopo, o espaço alocado ao valor é automaticamente liberado. Isso é relevante comparado a C, pois C tem bem menos controle sobre os acessos e ponteiros a valores, o que pode levar a ponteiros soltos que apontam para áreas de memórias liberadas, múltiplos ponteiros tentando acessar o mesmo valor e o modificando sem consideração sobre a existência desses acessos alternativos. Rust impede isso de acontecer, o que deixa a linguagem consideravelmente mais confiável que C.  </p>

            <p>
  Adicionalmente, C por padrão não possui suporte a tratamento de exceções, ele pode ser simulado com “setjmp” e “longjmp”, mas tal implementação é menos intuitiva e pode gerar problemas. Em comparação, Rust possui suporte a tratamento de exceções através do Enum “Result”, que é usado por funções que podem falhar, retornando um Ok&lt;T&gt;, contendo o dado do tipo T requisitado caso ela tenha tido sucesso, ou um Err&lt;E&gt; contendo um dado do tipo Error caso tenha falhado.
            </p>
            
            <p>Exemplo – Ponteiros Soltos:  </p>

            <p>C – Esse programa cria um ponteiro alocando espaço para ele, e então o libera e tenta o referenciar novamente. Essa implementação não gera erros na compilação, mas retorna resultados instáveis e indesejados, oferecendo graves perigos </p>

            <img src={capturarImg14} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Rust – Essa implementação em rust faz algo parecido, criando uma referência para uma String em s1, passando a posse da String para s2, e então tentando acessar o valor de s1. Entretanto, esse programa não compila em Rust, o que evita o risco de comportamento inconfiável.    </p>

            <img src={capturarImg15} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – “Data Race”, acesso concorrente às mesmas posições da memória: </p>

            <p>C – Em C, quando se têm múltiplos ponteiros a um mesmo espaço na memória e o valor nesse local é modificado por um desses acessos, o valor muda para todo acesso. Esse comportamento muitas vezes pode ser desejado, para manter o estado mais atualizado do valor, mas, em muitos casos pode levar a erros causados pela presunção de que o valor para qual um ponteiro aponta só será modificado por meio dele. Programas feitos com essa expectativa, o que pode facilmente acontecer com estruturas mais complexas, facilmente apresentam comportamento inesperado ao desenvolvedor, esse código abaixo é um exemplo bem simplificado isso, no qual modificando-se o valor no endereço de ‘a’ para 2 através de ‘c’, o valor também muda para ‘b’.  </p>

            <img src={capturarImg16} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Rust – Em Rust, isso não se pode ser feito, apenas uma referência a um valor com capacidade de mudá-lo pode existir e, se ela existe, também não podem existir outras referências, mesmo com apenas acesso de leitura. Isso serve para garantir consistência e coerência no acesso e mudanças de variáveis. Esse código abaixo exemplifica essa limitação, bloqueando a criação e uso de uma referência mutável. </p>

            <img src={capturarImg17} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo - Acesso a index inválido de Array: Em C, não há restrição inata sobre o índice acessado em um array, o que permite ler memória além da reservada, retornando dados lixo, isso é impossível em Rust.</p>
            
            <p>C 				vs	 		Rust </p>
            
            <img src={capturarImg18} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo – Tratamento de Exceções: Considerando um caso onde desejamos lançar uma exceção quando um número que se tenta obter a raiz é negativo. É possível fazer isso em Rust e em C com enums ou meramente checando o retorno, mas em C é simples de um programador ignorar a possibilidade do retorno indicar erro, pois não há nenhum requisito de que tal erro seja abordado. Por outro lado, Rust possui por padrão enum “Result”, que foi feito para ser utilizado como mecanismo de tratamento de erros e é marcado com a necessidade de ser utilizado, ou seja, se o valor de retorno de uma função é um Result e ele não é usado em uma expressão ou atribuído em uma variável, o compilador emite um aviso. </p>

            <p>Exemplo em Rust funcionando corretamente: </p>

            <img src={capturarImg19} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>

            <p>Exemplo em Rust com o aviso por valor não utilizado: </p>

            <img src={capturarImg20} alt="Descrição da imagem da seção 1" style={{MaxWidth: '100%', borderRadius: '10px'}}/>
          </article>
          
          <article>
            <h2>Custos</h2>
            <p>Custo de Treinamento: C no geral será bem menos custoso nesse aspecto pelo simples fato de que sua adoção quase universal garante que inúmeras fontes existem que podem ser usadas para o aprendizado, assim como que já existem inúmeros profissionais qualificados para programar na linguagem, comparado a Rust. Outro fator que influencia nisso é a ortogonalidade, que, como já analisado, é ligeiramente maior em C, o que contribui para sua facilidade de aprender, pois o sistema de posse e empréstimo de Rust, apesar de ser bem útil, ainda são restrições que podem não são muito intuitivas. </p>

            <p>Custo de Escrever Programas: O maior benefício de Rust contra C nesse quesito é o fato de, tendo-se um programador já acostumado com as tecnicalidades da linguagem, Rust permite detectar muitos potenciais erros antes que C, na compilação ao invés de na execução, o que leva a bastante tempo sendo salvo que seria gasto vasculhando o código pela fonte de erros banais causados por uso equivocado de memória. Dessa maneira, aplicações que precisam manipular bastante ponteiros e espaços na memória se beneficiariam bastante do Rust, mas em situações onde isso não é o caso é possível que o custo das restrições na ortogonalidade pelas medidas protetivas elevem esse custo acima do de C.  </p>

            <p>Custo de Execução: A maior rapidez em execução de C comparado a Rust pode resultar em custos ligeiramente menores de execução dos programas no primeiro. Entretanto, vale notar que Rust já é uma linguagem bem otimizada comparada a outras como Python, então tal diferença não costuma ser grande e, dependendo da implementação exata, Rust pode ser equivalente ou até mais rápido que C.	 </p>

            <p>Custo de Compilação: Rust costuma ser significativamente mais lento para compilar que C, primariamente por possuir mais abstrações que são mais difíceis de serem compreendidas pelo compilador. Ademais, sua checagem extensiva que garante sua famosa segurança tem de ser que ser garantida pelo compilador, o que requer uma análise detalhada e complexa que inevitavelmente trás custos significativos.  </p>

            <p>Custo do Sistema de Implementação: Ambos o Rust e o C possuem Custo do Sistema de Implementação baixos, uma vez que seus compiladores são gratuitos e facilmente acessíveis, além de serem implementados em inúmeros hardwares baratos e facilmente acessíveis. </p>

            <p>Custo de Má – Confiabilidade: Quando se trata de custos, Rust se eleva sobre C primariamente no Custo da má confiabilidade em sistemas críticos, uma vez que sua confiabilidade mais alta diminui a chance e impacto de ocorrerem problemas na confiabilidade de sistemas.  </p>

            <p>Custo de Manutenção dos Programas: Como esse fator é influenciado pela legibilidade, esse fator pode ser considerado ligeiramente inferior ao C em parte dos casos, mas superior a ele quando o programa foi implementado tal que as restrições impostas sobre operações pelo compilador foram evitadas elegantemente, isolando processos com manipulação intensiva dos conceitos de posse e empréstimo e usando estruturas intuitivas e ortogonais na maior parte do código. </p>
          </article>
          <article>
            <h2>Portabilidade</h2>
            <p>Em prática, devido à idade e predominância do C comparado a Rust, o primeiro tem bem mais plataformas que o suportam e inúmeros compiladores para a linguagem para inúmeras plataformas, enquanto Rust depende da portabilidade do LLVM, que é menos universal. Entretanto, quando se trata da linguagem em si, Rust ainda é bem portátil e, quando uma plataforma é suportada por Rust, pode exceder a Portabilidade de C em desenvolver para múltiplas plataformas, o “rustc”, seu compilador é cross-compiler e pode especificar diretamente que arquitetura compilar para com “--target”. Além disso, o gerenciador de pacote “Cargo” do Rust facilita a organização e declaração de dependências, o que ajuda a evitar uso inadequado de dependências em diferentes versões, o que muitas vezes contribui para problemas de Portabilidade.  </p>
          </article>
          <article>
            <h2>Generabilidade</h2>
            <p>Rust possui um foco em manter alta performance, mas com alto foco em segurança, o que em muitos casos pode ser extremamente útil, mas também impõe certas limitações. Apesar de se poder utilizar comportamentos inseguros com a palavra chave “unsafe”, o fato de que tal uso é desencorajado pela linguagem e que C é de nível um pouco mais baixo que Rust, faz o primeiro ser um pouco mais geral que o segundo. Em prática, isso também é exacerbado pelos recursos externos mais abundantes em C que facilita sua aplicação em casos mais diversos.  </p>
          </article>
          <article>
            <h2>Qualidade de Definição </h2>

            <p>O Rust não possui um documento oficinal que define a Gramática Formal da linguagem, mas possui algumas descrições informais, mas oficiais, dos elementos da gramática, apesar de ele estar incompleto pela sua própria admissão. Esse documento pode ser acessado pelo link:  </p>
            
            <a href = "https://doc.rust-lang.org/reference/"><i>https://doc.rust-lang.org/reference/</i></a>  

            <p>C define sua Gramática Formal, que é visível na definição da linguagem presente em: </p>

            <a href="https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf"><i>https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf</i> </a>
          </article>
        </div>
        </section>
        )}
      
    </div>
  );
}

export default App;
