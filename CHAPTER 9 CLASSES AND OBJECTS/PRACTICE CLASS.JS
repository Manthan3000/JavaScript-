// Q 1. YOU ARE CREATING CLG WEBSITE . CREATE A CLASS USER WITH 2
//PROPERTIES NAME & EMAIL METHODE CALLED VIEWDATA() THAT ALLOW USER
//TO  VIEW WEBSITE
let data = "MMCOE";

class user {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
  viewdata() {
    console.log(" web site data =", data);
  }
}
class ADMIN extends user {
  editdata() {
    data = "some value";
  }
}

let stu1 = new user("manthan", "mthanovhal@mail");
// console.log(stu1.viewdata);
let stu2 = new user("avishkar", "avishkar@mail");
// console.log(stu2.viewdata);
let tech1 = new user("Vaishali", " vaishale.@mail");
// console.log(tech1.viewdata);

// Q 2  ADMIN CLASS CHANGE VALUE

// class ADMIN extends user{
//     editdata() {
//         data = "some value"
//     }
// }
