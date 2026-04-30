import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    private _limiteChequeEspecial: number;

constructor(
    numero: string,
    saldo: number,
    limiteChequeEspecial: number
) {
    super(numero, saldo);
    this._limiteChequeEspecial = limiteChequeEspecial;
}

public toJSON() { 
    return {
        ...super.toJSON(),
        limiteChequeEspecial: this._limiteChequeEspecial
     }
    }

public static fromJSON(jsonData: string): ContaCorrente {
    const data = JSON.parse(jsonData);
    return new ContaCorrente(
        data.numero,
        data.saldo,
        data.limiteChequeEspecial
    );

}

}
