const credentials = localStorage.getItem("credentials");

const AuthHeaders = {
    user:`Basic ${credentials}`,
}

export default AuthHeaders