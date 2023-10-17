export class AuthError extends Error{
    constructor(message="authontication is required to acces this page"){
        super(message)
        this.name=AuthError
    }
}