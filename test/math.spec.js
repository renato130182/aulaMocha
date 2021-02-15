const assert = require('assert');
const expect = require('chai').expect;

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
        math.sumAssync(5,5, passValue => {
            //assert.strictEqual(value,10);
            expect(passValue).to.equal(10);  // utilizando chai.expect
            done();
        });
    }); 
// adicionando testes pendentes de ecrita
it('Multiply numbers');
// utilizando o "it.only" voce forçar o mocha a executar apenas um teste
// utilizando o "it.skip" voce forçar o mocha a IGNORAR o teste

//usando expect para validar a existencia de propriedades em objetos

it('Validate name in object', function () {
        const obj = {
            name: 'Renato Soares'
        };
        const obj2 = obj;
        const obj3 = {
            name: 'Renato Soares'
        };
        expect(obj).to.have.property('name'); // verifica a existencia da propriedade
        expect(obj).to.have.property('name').equal('Renato Soares'); // verifica o valor da propriedade
        expect(obj).to.equal(obj2); // comparando objetos apenas em objetos clonados
        expect(obj).to.deep.equal(obj3); // comparando objetos de forma completa / profunda
    });
});
