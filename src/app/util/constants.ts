export class Constants {
  static readonly BACKEND_BASE_URL = "http://localhost:9900/stats";
  static readonly BACKEND_SUMMONER_URL = "/summoner";
  static readonly BACKEND_LEAGUE_URL = "/league";

  static readonly CDN_BASE_URL = "http://ddragon.leagueoflegends.com/cdn";
  static readonly CDN_VERSION = "/11.19.1";
  static readonly CDN_PROFILE_ICON_URL = "/img/profileicon";

  static readonly ICON_DEFAULT_URL =
    "https://opgg-static.akamaized.net/images/medals/default.png";

  static readonly SOLO_QUEUE = "RANKED_SOLO_5x5";
  static readonly FLEX_QUEUE = "RANKED_FLEX_5x5";

  static readonly HTTP_OK = 200;
  static readonly HTTP_NOT_FOUND = 404;
  static readonly HTTP_SERVER_ERROR = 500;
  static readonly HTTP_TOO_MANY_REQUESTS = 429;
}
