var fibonnaci = (num) => {
  let anterior = 0;
  let proximo = 1;
  let i = 0;
  while (proximo <= num) {
    const temporario = anterior + proximo;
    anterior = proximo;
    proximo = temporario;
    console.log(anterior);
  }
  if (anterior == num)
    return console.log(`O numero ${num} pertence a sequencia fibonacci`);
  return console.log(`O numero ${num} não pertence a sequencia fibonacci`);
};

fibonnaci(4181); // true
// fibonnaci(4182); //false
