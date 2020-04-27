// -- Object literals 

// const blogs = [
//     { Title: 'Why mac & Cheese rules', likes:30 },
//     { Title: '10 things to make with marmite', likes:50 }
// ];

//console.log(blogs);

let user = {
    name: 'Sheila',
    age: 20,
    email: 'sheilavazquez2201@gmail.com',
    location: 'Chetumal',
    blogs : [
        { Title: 'Why mac & Cheese rules', likes:30 },
        { Title: '10 things to make with marmite', likes:50 }
    ],
    login(){
        console.log('The user logged in');
    },
    loguot(){
        console.log('The user logged out');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.Title, blog.likes);
        });
    }
};

user.logBlogs();

// -- Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// -- Random Numbers 

const random = Math.random();

console.log(random);
console.log(Math.round(random*100));

// -- Primitive Values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// -- Reference Values

const userOne = { name: 'Sheila', age: 20};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name= 'Jhoedy';
console.log(userOne, userTwo);
