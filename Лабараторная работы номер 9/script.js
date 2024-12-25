function firstZd(){
let user={
    name:"Виктория",
    surname:"Широкогорова",
    age:"18",
    country:"Russia",
    phonenumber:"+7-(954)-123-25-90",

    sayInf() {
        alert(this.name);
        alert(this.surname);
        alert(this.age);
    }
};

user.sayInf();
}

function secondZd(){
    let order={
        date:"14.12.2024",
        sum:"8000",
        rest:"Арарат",

        sayInfo(){
            alert(this.date);
            alert(this.sum);
            alert(this.rest); 
        }
    };
order.sayInfo();
}

function thirdZd(){
    let rests={
        firstRest:"Букемген",
        secondRest:"Арарат",
        thirdRest:"Белуга",

        sayRest(){
            alert(this.firstRest);
            alert(this.secondRest);
            alert(this.thirdRest);
        }
    }
rests.sayRest();
}


function fourthZd(){
function User(name) {
    this.name = name;
}

User.prototype.sayName = function() {
    alert(this.name);
};

let member1 = new User("Виктория");
let member2 = new User("Полина");
let member3 = new User("Дария");

member1.sayName();
member2.sayName();
member3.sayName();
}
