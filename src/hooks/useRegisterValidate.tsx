//Function gets all user input data from register and check if there are valid.
//Return errors messages and true if inputs are valid or false if not


export function useRegisterValidate({ email, file, password,repeatPassword , name, surname, nickname, telephone, city, country, description}: any) {
    let errors = {
        email : '',
        password: '',
        repeatPassword:"",
        name:"",
        surname:"",
        nickname:"",
        telephone:"",
        city:"",
        country:"",
        description:"",
        file:""

    }
    let regex = {
        email : '',
        password: /^\w{6,}$/,
        repeatPassword:"",
        name:/^\w{2,20}$/,
        surname:/^\w{2,30}$/,
        nickname:/^\w{2,15}$/,
        telephone:/^\d{9}$/,
        city:/^\w{2,20}$/,
        country:/^\w{2,20}$/,
        description:/^\w{5,140}$/
    }
    //Password length validation
    if(password && !regex.password.test(password)) errors.password="ZA KROTKIE"
    //Check if passwords are the same
    if(repeatPassword && password !== repeatPassword) errors.repeatPassword="HASLA MUSZA BYC TAKIE SAME"
    //Name validation
    if(name && !regex.name.test(name)) errors.name="Name has to have from 2 to 20 characters"
    //Surname validation
    if(surname && !regex.surname.test(surname)) errors.surname="Surname has to have from 2 to 30 characters"
    //Nickname validation
    if(nickname && !regex.nickname.test(nickname)) errors.nickname="Nickname has to have from 2 to 15 characters"
    //Telephone validation
    if(telephone && !regex.telephone.test(telephone)) errors.telephone="Telephone has to contain 9 digits"
    //City validation
    if(city && !regex.city.test(city)) errors.city="City has to have from 2 to 20 characters"
    //Country validation
    if(country && !regex.country.test(country)) errors.country="Country has to have from 2 to 20 characters"
    //Description validation
    if(description && !regex.description.test(description)) errors.description="Surname has to have from 2 to 20 characters"
    //Image file validation
    if(file !== 'image/jpeg') errors.file="We require .jpg files. Check your file type"

    function checkIfValidated(): boolean {
        // check if every input is valid and if there is no error
        if(password && email && name && surname && nickname && repeatPassword) {
            if(!errors.password && !errors.email && !errors.name && !errors.surname && !errors.nickname && !errors.repeatPassword)
                return true
        }
        return false
    }
  let isValidate = checkIfValidated()
    

//Return errors(an object) and isValidate(boolean) 
    return { errors, isValidate }
}