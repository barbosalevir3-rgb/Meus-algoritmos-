let produto = parseFloat(prompt("produto"))
let desconto = parseFloat(prompt("desconto"))
let valorfinal = produto - (produto*(desconto/100))
alert(valorfinal.toFixed(3)) 