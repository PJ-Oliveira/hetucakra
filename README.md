# O Raciocinador do Hetucakra

Aqui apresento brevemente uma documentação sobre o funcionamento desse provador automático. Essa apresentação terá dois focos principais.
  - explicar o funcionamento da interface visual.
  - explicar a semântica por detrás de cada validação de cada posição da Roda das Razões (Hetucakra) do Lógico Budista Dignaga.

Iniciaremos com uma breve explicação introdutória sobre a api.
Há apenas uma entidade nesta Api, a saber, o “Argumento” (Anumana). Anumana é o argumento tal como entendido por Dignāga (Chi, 1969; S. R., BHATT; Anu, Mehrotra; Dignaga, 2000). Ele é formado por uma hipótese, uma justificativa, um exemplo e um contraexemplo. Cada um desses componentes é formado por um sujeito lógico e um atributo lógico. Por exemplo:
  - 1. Hipótese: “O som é impermanente”. 
      - Sujeito Lógico: “O som”.
      - Atributo Lógico: “ser impermanente”. 
  - 2. Justificativa: “Dado que o som é produzido”. 
      - Sujeito Lógico: “O som”.
      - Atributo Lógico: “ser produzido”. 
  - 3. Exemplo: “Tal como o jarro é impermanente e produzido” 
      - Sujeito Lógico: “O jarro”.
      - Atributo Lógico: “ser impermanente e ser produzido”. 
  - 4. Contraexemplo: “Diferente do espaço que é permanente e não-produzido”. 
      - Sujeito: “O espaço”.
      - Atributo: “não ser impermanente e nem produzido”.
      
Na  interface visual e na "entidade" anumana do backend espelhei a estrutura acima. Assim, por exemplo, o elemento hipótese da nossa interface é composto pelo sujeito e pelo atributo lógico. O mesmo se aplica para a justificativa, exemplo (exemplo similar) e contraexemplo (exemplo dissimilar). 


