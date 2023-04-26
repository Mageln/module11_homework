function numbervalued(f,t){
  let current = f;
  let timerId = setInterval(function(){
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  },1000)
}

numbervalued (1, 15);