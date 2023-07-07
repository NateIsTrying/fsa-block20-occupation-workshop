const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'FREELANCERS';
    root.appendChild(h1);

    //place for loop within function
    const usersForLoop = (arr) => {
        const ul = document.createElement('ul');
        root.appendChild(ul);

        // Create for loop
        for(let i = 0; i < arr.length; i++){  
            //create li for within ul
            const li = document.createElement('li');               
            // create li elements 
            ul.appendChild(li);
                // Append those elements to document.
            li.innerText = `Name: ${arr[i].name}, Age: ${arr[i].age}, Occupation: ${arr[i].occupation}.`;
        }
    }
    return usersForLoop(users);
}

//call the main function
main();

document.body.style.backgroundColor = '#007500';
document.querySelector('h1').style.marginLeft = '40%';
document.querySelector('ul').style.marginLeft = '35%';

// document.querySelectorAll('li').style.paddingTop = '10px 0';
const liElements = document.querySelectorAll('li');
liElements.forEach((li) => {
    li.style.paddingTop = '20px';
});

//secondary objective: save pictures to DOM with 