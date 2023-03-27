import { sign } from 'jsonwebtoken'

let users = []
const generateAcessToken = (data) => sign(data, 'secret')

const getUsersByEmail = (searchEmail) => users.find(({email}) => email === searchEmail)

export const signup = (data) => {
    if (getUsersByEmail(data.email)) throw new Error ('email_existente')

    users.push(data)
    return generateAcessToken({ email: data.email })
}

export const login = (data) => {
    const user = getUsersByEmail(data.email)
    if (!user) throw new Error ('email_nao_encontrado')
    if (user.password !== data.password) throw new Error ('senha_incorreta')

    return generateAcessToken({ email: data.email })
}