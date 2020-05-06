import{Injectable}from "@angular/core";
@Injectable()
export class authGuards{
    canActivate():boolean{
        return confirm("Do you want to login as User")
    }
    canActivateChild():boolean{
        return confirm("Do you want to login as Owner")
    }
}