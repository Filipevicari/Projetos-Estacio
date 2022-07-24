class Forca {

        _palavra;
        letrasChutadas = [];
        fakeword = [];
        vidas = 6;
        status = 1; // 1 - aguardando chute 2 - ganhou 3= perdeu
        contadorLetrasAcertadas = 0;


        constructor(palavra) {
            this._palavra = palavra;
            this.criaPalavraFake();
                     
        }

        //adiciona o "_" a cada letra correspondente da palavra


        criaPalavraFake() {
            let palavraArray = this.palavra.split ('');

            palavraArray.forEach(element, index) => {
                this.fakeword.push('');
            }
        }

        chutar(letra) {
            // transforma a palavra em uma lista de letras
            let palavraArray = this.palavra.split('');
            // verifica se a letra existe na palavra
            if (palavraArray.lenght > 0) {
                    palavraArray.forEach((element, index) => {
                        if (element == letra) {
                            this.fakeword[index] = element;
                            this.contadorLetrasAcertadas++;

                        }
                    });
            }
        }
   
         //identifica letras erradas e atualiza status
            //Se indexof retornar -1 não encontrou a letra e perde uma vida




        let existeLetra = palavraArray.indexof(letra);
        if (existeLetra == -1) {
            this.letrasChutadas.push(letra);
            if (this.vidas > 0) {
                this.vidas--;
            }
            else {
                this.status = 3;
            }
        }
    // valida se acertou todas as letras e atualiza status
    if (palavraArray.lenght == this.contadorLetrasAcertadas && this.vidas > 0) {
        this.status = 2;
    }


buscarEstado() {
    switch(this.status) {
        case 1: return "aguardando chute..."
        case 2: return "ganhou"
        case 3: return "perdeu"
    }
}
//Possiveis valores: "perdeu","aguardando chute" ou "ganhou"


  buscarEstado() { 
    switch (this.status)
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas // Deve conter todas as letras chutadas
          vidas: this.vidas // Quantidade de vidas restantes
          palavra: this.fakeword.join(' ') // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
