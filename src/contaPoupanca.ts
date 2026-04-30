import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    private _taxaJuros: number;

constructor(
    numero: string,
    saldo: number,
    taxaJuros: number
) {
    super(numero, saldo);
    this._taxaJuros = taxaJuros;
}

public renderJuros() {
    const juros = this.saldo * (this._taxaJuros / 100);
    this.depositar(juros);
    console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
}

public toJSON() { 
    return {
        ...super.toJSON(),
        taxaJuros: this._taxaJuros
     }
    }

public static fromJSON(jsonData: string): ContaPoupanca {
    const data = JSON.parse(jsonData);
    return new ContaPoupanca(
        data.numero,
        data.saldo,
        data.taxaJuros
    );

}
}
