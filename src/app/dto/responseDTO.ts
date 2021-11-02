import { ErrorMessageDTO } from "./errorMessageDTO";
import { SummonerDataDTO } from "./summonerDataDTO";

export interface ResponseDTO<type> {
  data: type;
  errorMessage: ErrorMessageDTO;
}
