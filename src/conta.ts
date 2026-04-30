import { Transacao } from "./transacao";

export abstract class Conta {
    private _numero: string;
    private _saldo: number;
    private _historicoTransacoes: Transacao[] = [];

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public get numero(): string { return this._numero; }
    public get saldo(): number { return this._saldo; }
    public get historicoTransacoes(): Transacao[] { return this._historicoTransacoes; }

    // MÉTODO NOVO: Permite adicionar transações sem abrir o array para modificação direta
    public adicionarTransacao(transacao: Transacao): void {
        this._historicoTransacoes.push(transacao);
    }

    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do saque deve ser positivo.");
        if (valor > this._saldo) throw new Error("Saldo insuficiente.");
        this._saldo -= valor;
    }

    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do depósito deve ser positivo.");
        this._saldo += valor;
    }

    public transferir(valor: number, contaDestino: Conta): void {
        this.sacar(valor);
        contaDestino.depositar(valor);

        const [tSaida, tEntrada] = Transacao.criarTransferencia(
            this.numero,
            contaDestino.numero,
            valor
        );

        // AGORA FUNCIONA: Usamos o método público para registrar
        this.adicionarTransacao(tSaida!);
        contaDestino.adicionarTransacao(tEntrada!);

        console.log(`Transferência de R$${valor} realizada para ${contaDestino.numero}.`);
    }

    public toJSON() {
        return {
            numero: this._numero,
            saldo: this._saldo,
            historicoTransacoes: this._historicoTransacoes
        };
    }
}