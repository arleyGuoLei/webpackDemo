require('./style.css');
require('./test.stylus');

import avatar from './avatar.gif';
const img = new Image();
img.src = avatar;
document.body.append(img);

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