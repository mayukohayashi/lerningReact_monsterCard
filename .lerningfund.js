import {
  getQueriesForElement
} from "@testing-library/dom"
import {
  getHeapCodeStatistics
} from "v8"
import {
  resolve
} from "dns"

/* eslint-disable */

// map
const myArray = [1, 2, 3, 4, 5]
undefined

myArray.map(el => el * 3)
  (5)[3, 6, 9, 12, 15]

myArray.map(() => 'b')
  (5)["b", "b", "b", "b", "b"]


// promises
getQueriesForElement('twitter/mayuko', (user, error) => {
  if (error) {
    throw (error)
  }

  const userId = user.id

  getFriend(userId, (friends, error) => {
    if (error) {
      throw (error)
    };

    const john = friends.find()

    getPosts(john, (posts, error) => {
      if (error) {
        throw (error)
      }

      const recentPost = posts[0];

      getCommentsForPost(recentPost, (comments, error) => {
        if (error) {
          throw (error)
        }

        displayComments(comments);
      })
    })
  })
})

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I got it');
    }, 1000);
  } else {
    reject('I have failed')
  }
})

myPromise
  .then(value => console.log(value)
    .catch(rejectValue => console.log(rejectValue)))


// filter()
const myArray = [1, 3, 5, 7, 9, 10]
undefined

myArray.filter(el => el > 5)
  (3)[7, 9, 10]

myArray.filter(el => el = true)
  (6)[1, 3, 5, 7, 9, 10]

myArray
  (6)[1, 3, 5, 7, 9, 10]


// scope JS THIS!
const newFunc = () => console.log(this)
undefined

newFunc()
VM2238: 1 Window {
  parent: Window,
  postMessage: ƒ,
  blur: ƒ,
  focus: ƒ,
  close: ƒ,
  …
}
undefined


//includes()
const myArray = [1, 2, 3, 4, 5, 6, 7]
undefined
myArray.includes(3)
true
myArray.includes(9)
false
const newArray = [{
  id: 1
}, {
  id: 2
}, {
  id: 3
}]
undefined
newArray(1)
VM2495: 1 Uncaught TypeError: newArray is not a
function
at < anonymous >: 1: 1(anonymous) @ VM2495: 1
newArray[1] {
  id: 2
}
myArray.includes(2, 4)
false
newArray.includes({
  id: 2
})
false
var b = 3
undefined
var c = b
undefined
c
3
var b = 5
undefined
c
3
const obj1 = {
  id: 1
}
undefined
const obj2 = {
  id: 1
}
undefined
obj1 === obj2
false
const obj3 = obj2
undefined
obj2 === obj3
true
obj2.id = 17
17
obj2 {
  id: 17
}
obj3 {
  id: 17
}
const o1 = {
  id: 1
}
undefined
const o2 = {
  id: 2
}
undefined
const o3 = {
  id: 3
}
undefined
const myNewArray = [o1, o2, o3]
undefined
myNewArray
  (3)[{
    …}, {
    …}, {
    …}] 0: {
    id: 1
  }
1: {
  id: 2
}
2: {
  id: 3
}
length: 3 __proto__: Array(0)
myNewArray.includes(o1)
true



//Async and Await
fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const firstUser = user[0];
    console.log(firstUser);
    return fetch(
      'http://jsonplaceholder.typicode.com/posts?userId' + firstUser.id
    );
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));



const myAsyncFunction = async () => {
  try {

    const userResponse = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json();
    const secondUser = user[1];
    console.log(secondUser);
    const postsResponse = await fetch(
      'http://jsonplaceholder.typicode.com/posts?userId' + secondUser.id
    );

    const posts = await postsResponse.json();
    console.log(posts);

  } catch (err) {
    console.log('there is an error')
  }
}


// find()
const myArray = [1, 3, 5, 7, 9]
undefined

myArray.find(el => el === 5)
5

myArray.find(el => el > 4)
5

const peopleArray = [{
  id: 4
}, {
  id: 7
}, {
  id: 9
}]
undefined

peopleArray.find(person => person.id === 4) {
  id: 4
}


// reduce()
const myArray = [1,2,3,4,5,6,7]
undefined

myArray
(7) [1, 2, 3, 4, 5, 6, 7]

myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 0)
28

myArray.reduce((accumulator, currentElement) => accumulator + currentElement)
28

myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 10)
38