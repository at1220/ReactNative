//https://randomuser.me/api
import axios from "axios"
const SERVER_NAME = 'randomuser.me'
const urlGetUserDetail = `https://${SERVER_NAME}/api`
const getUserDeatail = async () =>{
try {
    let response = await axios.get(urlGetUserDetail)
    if(response.status != 200){
        throw 'fail request'
    }
    if(response.data.results.length > 0){
        let reponseUser = response.data.results[0]
        let user = {}
        user.dateOfBirth = new Date(reponseUser.dob.date)
        user.email =reponseUser.email ?? ''
        user.gender = reponseUser.gender ?? 'none' //gia tri mac dinh
        user.userId = `${reponseUser.id.name}${reponseUser.id.value}`
        user.address = `${reponseUser.location.state}, ${reponseUser.location.street.name}` ?? ''
        user.username = reponseUser.login.username ?? ''
        user.url =reponseUser.picture.large ?? ''
        user.phone = reponseUser.phone ?? ''
        user.registerDate =new Date( reponseUser.registered.date)
        return user
    }
    throw 'user not found'
} catch (error) {
    throw error
}
}
const login = ({email,password}) =>{

}
// many function
export default {
    getUserDeatail,
    login
}