function setname(name){
    this.name=name;
    console.log('setname function')

}


function userdetails(name, email, id){
    setname.call(this,name)
    this.email=email
    this.id=id

}

const user1=new userdetails("buttan sarkar", "butn@gmail,cm", 45)

console.log(user1)