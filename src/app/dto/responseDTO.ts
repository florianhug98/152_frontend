import {ErrorMessageDTO} from "./errorMessageDTO";

export interface ResponseDTO<Type> {
  data: Type;
  errorMessage: ErrorMessageDTO;
}
