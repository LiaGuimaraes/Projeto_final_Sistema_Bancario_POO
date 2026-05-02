import { Conta } from "./conta";

export class SistemaPix {
    
    private static _baseDeChaves = new Map<string, Conta>();

    public static cadastrarChave(chave: string, conta: Conta): void {
        if (this._baseDeChaves.has(chave)) {
            console.log(`A chave ${chave} já está em uso por outra conta.`);
            return;
        }
        this._baseDeChaves.set(chave, conta);
        console.log(`Sucesso: Chave ${chave} vinculada à conta ${conta.numero}`);
    }

    public static buscarConta(chave: string): Conta | undefined {
        return this._baseDeChaves.get(chave);
    }
}