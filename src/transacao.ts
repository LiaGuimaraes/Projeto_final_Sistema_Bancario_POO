export class Transacao{
    private _tipo: string; // Exemplo: "Depósito", "Saque", "Transferência"
    private _valor: number;
    private _data: Date;
    private _contaOrigem: string; // Número da conta de origem (para transferências)
    private _contaDestino: string; // Número da conta de destino (para transferências)  



    constructor(
        tipo: string,
        valor: number,
        data: Date,
        contaOrigem: string,
        contaDestino: string
    ) {
        this._tipo = tipo;
        this._valor = valor;
        this._data = data;
        this._contaOrigem = contaOrigem;
        this._contaDestino = contaDestino;
    }


    public get tipo(): string {
        return this._tipo;
    }

    public get valor(): number {
        return this._valor;
    }

    public get data(): Date {
        return this._data;
    }

    public get contaOrigem(): string {
        return this._contaOrigem;
    }

    public get contaDestino(): string {
        return this._contaDestino;
    }

    public static criarTransferencia(
        contaOrigem: string, 
        contaDestino: string, 
        valor: number
    ): Transacao[] {
        const dataAtual = new Date();

        // 1. Gera a transação de DÉBITO para quem envia
        const debito = new Transacao(
            "Transferência Enviada (Débito)", 
            valor, 
            dataAtual, 
            contaOrigem, 
            contaDestino
        );

        // 2. Gera a transação de CRÉDITO para quem recebe
        const credito = new Transacao(
            "Transferência Recebida (Crédito)", 
            valor, 
            dataAtual, 
            contaOrigem, 
            contaDestino
        );

        // Retorna as duas para que o sistema as adicione nas respectivas contas
        return [debito, credito];
    }
}

