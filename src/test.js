// const types = {
//     char: 1,
//     short: 2,
//     int: 2,
//     long: 4,
//     'long long': 8,
//     'unsigned char': 1,
//     double: 8,
// }

// function sizeof(value) {
//     if (typeof value === 'string') {
//         return types[value];
//     }
//     const { type, members } = value;
//     const sizes = members.map(sizeof);
//     if (type === 'struct') {
//         return sizes.reduce((acc, size) => acc + size, 0);
//     }
//     if (type ==='union') {
//         return Math.max(0, ...sizes);
//     }
// }


// console.log(sizeof({ // 18
//     type: "struct",
//     members: [
//       "unsigned char", // 1
//       "unsigned char", // 1
//       "double", // 8
//       {
//         type: "union",
//         members: [
//             "int", // 2
//             "long long", // 8
//         ]
//       }
//     ]
// }))

// union { // 8
//   int age; // 2
//   bool sex; // 1
//   double average; // 8 
// }

// union {

// }

// struct student { // == 33
//   char name[20]; // 20
//   int age; // 4
//   bool sex; // 1
//   double average; // 8
// }

// console.log(sizeof('char'));

// console.log(sizeof({
//     type: "struct",
//     members: [
//       "unsigned char",
//       "unsigned char",
//       "unsigned char",
//       "double",
//       "double",
//       {
//         type: "union",
//         members: [
//           "unsigned short",
//           "unsigned short",
//           "unsigned short",
//           "long long",
//           "float",
//           "float",
//           {
//             type: "struct",
//             members: ["long", "unsigned int"]
//           }
//         ]
//       },
//       "short"
//     ]
// }));

import { createStore } from 'redux';

const initialState = [
    {
      id: 0,
      liked: false,
      author: 'Elon',
    },
    {
      id: 1,
      liked: false,
      author: 'Bill',
    },
    {
      id: 2,
      liked: false,
      author: 'Elon',
    },
    {
      id: 3,
      liked: false,
      author: 'Jack',
    },
    {
      id: 4,
      liked: false,
      author: 'Bill',
    },
]

function reducer(state, action) {
    if (action.type === "ADD_MEME") {
        state.push(action.payload);
    }

    return state;
}

const store = createStore(reducer, initialState);

store.dispatch({
    type: "ADD_MEME",
    payload: {
        id: 6,
        liked: false,
        author: 'Max',
    },
})

store.dispatch({
    type: "ADD_MEME",
    payload: {
        id: 7,
        liked: true,
        author: 'Max',
    },
})

console.log(store.getState());