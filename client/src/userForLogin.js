const user = {
    username:localStorage.getItem("name"),
    password:localStorage.getItem("password")
}

const admin = {
    username:"admin",
    password:"admin_password"
}

const credentials = user.username+":"+user.password
const adminCredentials = admin.username+":"+admin.password

const encryptedCredentials = btoa(credentials)
const encryptedAdminCredentials = btoa(adminCredentials)

const AuthHeaders = {
    user:`Basic ${encryptedCredentials}`,
    admin:`Basic ${encryptedAdminCredentials}`
}

export default AuthHeaders