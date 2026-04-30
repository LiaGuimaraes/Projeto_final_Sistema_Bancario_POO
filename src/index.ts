import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { Transacao } from "./transacao";    

const Maria = new Cliente(
    "123.456.789-00",
     "Maria Silva",
     new Date("1990-05-15"),
     "maria.silva@email.com", 
     "senha123");

const contaCorrente = new ContaCorrente("0001", 1000, 500);
const contaPoupanca = new ContaPoupanca("0002", 5000, 2.5);

Maria.adicionarConta(contaCorrente);
Maria.adicionarConta(contaPoupanca);

contaCorrente.depositar(500);

contaCorrente.sacar(200);
contaCorrente.transferir(300, contaPoupanca);  
contaPoupanca.renderJuros(); 

console.log(`Saldo da conta corrente: R$${contaCorrente.saldo}`);
console.log(`Saldo da conta poupança: R$${contaPoupanca.saldo}`);

const clienteSerializado = JSON.stringify(Maria);
console.log(clienteSerializado);