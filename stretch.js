function addSix(num) {
    let baseValue = 6;
    function add () {
        return baseValue + num;
    }
  return add();
}
console.log(addSix(10));
console.log(addSix(21));