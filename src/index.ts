import { Stack } from './data_structures/stack';

let stack = new Stack<string>();
stack.push('1');
stack.push('2');
stack.push('3');
let counts=stack.size();
for (let i = 0; i < counts; i++) {
    console.log(stack.pop());
}


//console.log('hey there!')