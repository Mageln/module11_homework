function number(x) {
  if (x <= 1 || x > 1000){
    return "Данные неверны";
  }
  for (let i = 2; i < x; i++){
    if (x % i === 0) {
      return "Составное число";
    }
  }
  return "просто число"
}
console.log(number(10));
console.log (number(3));
console.log(number(1200));