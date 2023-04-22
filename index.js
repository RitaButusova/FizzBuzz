/*'Напишіть програму, яка виводить на екран числа від 1 до 100. При цьому замість чисел, кратних трьом, програма повинна виводити слово Fizz,
 а замість чисел, кратних п'яти – слово Buzz. Якщо число кратно п'ятнадцяти, то програма має виводити слово FizzBuzz'*/

// 1) за допомогою ітератора
const fizzBuzz = {
    from: 1,
    to: 100
}

fizzBuzz[Symbol.iterator] = function() {
    let currentNum = this.from;
    let lastNum = this.to;
    let result;

    return {
        next() {
            if (currentNum <= lastNum) {
                if (currentNum % 15 === 0) {
                    result = {value: 'FizzBuzz', done: false};
                } else if (currentNum % 3 === 0) {
                    result = {value: 'Fizz', done: false};
                } else if (currentNum % 5 === 0) {
                    result = {value: 'Buzz', done: false};
                } else {
                    result = {value: currentNum, done: false}
                }
                currentNum++;
                return result;
            }
            return {
                value: undefined,
                done: true
            }
        }
    }
}

console.log([...fizzBuzz]);

//2) за допомогою генератора

const fizzBuzz2 = {
    from: 1,
    to: 100,

    *[Symbol.iterator](){
        for(let value = this.from; value <= this.to; value++){
            let result;
            if (value % 15 === 0) {
                result = 'FizzBuzz'
            } else if (value % 3 === 0) {
                result = 'Fizz'
            } else if (value % 5 === 0) {
                result = 'Buzz'
            } else {
                result = value
            }
            yield result;
        }
    }
}

console.log([...fizzBuzz2]);