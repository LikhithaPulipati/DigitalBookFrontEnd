import { CredentialPayload } from "./credential.payload";

export interface JwtResponse{
    credentialpayload:CredentialPayload,
    jwtToken:string
}