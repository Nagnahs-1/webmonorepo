// // src/a.js

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  say = (who: string) => {
    // God：上帝 / god：神
    const firstChar = who.charAt(0).toLocaleUpperCase()
    console.log(`${firstChar}${who.slice(1)} bless you`)
  }
}

// let DPZ = new Person("DPZ");
// let 主 = 6; // 6 | 'god' | 'Trisolaran' (三体人)
// DPZ.say(主);


// 一种是使用 js 方法在运行时抛出错误
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   say = (who: any) => {
//     if (!isNaN(who)) throw new Error("主不等于" + who);
//     const firstChar = who.charAt(0).toLocaleUpperCase();
//     console.log(`${firstChar}${who.slice(1)} bless you`);
//   };
// }

// 定义 TS 类型
type God = 'God' | 'god' | '主' | 'Trisolaran'
const DPZ = new Person('DPZ')
const 主: God = 'God' // 6 | 'god' | 'Trisolaran' (三体人)
DPZ.say(主)

