


export function useRegisterValidate(user) {
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
    console.log("USER",user, "USERFILE", user)
    if(user.password && !regex.password.test(user.password)) errors.password="ZA KROTKIE"
    if(user.repeatPassword && user.password !== user.repeatPassword) errors.repeatPassword="HASLA MUSZA BYC TAKIE SAME"
    if(user.name && !regex.name.test(user.name)) errors.name="Name has to have from 2 to 20 characters"
    if(user.surname && !regex.surname.test(user.surname)) errors.surname="Surname has to have from 2 to 30 characters"
    if(user.nickname && !regex.nickname.test(user.nickname)) errors.nickname="Nickname has to have from 2 to 15 characters"
    if(user.telephone && !regex.telephone.test(user.telephone)) errors.telephone="Telephone has to contain 9 digits"
    if(user.city && !regex.city.test(user.city)) errors.city="City has to have from 2 to 20 characters"
    if(user.country && !regex.country.test(user.country)) errors.country="Country has to have from 2 to 20 characters"
    if(user.description && !regex.description.test(user.description)) errors.description="Surname has to have from 2 to 20 characters"
    if(user.file !== 'image/jpeg') errors.file="We require .jpg files. Check your file type"

    function checkIfValidated() {
        if(user.password && user.email && user.name && user.surname && user.nickname && user.repeatPassword) {
            if(!errors.password && !errors.email && !errors.name && !errors.surname && !errors.nickname && !errors.repeatPassword)
                return true
        }
        return false
    }
  let isValidate = checkIfValidated()
    


    return { errors, isValidate }
}