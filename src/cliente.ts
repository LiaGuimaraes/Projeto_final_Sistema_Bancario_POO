import { Conta } from "./conta";
import { SistemaPix } from "./SistemaPix";

export class Cliente {
    private _cpf: string;
    private _nome: string;
    private _dataNascimento: Date;
    private _email: string;
    #senha: string; 
    private _contas: Conta[] = [];
    


    constructor(
        cpf: string,
        nome: string,
        dataNascimento: Date,
        email: string,
        senha: string
    ) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._email = email;
        this.#senha = senha; 
        
        console.log(`Cliente ${this._nome} criado com sucesso!`);
    }
    
    public get cpf() : string {
        return this._cpf;   
    }

    public get nome() : string {
        return this._nome;
    }   
    
    public get dataNascimento() : Date {
        return this._dataNascimento;
    }

    public get email() : string {
        return this._email;
    }

    
    public get contas(): Conta[] {
         return this._contas;
}

    public autenticar(senhaInformada: string): boolean {
    if (senhaInformada === this.#senha) {
        console.log(`Cliente ${this._nome} autenticado com sucesso!`);
        return true;
    } else {
        console.log(`Falha na autenticação do cliente ${this._nome}.`);
        return false;
    }
}       
        
    

public adicionarConta(conta: Conta) {
    this._contas.push(conta);
}

public registrarMinhasChaves(tipo: 'cpf' | 'email', conta: Conta) {
        const valorChave = tipo === 'cpf' ? this._cpf : this._email;
        
        // Chamamos o SistemaPix para vincular esse dado a uma conta específica
        SistemaPix.cadastrarChave(valorChave, conta);
    }


public toJSON() {
    return {
        cpf: this._cpf,
        nome: this._nome,
        dataNascimento: this._dataNascimento,
        email: this._email,
        contas: this._contas.map(conta => conta.toJSON()) 
    }

}
}
