// RECURSIVIDADE
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/* 5! = 5 x 4 x 3 x 2 x 1 = fatorial de  5 é 120
5! = 5 x 4! - o fatorial de um numero pode ser calculado com base de outro numero fatorial

n! = n x (n-1)!
1! = 1
*/
 
