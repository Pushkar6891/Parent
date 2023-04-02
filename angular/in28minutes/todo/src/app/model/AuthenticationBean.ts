export class AuthenticationBean {

    public message: string;

    constructor(
        message: string
    ) {
        this.message = message;
    }

    public setMessage(message: string) {
        this.message = message;
    }

    public getMessage() {
        return this.message;
    }

}