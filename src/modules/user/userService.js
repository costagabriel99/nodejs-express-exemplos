let users = []

const getUsersByEmail = (searchEmail) => users.find(({email}) => email === searchEmail)

export const signup = (data) => {
    if (getUsersByEmail(data.email)) {
        console.log ("EXISTE O EMAIL")
    } else {
        users.push(data)
    }

    return true
}