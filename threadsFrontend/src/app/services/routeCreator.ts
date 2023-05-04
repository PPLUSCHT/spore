import { environment } from "src/environments/environment"

export const routeCreator = (endOfURL: string): string => {
    return `${environment.API_URL}${endOfURL}`;
}

export const frontendRoute = (endOfURL: string): string => {
    return `${environment.FRONTEND_URL}${endOfURL}`
}