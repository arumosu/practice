// /**
//  * const, let等の変数宣言
//  */
// var val1="var変数";
// console.log(val1);

// //var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// var val1="var変数を再宣言";
// // console.log(val1);

// let val2="let変数";
// console.log(val2);

// val2="let変数を上書き";
// console.log(val2)

// const val3="const変数";
// console.log(val3);

// const val4={
//   name: "asdf",
//   age: 28,
// };
// val4.adress="123"
// console.log(val4)
// const val5 =['dog','cat'];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5)
// const name ="jak";
// const age =28;
// const message = "私の名前は" + name + "です。年齢は" + age +"です。";
// console.log(message);
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str ;
// }
// console.log(func1("func1です"));
// const func2 =(str)=> {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 =(num1,num2)=> {
//   return num1+num2;
// };
// console.log(func3(10,20));
// const MYprofile ={
//   name :"jake",
//   age :28
// };
// // const message1 =`私の名前は${MYprofile.name}です。年齢は${MYprofile.age}です。`;
// // console.log(message1);
// const {name,age}=MYprofile;
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// const MyProfile =['じゃけぇ',28];
// const message3 =`名前は${MyProfile[0]}です。年齢は${MyProfile[1]}歳です。`;
// console.log(message3);
// const [name,age]= MyProfile;
// const message4 =`名前は${name}です。年齢は${age}です。`;
// console.log(message4);
// const sayHello= (name="げすと")=> console.log(`こんにちは!${name}さん`);
// // sayHello();
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2 )=> console.log(num1+num2);
// // sumFunc(arr1[0],arr1[1]);
// const arr2 =[1,2,3,4,5];
// const [num1,num2,...arr3]=arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// const arr4=[10,20];
// const arr5=[30,40];
// const arr6=[...arr4]
// console.log(arr6)
// const arr7=[...arr4,...arr5];
// console.log(arr7);
const namearr1 = ["田中", "山田", "雪山"];
for (let index = 0; index < namearr1.length; index++) {
  console.log(namearr1[index]);
}
