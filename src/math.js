class Math {
    sum = function sum(a , b) {
        return a + b ; 
    }

    sumAssync(a,b,callback) {
        setTimeout(() => {
            callback(a+b);
        },25);
    }

    printSum(req,res,a,b){
        res.load('index',a+b);
    }    
}


module.exports = Math;