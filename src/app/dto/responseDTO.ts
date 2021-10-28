import { ErrorMessageDTO } from "./errorMessageDTO";
import { SummonerDataDTO } from "./summonerDataDTO";

export interface ResponseDTO {
  data: SummonerDataDTO;
  errorMessage: ErrorMessageDTO;
}
