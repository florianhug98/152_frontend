export class Constants {
  static readonly BACKEND_BASE_URL = "http://localhost:9900";
  static readonly BACKEND_SUMMONER_URL = "/stats/summoner";
  static readonly BACKEND_CHAMP_URL = "/data/champion";

  static readonly CDN_BASE_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1";
  static readonly CDN_PROFILE_ICON_URL = "/profile-icons";
  static readonly CDN_CHAMP_ICON_URL = "/champion-icons";
  static readonly CDN_ALL_CHAMP_URL = "/champion-summary.json";

  static readonly OPGG_RANK_DEFAULT_ICON_URL = "https://opgg-static.akamaized.net/images/medals/default.png";

  static readonly SOLO_QUEUE_NAME = "RANKED_SOLO_5x5";
  static readonly FLEX_QUEUE_NAME = "RANKED_FLEX_5x5";
}
