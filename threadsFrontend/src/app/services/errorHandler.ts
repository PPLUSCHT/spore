import { HttpErrorResponse } from "@angular/common/http"
import { of, throwError } from "rxjs";

export const errorHandler = (error: HttpErrorResponse) =>{
    if(error.status === 503 || error.status === 0){
        return of()
    }
    else{
        console.error(
            "Backend Error", error.message
        );
    }
    return throwError(() => new Error(`Something went wrong: ${error.status}`));
}