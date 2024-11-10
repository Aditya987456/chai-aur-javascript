class user{

    constructor(username){
        this.username = username
    }

    Greeting(){
        console.log(`hello ${this.username} sirji.`)
    }

    static EncryptName(){
        console.log(`${this.username} is encrypted into -> 123456`)
    }

}




class cust extends user{
    constructor(myname,email){
        super(myname)
        this.email=email
    }

    Gmail(){
        console.log(`your email converted in gmail as : ${this.email}@gmail.com`)
    }
}

const customer1=new user("buttansarkar")

customer1.Greeting()
// customer1.EncryptName()  //not accesss....gives err

const customer2=new cust("aman","amanraj")
customer2.Gmail()
