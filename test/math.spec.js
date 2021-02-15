const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
    /* hooks é uma forma de executar um determinado trecho de codigo sempre antes
        de cada teste sem a necessidade de repetir os codigos
    */
   beforeEach(function () {
      value =0; 
   });

    it('Sum two number',function(){ //comportamento esperado
        const math = new Math();
        value = 5;
        console.log("Value = " + value);
        assert.strictEqual(math.sum(5,5),10);
    }); 

// para testes em funções assincronas utilizar o done
    it('Sum two number assync',function(done){ //comportamento esperado
        const math = new Math(); 
        console.log("Value ao executar a função hooks beforeEach = " + value); // para verificar hooks
        this.timeout(3000); //opcional para requisições com mais de 2000ms
        math.sumAssync(5,5, value => {
            assert.strictEqual(value,10);
            done();
        });
    }); 
// adicionando testes pendentes de ecrita
it('Multiply numbers');
// utilizando o "it.only" voce forçar o mocha a executar apenas um teste
// utilizando o "it.skip" voce forçar o mocha a IGNORAR o teste


});
