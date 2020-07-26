let square = (number) => number*number,
    inc = (number) => ++number,
    print = (number) => console.log(number);


function compose(...fns) {
  return function(num) {
    fns.reduceRight((acc, fn) => {
      return fn(acc)
    }, num)
  
  //   const reverseFns = fns.reverse() 
  //   let res = num
  //   for (func of reverseFns) {
  //     res = func(res)
  //   }
  // }
} 
}


compose(print, square, inc)(10) // 121



// const str = "bar.baz.foo:111222",
//   obj = {
//     bar: {
//       baz: {
//         foo: 333444,
//         foo2: 674654,
//       },
//     },
//   };

// function replaceInObj(obj, str) {
//   const [pathString, value] = str.split(":");
//   const [firstPath, ...otherPath] = pathString.split(".");

//   if (otherPath.length === 0) {
//     return {...obj, [firstPath]: value }
//   }

//   return {...obj, [firstPath]: replaceInObj(obj[firstPath], `${otherPath.join('.')}:${value}`)}
// }

// console.log(replaceInObj(obj, str));

// // function replaceInObj(obj, str) {
// //   const [pathString, value] = str.split(":");
// //   const pathList = pathString.split(".");
// //   let res = Object.assign({}, obj);

// //   let tempPath = res;

// //   pathList.forEach((e, i) => {
// //     if (i === pathList.length - 1) {
// //       tempPath[e] = value;
// //     } else {
// //       tempPath = {...tempPath[e]};
// //     }
// //   });

  
// //   return res;
// }
