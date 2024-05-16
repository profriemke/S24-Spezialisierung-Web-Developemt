import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash' 

export default class UsersController {
    public async loginForm({ view }: HttpContext) {

        return view.render('pages/login')
    }
        public async loginDo({ request, response, session }: HttpContext) {
            const login = request.input('login')
            const password = request.input('password')
            const user = await User.findBy('login', login)
            if(!user){
                console.log('User not found')
                return response.redirect().toPath('/login')
            }
            if(!await hash.verify(user.password, password)){
                console.log('Password wrong')
                return response.redirect().toPath('/login')
            }
        session.put('login', login)
         return response.redirect().toPath('/')
    }
}