export default class PersonalData {

    static get fullname()
    {
        return "Leonardo Daniel Vivas"
    }

    static get descriptions(){
        return `Hola mi nombre es ${this.fullname}`;
    }
}

