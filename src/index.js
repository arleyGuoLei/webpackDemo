require('./style.css');
require('./test.stylus');

console.log('hello, webpack');

const fn = () => {
  console.log('fn...');
}

fn();

class A{
  a = 1
}

const a = new A();

a.a = 2

console.log(a)

console.log($)