class Pessoa{
    constructor(pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }

    get Nome() { return this.nome};
    set Nome(pNome){ this.nome = pNome};

    get Endereco() { return this.endereco};
    set Endereco(pEndereco){ this.endereco = pEndereco};

    toString(){
        return `Nome: ${this.nome} \nEndereco: ${this.endereco}`; //interpolação
        //return "Nome: "+this.nome + "\nEndereco: " + this.endereco; //concatenação
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pDtNascimento){
        super(pNome, pEndereco);
        this.cpf = pCpf;
        this.dtNascimento = pDtNascimento;
    }

    get Cpf() { return this.cpf};
    set Cpf(pCpf){ this.cpf = pCpf};

    get DtNascimento() { return this.dtNascimento};
    set DtNascimento(pDtNascimento){ this.dtNascimento = pDtNascimento};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCpf: ${this.cpf} \nNascimento: ${this.dtNascimento}`;
        return retorno;
    } 
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazaoSocial){
        super(pNome, pEndereco);
        this.cnpj = pCnpj;
        this.razaoSocial = pRazaoSocial;
    }

    get Cnpj() { return this.cnpj};
    set Cnpj(pCnpj){ this.cnpj = pCnpj};

    get RazaoSocial() { return this.razaoSocial};
    set RazaoSocial(pRazaoSocial){ this.razaoSocial = pRazaoSocial};

    toString(){
        let retorno = super.toString();
        retorno = retorno + `\nCnpj: ${this.cnpj} \nRazao Social: ${this.razaoSocial}`;
        return retorno;
    } 
}

var pessoa = new Pessoa("Paulo", "Isabel bueno");
console.log(pessoa.toString());

var fisica = new Fisica("Eduardo", "Avenida do Contorno", "07756774689", "14/01/1986");
console.log(fisica.toString());

var juridica = new Juridica("Mega Mais", "Avenida Cristiano Machado","37.002.222/0001-45","Comercio de Utencilios");
console.log(juridica.toString());

