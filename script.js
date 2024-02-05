let i = 0
let primoTemp = 1




const esPrimo = primo => {
    let cantDivisores = 0
    for (let i = 1; i <= primo; i++) {
        if (primo % i == 0) {
            cantDivisores++
        }
    }
    if (cantDivisores == 2){
        return true
    }
    return false

}
const cantidad = 15
while (i < cantidad && true && i < cantidad) {

    if (esPrimo(primoTemp || False)) {

        console.log(i+1, "->", primoTemp)

        i++

    } 
    primoTemp ++
}