// console.log("welcome students")
// var a=10
// var b="10"
// console.log(a===b)
// var name = "Arun"
// var name =" Phani"
// name = "Vamshi"
// console.log(name)
// var name = "kumar"
// console.log(name)
// name= "arun"
// console.log(name)

// function greet () {
//     var a = "Welcome"
//     console.log(a)
// }
// console.log(a)

// if(true){
//     let c = 100
//     console.log(c)
// }
// console.log(c)
// let a = 200
// a =500

// console.log(typeof null)

// let a=10
// a +=10 
// console.log(a)
// console.log(++a)
// console.log(a)


// const a = 10 
// console.log(typeof a) 
// const b = "10"
// console.log(typeof b) 
// console.log(a===b)

// const c =30 
// const checking = c > 50 ? "yes" : "no" 
// console.log(checking)


// const age = 12
// if (age >=18) {
//     console.log("elgible to vote")
// }
// else {
//     console.log("")
// }


// const arr = [10,5,45,34,35,56,[4,5,6,8]]
// console.log(arr.push(6))
// console.log(arr)
// console.log(arr.pop())     // pop element  removes last element 
// console.log(arr.shift())  //it removes first element and return first element 
// //splice() is used to add,remove, replace elements\
// // arr.splice(start,deletecount,)

// const arr2=[10,34,5,67,89]
// arr2.splice(2,1)
// console.log(arr2)
// arr2.splice(0,2,"karthik")
// console.log(arr2)
// arr2.splice(1,0,"x")
// console.log(arr2)

// const arr3 = ["arun","vamshi","gopi","anusha"]
// console.log(arr3.includes("akhila"))
//  console.log(arr3.indexOf("akhila")) // if element not found it returns -1

//find()
const arr=[
            {
                rollno:"24AG1AO5Z7",
                 name : "gopi",
                dept :"cse"
            }
            ,
            {
                rollno : "24AG1AO5ad",
                Name : "akhila",
                dept : "cse"
            },
            {
                rollno:"24AG1AO5z2",
                name:"sriram",
                dept:"csm"
            },
            {
                rollno:"24AG1AO5z2",
                name:"janu",
                dept:"csm"
            }
        ]
        
//         // const student = arr.find(s=>s.rollno === "24AG1AO5ad")
//         // console.log(student)
//     //  arr.forEach(student => { // foreach method is used to iterate each element from array
//     //     console.log(student) 
//     //  })
//      //map() 
//      arr.map(student =>{console.log(student)})
//      const modarr = arr.map(student => student.dept)
//      console.log(modarr)
// const arrx = [10,2,3,28]
// const modarrx = arrx.map(ele => ele + 5)
// console.log(modarrx)

//filter() which returns matching elements 

let result = arr.filter(student => student.dept === "cse" )
console.log(result)
console.log(result.length)
