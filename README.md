Sistema Bancário POO - Projeto Final

Este projeto foi desenvolvido como trabalho de conclusão do curso de Programação Orientada a Objetos, ministrado pela plataforma Ada Tech em parceria com o programa de transformação digital Caixa Verso, da Caixa Econômica Federal.

O objetivo principal é modelar a lógica de um sistema bancário simplificado, priorizando a segurança das transações e a integridade dos dados através de conceitos avançados de POO com TypeScript.

Para atender aos requisitos de "Encapsulamento Máximo" e "Regras de Negócio", foram aplicadas as seguintes estratégias:

Abstração e Herança: A classe Conta foi definida como abstract, servindo de molde para ContaCorrente (com limite de cheque especial) e ContaPoupanca (com rendimento de juros). Isso impede a criação de contas "genéricas" sem regras específicas.

Encapsulamento Rigoroso:

O atributo _saldo é privado e não possui setters. A alteração do valor é restrita aos métodos sacar() e depositar(), garantindo que nenhuma regra de validação seja pulada.

A senha do cliente foi protegida utilizando Private Class Fields (#senha), garantindo que o dado seja inacessível mesmo após a compilação para JavaScript.

Composição: Foi utilizada a relação de composição entre Conta e Transacao. Uma conta é composta por seu histórico, e a existência da transação está vinculada ao contexto da conta.

Métodos Estáticos: A classe Transacao utiliza o método estático criarTransferencia(). Essa decisão foi tomada para centralizar a lógica de criação de "recibos" (débito e crédito), garantindo que uma transferência sempre gere dois registros simétricos e atômicos.

Sistema PIX (Padrão Singleton/Static Store): Foi implementada uma classe SistemaPix com membros estáticos para gerenciar o mapeamento de chaves (CPF/E-mail) para objetos Conta. Isso permite que diferentes instâncias de clientes se encontrem no sistema sem a necessidade de uma base de dados externa no momento.

🚀 Como Executar o Projeto

Clone o repositório:
git clone https://github.com/LiaGuimaraes/Projeto_final_Sistema_Bancario_POO.git

Instale as dependências:
npm install

Execute o projeto:
Você pode rodar o arquivo principal (geralmente index.ts ou main.ts) usando o ts-node:

npx ts-node src/main.ts
