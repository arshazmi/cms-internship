export class UserModel{
    constructor(
        public fname:string,
        public lname:string,
        public username:string,
        public email:string,
        public password:string,
        public _id:string,
        public permission :string
    ){
    }
}