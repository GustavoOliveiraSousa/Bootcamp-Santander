const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map){
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const people = new Map();

people.set("Gustavo", "Admin");
people.set("Agatha", "user");
people.set("Paulo", "user" );
people.set("Fabiola", "Admin");

console.log(getAdmins(people));