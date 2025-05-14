let users = [
    {name:"Peter", age: 15},
    {name:"Ann", age: 12},
    {name:"Dennis", age: 18},
    {name:"Max", age: 67}

];

const userFilter = users.filter(user => {
    return user.age ===15 && user.name === "Peter";
});

console.log(userFilter);

 


