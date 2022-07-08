# O Raciocinador do Hetucakra

Aqui apresento brevemente uma documentação sobre o funcionamento desse software. Essa apresentação terá dois focos principais:
  - explicar o funcionamento da interface visual.
  - explicar a semântica e a lógica por detrás de cada validação das posições da Roda das Razões (*Hetucakra*) do Lógico Budista Dignāga.

Há apenas uma entidade nesta Api, a saber, o “Argumento” (*Anumana*). *Anumana* é o argumento tal como entendido por Dignāga (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignāga, 2000). Ele é formado por uma hipótese, uma justificativa, um exemplo e um contraexemplo. Cada um desses componentes é formado por um sujeito lógico e um atributo lógico. Por exemplo:
  - 1. **Hipótese**: “O som é impermanente”. 
      - Sujeito Lógico: “O som”.
      - Atributo Lógico: “ser impermanente”. 
  - 2. **Justificativa**: “Dado que o som é produzido”. 
      - *Sujeito Lógico*: “O som”.
      - *Atributo Lógico*: “ser produzido”. 
  - 3. **Exemplo**: “Tal como o jarro é impermanente e produzido” 
      - *Sujeito Lógico*: “O jarro”.
      - *Atributo Lógico*: “ser impermanente e ser produzido”. 
  - 4. **Contraexemplo**: “Diferente do espaço que é permanente e não-produzido”. 
      - *Sujeito*: “O espaço”.
      - *Atributo*: “não ser impermanente e nem produzido”.
      
Na  interface visual e na "entidade" *anumana* do *backend* espelhei a estrutura acima. Assim, por exemplo, o elemento hipótese da nossa interface é composto pelo sujeito e pelo atributo lógico. O mesmo se aplica para a justificativa, exemplo (exemplo similar) e contraexemplo (exemplo dissimilar). Na imagem abaixo podemos ver esses elementos e outros componentes visuais: 

![image](https://user-images.githubusercontent.com/84526032/178041588-b2692390-fe2d-43bb-a7f8-0cf8848adcfd.png)

Essa tela é a tela principal. É a primeira a aparecer quando o usuário abrir o software através do endpoint: https://pj-oliveira.github.io/hetucakra. Esta tela contém o formulário, a roda e o botão de validar. A hipótese é composta pelo sujeito e pelo atributo como já expliquei. Cada um tendo um espaço para preenchimento no *scrolldown*. O mesmo se aplica à justificativa, ao exemplo e ao contraexemplo. Darei alguns exemplos aqui das posições e de como elas funcionarão de acordo com alguns exemplos de argumentos.
Não creio ser necessário listar todas as posições, dado que as duas posições do extremo superior e do extremo inferior são válidas, o centro sofre da falácia de ter uma justificativa muito restrita, os cantos sofrem da falácia de excesso de generalidade, e os lados, direito e esquerdo, são paradoxais. Desse modo, darei como exemplo, um canto, posição 1, o extremo superior, posição 2, o extremo esquerdo, posição 4 e o centro. Dessa maneira, esgotarei todos tipos de argumentos que oferece a roda das razões. Seguindo esse plano, inicio.
Quando o usuário preencher o formulário com seus respectivos componentes, então um argumento se formará de acordo com a Figura 1. Tais argumentos atenderão a determinados critérios estabelecidos no Service do backend. Assim, argumentos que atendam aos critérios da posição 1, fará com que a posição do canto esquerdo superior brilhe assim:

![image](https://user-images.githubusercontent.com/84526032/178041808-d3394245-6c99-468a-8f2d-3184e5b7d0ec.png)

Essa posição é a posição 1. Ela reflete um argumento falacioso pela seguinte razão: a justificativa dada para provar que o som é eterno, é o fato de que ele é cognoscível. No entanto, como tantas coisas eternas quanto coisas não eternas são cognoscíveis, então não se segue nem lógica, nem necessariamente, que o som seja eterno visto que é cognoscível. Destarte, argumentos desse estilo sofrem da falácia da inconclusividade, posto que a justificativa é geral demais para demonstrar a veracidade da tese (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignāga, 2000). No Service do backend desenvolvi a seguinte validação que faz com que essa posição seja determinada pela lógica:

![image](https://user-images.githubusercontent.com/84526032/178045514-43bd3b29-3565-4d75-a44e-e1d875211b16.png)

Vamos olhar um pouco para essa lógica. Todas as validações recebe um “Anumana” como argumento (parâmetro). Posto de maneira sintética, sabe-se o seguinte: o predicado da hipótese do exemplo similar 1 será sempre “Verdadeiro” assim como o predicado da hipótese do exemplo dissimilar 1 (contraexemplo) será sempre “Falso”. É assim pelas razões definitórias de cada um que mencionei anteriormente. Nesse caso, o predicado da justificativa do exemplo similar 1 afirma como afirma o predicado da justificativa, portanto, tal predicado do exemplo similar é “Verdadeiro”. Ora, não há um exemplo similar que afirma algo diferente do exemplo similar 1, nesse caso tal possibilidade é “Inexistente”. Além disso, o predicado da justificativa do exemplo dissimilar 1 (contraexemplo) é “Verdadeiro”, i.e., tal predicado afirma como o predicado da justificativa afirma. E, não há um outro contraexemplo, i.e., não há um exemplo dissimilar que afirme o contrário do que afirma o exemplo dissimilar 1. A lógica das outras validações vão seguir um padrão parecido e depois de um tempo de treino deverá ser intuitivo para o pesquisador. Um ponto importante de característica visual é: quando o usuário ver a luz brilhando no canto esquerdo superior, ele poderá clicar nessa luz e abrirá um popup que explicará a semântica daquela posição também com o auxílio de diagramas de Venn. Isso também se aplica para as outras posições.

![image](https://user-images.githubusercontent.com/84526032/178045832-3351e2df-37e8-4e61-8246-9dfe5b51b46a.png)

Na imagem acima, temos o exemplo da posição 2. Essa posição é válida. Vejamos por quais razões. A justificativa dada para demonstrar a tese de que “o som é momentâneo” é o fato de que “o som é produzido”. Ora, coisas momentâneas e coisas produzidas são coextensivas, i.e., não há coisas que sejam produzidas e não sejam momentâneas e não há coisas que sejam momentâneas e não sejam produzidas. O fato da coextensividade do predicado da hipótese e da justificativa nesse caso é revelado pela ausência de exemplos ou contraexemplos que dizem o contrário dos exemplos e contraexemplos referidos, a saber, um exemplo tal que diga “algo é momentâneo, mas não é produzido”, um contra exemplo tal que diga “algo não é momentâneo, mas é produzido” etc (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignāga, 2000). A lógica de validação dessa posição no Service é semelhante estruturalmente a da posição 1.

![image](https://user-images.githubusercontent.com/84526032/178045932-49691a6f-0e9b-4147-8542-e34196c96cac.png)

Nesse caso, como em todos outros, o predicado da hipótese do exemplo similar 1 é sempre “Verdadeiro” e o predicado da hipótese do exemplo dissimilar 1 (contraexemplo) é sempre “Falso”. É determinado assim por causa da própria definição do que significa ser um exemplo similar e do que significa ser um exemplo dissimilar. As peculiaridades dessa posição são as seguintes: não há um exemplo similar ou dissimilar distintos. O que significa quando não há exemplos similares ou dissimilares distintos? Significa que não há exemplos e contraexemplos que afirmam o oposto do que afirma os exemplos dados sobre o predicado da justificativa da tese. Nessa posição, o predicado da justificativa do exemplo similar 1 afirma como a própria justificativa afirma: o jarro é produzido tal como o som é produzido. Já o predicado da justificativa do exemplo dissimilar diz o oposto do que a própria justificativa diz: o espaço não é produzido assim como o som é produzido. A validade desse argumento é derivada do entendimento de como funciona as classes de coisas produzidas, as classes de coisas não produzidas e as classes de coisas momentâneas. Dado que a posição 3 segue uma lógica parecida com a da posição 1, partirei para uma explicação da posição 4.

![image](https://user-images.githubusercontent.com/84526032/178046131-9a078d25-dc7b-4caa-84b3-d2f51f3f452f.png)

Na imagem acima, revela-se uma posição também falaciosa, mas não falaciosa como a posição 1 e 3. A falácia aqui é a da contradição (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignāga, 2000). Em que sentido? Tenta se justificar que algo é eterno a partir do fato de sua produção, i.e., x é eterno dado que x é produzido. O problema aqui é evidente. Algo que é eterno não pode ser produzido e algo que é produzido não pode ser eterno. Isso fica mais claro ainda com os exemplos e contraexemplos e, com o fato de não haver exemplos ou contraexemplos que contrariem os exemplos referidos.

![image](https://user-images.githubusercontent.com/84526032/178046207-7f77b174-a29e-4c92-8bfc-5e76a639f626.png)

A lógica da validação da posição 4 segue estruturalmente como as anteriores. As peculiaridades da posição 4 é a seguinte: o predicado da justificativa do exemplo similar 1 é “Falso”. O que isso significa? Significa que o predicado da justificativa do exemplo similar 1 diz o oposto do que afirma a justificativa. Não há nem um exemplo similar ou dissimilar que diz o oposto do que afirma os exemplos dados. O predicado da justificativa do exemplo dissimilar um afirma o que a própria justificativa declara. Os outros detalhes dessa posição podem ser já entendidos a partir das explicações das outras posições. Abaixo será apresentada a imagem da posição do centro, a saber, a posição 5.

![image](https://user-images.githubusercontent.com/84526032/178046295-05ad3f69-923f-4e04-93d9-91464df05eca.png)

Nessa posição, há também uma falácia da inconclusividade tal como na posição 1, 3, 7 e 9. Todavia, há uma diferença. Aqui o argumento é falaciosamente inconclusivo por causa da sua excessiva restrição e não por causa da sua excessiva generalidade como acontece nos 1, 3, 7 e 9. Visto que existem coisas que não são audíveis e não são eternas e coisas que não são audíveis e são eternas, então ser audível não justifica que algo seja eterno, pois há tanto coisas eternas que não são audíveis quanto há coisas não eternas que não são audíveis (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignāga, 2000).

![image](https://user-images.githubusercontent.com/84526032/178046353-271133c8-391e-416a-8aa8-9b284c90faa3.png)

Assim como na posição 4, não há outros exemplos ou contraexemplos que diriam o contrário do que diz os exemplos dados a respeito do predicado da justificativa. No entanto, no caso da posição 5, tanto o exemplo quanto o contraexemplo negam o que afirma o predicado da justificativa, i.e., ambos predicados da justificativa do exemplo e do contraexemplo são “Falsos”. Não apresentarei mais explicações sobre as outras posições, i.e., a posição 3, 6, 7, 8, e 9 podem ser compreendidas a partir das explicações dadas. Em outras palavras, a posição 3, 7 e 9 sofrem do mesmo problema que o da posição 1; a posição 8 é válida como a 2 com poucas diferenças; e a posição 6 segue a mesma lógica que a 4. Para finalizar a nossa síntese, é interessante notar que as posições que sofrem da falácia da inconclusividade se alinham nos 4 cantos4 quando são gerais demais, i.e., as posições dos cantos exprimem também visualmente a excessiva generalidade. Já a posição do centro, ainda que também sofra da falácia da inconclusividade, exprime visualmente – por estar no centro – a sua excessiva restrição. As posições das laterais exprimem a sua falácia da contradição por estar em dois extremos opostos horizontais na mesma direção, i.e., trata-se de uma expressão visual da afirmação de “A e não-A” ao mesmo tempo e sob o mesmo aspecto. A imagem abaixo tenta sintetizar a intuição expressa nesse último parágrafo.

![image](https://user-images.githubusercontent.com/84526032/178046496-8ae5e03c-22c9-4a3d-b94e-bc5ad7a19fa0.png)

O desenvolvimento desse Software fez com que chegasse a conclusão de que cada posição da Roda das Razões (Hetucakra) tem propriedades lógicas bem específicas que podem ser estudadas pelos pesquisadores com mais clareza e rigor através dos recursos aqui promovidos. O desenvolvimento do “O Raciocinador do Hetucakra” se assemelha a vários tipos de “validadores automáticos” disponíveis no mercado. E, como qualquer “validador automático” tem seus objetivos específicos e peculiares. Tais objetivos atenderão aos interesses dos scholars que visam compreender e entender melhor como funciona a lógica Indiana e especialmente a lógica Budista





