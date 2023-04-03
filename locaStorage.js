// for (let i = 0; i < localStorage.length; i++) {
//     let storedValue = localStorage.key(i);
//     console.log(`Item at ${i}: ${storedValue}`);
// }

let localS = {
    "yt-remote-device-id": "{\"data\":\"9cde12bc-d2ce-4b28-9fa5-d1b7fbc37124\",\"expiration\":1676894131256,\"creation\":1645358131256}",
    "101285380752801347634||116944711459927394653::yt-player::yt-player-lv": "{\"data\":\"{}\",\"creation\":1647240083265}",
    "yt-player-headers-readable": "{\"data\":\"true\",\"expiration\":1647950138026,\"creation\":1645358138026}",
    "ytidb::LAST_RESULT_ENTRY_KEY": "{\"data\":{\"hasSucceededOnce\":true},\"expiration\":1649832083148,\"creation\":1647240083148}",
    "yt.innertube::nextId": "{\"data\":7,\"expiration\":1647326496496,\"creation\":1647240096496}",
    "yt-remote-connected-devices": "{\"data\":\"[]\",\"expiration\":1647326483207,\"creation\":1647240083207}",
    "116944711459927394653||::yt-player::yt-player-lv": "{\"data\":\"{}\",\"creation\":1647239198152}",
    "yt.innertube::requests": "{\"data\":{},\"expiration\":1647327242361,\"creation\":1647240842361}",
    "yt-player-bandwidth": "{\"data\":\"{\\\"delay\\\":0.7468666178385416,\\\"stall\\\":0.0000036277761029042307,\\\"byterate\\\":514300.4447732766,\\\"init\\\":1645358131096.4}\",\"expiration\":1649832094840,\"creation\":1647240094840}",
    "yt-player-volume": "{\"data\":\"{\\\"volume\\\":100,\\\"muted\\\":false}\",\"expiration\":1649831134300,\"creation\":1647239134300}"
}

for (const property in localS) {
    console.log("property :: :" + property, "   :: : value = ", localS[property])
}