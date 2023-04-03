const bot = require("puppeteer");
const useProxy = require('puppeteer-page-proxy');

const {Person} = require("./Personality.js");


// Use TimeZone according to Proxy Location
// Use Premium & residential Proxy For Safetly
// Use Email & Name MataData if Required
// Use Device Screen Revolution according to User Agent (if you use iphone 14 User Agent then use iphone 14 Screen Resolution)

// You can use 10 Person() defults, but You can Add Unlimited new Person() Like P1 P2....Pn

// this P0 is Only Sample For Understanding!
let P0 = new Person({
    "tZ":"Africa/Lagos", 
    "proxy":"", 
    "cookie":[],
    "email":"",
    "name":"",
    "device":{
        "UA":"",
        "screen":{width: 00, height: 00},
    } 
});

let P1 = new Person({
    "tZ":"Africa/Lagos", 
    "proxy":"socks://4aLyI71aB:4wkyb5d5ii@syd.socks.ipvanish.com:1080", 
    "cookie":[
        {
          "name": "HSID",
          "value": "AxqP_qWVsZ5qYqzhT",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142851,
          "httpOnly": true,
          "secure": false
        },
        {
          "name": "SSID",
          "value": "AsEvGCMjxTUUUPU8b",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142874,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "APISID",
          "value": "papZzsGH_w1uy5tr/AQHn70OwtkL9TLbsi",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142895,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "SAPISID",
          "value": "ISpnPvxX6YCE4RTg/AWJ1DFkmvgrMNWoNm",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142917,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-1PAPISID",
          "value": "ISpnPvxX6YCE4RTg/AWJ1DFkmvgrMNWoNm",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142938,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-3PAPISID",
          "value": "ISpnPvxX6YCE4RTg/AWJ1DFkmvgrMNWoNm",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.14296,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "VISITOR_INFO1_LIVE",
          "value": "X-rv_0um174",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1678207758.340949,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "PREF",
          "value": "tz=Asia.Calcutta",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136182.475339,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "SID",
          "value": "PQgydUwXgFBX0aWeKESREE9udS-pwICfr7Z1QNFcwXxnpWdMHEZfYtCYz3VUxzhHTiOjOw.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142737,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSID",
          "value": "PQgydUwXgFBX0aWeKESREE9udS-pwICfr7Z1QNFcwXxnpWdMhuGGyrSHHOmtQVcIpIFdOQ.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142793,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSID",
          "value": "PQgydUwXgFBX0aWeKESREE9udS-pwICfr7Z1QNFcwXxnpWdMxyyR9qnWPXKhujA3Ocz8xg.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136080.142826,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "YSC",
          "value": "c6qMuOkq24I",
          "domain": ".youtube.com",
          "path": "/",
          "expires": -1,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "LOGIN_INFO",
          "value": "AFmmF2swRgIhAN932nHD5viK72nk0u3NXtOm_iuL1lOBThvSiPxWm2dhAiEAzSpLOWhHHIJVszlO2hRnjC7FcN9po7b4f1WzJzVBm9I:QUQ3MjNmem5RTVd2RXYyQnJWRnJzRmxfT19tTkRxSE4wbEMycUx1ZEFPXzhvcllXVkpQQkxTeXlzSmJlNTRnRDdqMThlbEhEekJMblZzcVM2c0YtRXhSRllRc1FoMDNVRUF1VzF1TkM4R09oV0NGdGdCLXZuLUdpcXROVFUtdTVpczZFRnBwUERlMVVwQktZalVjUUhMTTBQeXZkS1g2STd3",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136170.628692,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "SIDCC",
          "value": "AEf-XMSE-RbZV4PAFzPCQWmKO190wVs-AbS5IV0isV1_-rAU2wgoViSnkAsueMt_erxj-1ZHizQ",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112190.981158,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSIDCC",
          "value": "AEf-XMRWAq3tJyhWa6ePthoHtExcPOMlACANBNNSJ2eYbA5kiScnQIFG9NmnABfr7q4P3JU_Ghw",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112190.981311,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSIDCC",
          "value": "AEf-XMQ6kwh_yMgEq8J4t8O9c8w3Qz2KJMVEBtvHpcZD9Q-ZwZBIklWqYXTmdqMyr_4mYgzMwA",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112190.981399,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "CONSISTENCY",
          "value": "APAR8nseyo8lPgOKInn0RHmdnPCyRtQdxLxpaSGomk67bG2YkBDGysPAl3lH74fbF3L_Wi6kkjkZEa_JvQD2qTXA4twvmjqpjwWrUytFQyfK1T_F80HFFoQLX4JTWK5OQUxk205IYFs5f8vjUqCqrR7mSh31KNaNzSqabS3JJqUzTPYce8U2KBhJalj56t7nPdJCjzLdCLD1AH1q",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1665576791,
          "httpOnly": false,
          "secure": true
        }
      ],
    "name":"Shiva Sharma",
    "device":{
        "UA":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1",
        "screen":{width: 828, height: 1792},
    } 
});

let P2 = new Person({
    "tZ":"Africa/Lagos",
    "proxy":"socks://4aLyI71aB:4wkyb5d5ii@tor.socks.ipvanish.com:1080",
    "cookie":[
        {
          "name": "HSID",
          "value": "Ab77wzrBV9CD0orG4",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.532372,
          "httpOnly": true,
          "secure": false
        },
        {
          "name": "SSID",
          "value": "AsFuKCJpyiWwfcarO",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.532435,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "APISID",
          "value": "qXXx6tuebPumW-IX/AjF_Tat-O0xNu0viR",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.532494,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "SAPISID",
          "value": "unJkelvlZLCuiJLW/AS_z0uZEILqaPZy7I",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.532552,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-1PAPISID",
          "value": "unJkelvlZLCuiJLW/AS_z0uZEILqaPZy7I",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.532611,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-3PAPISID",
          "value": "unJkelvlZLCuiJLW/AS_z0uZEILqaPZy7I",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792829.553548,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "VISITOR_INFO1_LIVE",
          "value": "SnGXx3bfx1g",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1678207955.212162,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "PREF",
          "value": "tz=Asia.Calcutta",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136325.65179,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "SID",
          "value": "OQhhixtHCC_kZ-b4c_thnVtBv3xPkyu50Ye4x7y3uKU4faOEL93lxbWdhrQePEjPaiE9cA.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.531801,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSID",
          "value": "OQhhixtHCC_kZ-b4c_thnVtBv3xPkyu50Ye4x7y3uKU4faOEqQTEojzcLfG7xjtBi8gDMw.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792822.531941,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSID",
          "value": "OQhhixtHCC_kZ-b4c_thnVtBv3xPkyu50Ye4x7y3uKU4faOEy9TYZSeLc1Zj2eEgdITEjA.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792829.553429,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "YSC",
          "value": "CjkYPywfXso",
          "domain": ".youtube.com",
          "path": "/",
          "expires": -1,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "LOGIN_INFO",
          "value": "AFmmF2swRQIhAPIGkNDDryjs7NAHEX8VUsgIBMhxWaqutysm8i0fbGd-AiApTbdDuKuNP697rm3SG_5bhA-HSiWaOTEstyI-ZObCSg:QUQ3MjNmei12aUtUamFnejQwQ0ZZNklLR1EwYjBQMVljSWswcTdXMUFIY01adVVCRElYRndydDhBTHRVaVhRUWMtUElYNktTNDY0WmwwZkhaZmFsQ3F2VC1xT1NZbW9hdWNJZmFmdS1TU2tYRnFpWWt3T0ZCSUZQNjltd1pHeFNtOXFJOGdaVjJlc3ppd1BEelpDSkpTZVB3elJsZ0g0RHBR",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136311.739852,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "SIDCC",
          "value": "AEf-XMQFFQbBpcjQuXnisJ3lBggDqcfX6Ku9WLMTqV-8JhXq-lz61v_8oHoWq8JRVrjqZyvUkGU",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112326.190287,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSIDCC",
          "value": "AEf-XMQt7_Iv1Skw1n8nFWAX2_r1-WnNJI9wZDONPirmSMgKCw0mXWGawHZAyARbGm8h1cEa7A",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112326.190371,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSIDCC",
          "value": "AEf-XMTEnVO3Uepy9pdMjN_VX5Le4Rne9lOQsqEYHP6h-ythpIchf_WBOChh9A1uNF1nnjRBrg",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112326.190454,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "CONSISTENCY",
          "value": "APAR8nuWOsZr2Upuzhx6047IkHgC2IMUBiC-ISOsf0WQMg6bi4-7YZWBbDin2XFcmxwNc1SmsG4y8K-1vQtx73U_zkj3sxa1KF27-_6EZJH7OmrCt2ah6RrHTVlF2uqEnpjHkAdTFxljyVkGjKfq38Nr2EI-srt1m3K5Fg6ms_gCNLNsbUOOu5HP6H4c5D_BLc0GxGEv",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1665576926,
          "httpOnly": false,
          "secure": true
        }
      ],
    "name":"Shiv Patel",
    "device":{
        "UA":"Mozilla/5.0 (iPhone12,1; U; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/15E148 Safari/602.1",
        "screen":{width: 828, height: 1792},
    } 
});

let P3 = new Person({
    "tZ":"Africa/Lagos",
    "proxy":"socks://4aLyI71aB:4wkyb5d5ii@par.socks.ipvanish.com:1080",
    "cookie":[
        {
          "name": "HSID",
          "value": "A9AEdLx21za3ga32H",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167589,
          "httpOnly": true,
          "secure": false
        },
        {
          "name": "SSID",
          "value": "AHEGUDAHZUpudcTMD",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167685,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "APISID",
          "value": "kc__7nlDNZhHjWTy/AG5QhJi4bBVWSZQ-P",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167756,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "SAPISID",
          "value": "pZVgCb-1wMf8_M1e/AuKEBFZvQJN7M85gw",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167826,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-1PAPISID",
          "value": "pZVgCb-1wMf8_M1e/AuKEBFZvQJN7M85gw",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167921,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-3PAPISID",
          "value": "pZVgCb-1wMf8_M1e/AuKEBFZvQJN7M85gw",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.168002,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "VISITOR_INFO1_LIVE",
          "value": "TX40NFKz0l0",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1678208073.293877,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "PREF",
          "value": "tz=Asia.Calcutta",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136590.646692,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "SID",
          "value": "OQhae07lyRAn7KSyLo9n5FwPITHOgi8aGeocWZ3As_effTGrUg9b6vZxAiiIN3a2sQwtHA.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167265,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSID",
          "value": "OQhae07lyRAn7KSyLo9n5FwPITHOgi8aGeocWZ3As_effTGrK-kouedBZjPMI3NUHN7XYg.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167409,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSID",
          "value": "OQhae07lyRAn7KSyLo9n5FwPITHOgi8aGeocWZ3As_effTGrU0ewtI7iQaoAK1dH-A7avQ.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697792989.167509,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "YSC",
          "value": "PxHEoIa3zxw",
          "domain": ".youtube.com",
          "path": "/",
          "expires": -1,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "LOGIN_INFO",
          "value": "AFmmF2swRgIhAPdqMiHuS0YQljD9-JaaegXta1TViWtX7tMJf1sQDi6LAiEAnF35-OUPJO2y1IPZhfueJOgzoUEqZTD4YtQ87eOeguc:QUQ3MjNmeER6VkVOSzRFUzV6VXBQLWFOMFo0WXBHUjdzeWxEUWw3NnFpVjF2cUpTTVZMR2stVkZWbHk2a3pZdFUtOXEyX3lCUVpDc2JwVlFJR09RaW1BMXlteGdUOHJNMkpqM3o5UmdWQ2FtR0J1dlRDTF9rcVBzRnUySUY2VFh4ZjB6dFNQT2tCaXhfTDdfR296Ynp6dkt2RVA1RVFrRkt3",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136579.342071,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "SIDCC",
          "value": "AEf-XMTDA9p5xcvhczq5vVD95tjkfwJG7SMmRNC8tkYwQXmfx8F3bo2xJwsfMWAhDtQuyVm-CA",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112591.309293,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSIDCC",
          "value": "AEf-XMS_fiW8A6YR5iwAAwDncqdPlLF1yxXbnNH1_zFmYCLD8BU34M2AyeLrib2k5vCopU46",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112591.309355,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSIDCC",
          "value": "AEf-XMTEGQz4KN6uumVeFHERTFBazHpv69TR6440uM5-hs2zH-whVbMxN_4soNXpfe1Onx9K",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112591.309391,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "CONSISTENCY",
          "value": "APAR8nvA4cQVNfQF_ICjfPFmDAhe22a1eQjxM8R_yOvrjPtoKpfnXnp9nD6npiAArfnEcBWIIxD8oc65J1VVIAa6Ny3xbZkCgpGxoCM3JUqLV5qKUpW7O2ryjK0UPV9LrhGPKjgiW9nLKxIXGye95FLBya0wxoiaal_J2grzFC9VMDBv0t6K396lLIlnVnRGO2lDFUn-inr-JgmGCcer4w",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1665577191,
          "httpOnly": false,
          "secure": true
        }
      ],
    "name":"Shivam Shukla",
    "device":{
        "UA":"Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
        "screen":{width: 2778, height: 1284},
    } 
});

let P4 = new Person({
    "tZ":"Africa/Lagos",
    "proxy":"socks://4aLyI71aB:4wkyb5d5ii@fra.socks.ipvanish.com:1080",
    "cookie":[
        {
          "name": "HSID",
          "value": "AD8OIM3zNg8mM2S9A",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.069942,
          "httpOnly": true,
          "secure": false
        },
        {
          "name": "SSID",
          "value": "AAiunzCHH5502wM1q",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.070012,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "APISID",
          "value": "j0Lg2LfKJSCvmetp/A3t9-Bf8lPvuCmIe4",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.070082,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "SAPISID",
          "value": "YYoME-F0HNCN-REY/A2wlaaLI9aZjfp9-F",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.07015,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-1PAPISID",
          "value": "YYoME-F0HNCN-REY/A2wlaaLI9aZjfp9-F",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.070369,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "__Secure-3PAPISID",
          "value": "YYoME-F0HNCN-REY/A2wlaaLI9aZjfp9-F",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.070452,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "LOGIN_INFO",
          "value": "AFmmF2swRQIhANr3QYFZ1K3e73fhdowGPGvSTd0Ri1lvg_2d6nL8gButAiAfUb8188gsKxCEe733ScxaWqZf1wMYPeUqXDQ3N-tCeA:QUQ3MjNmenFWZlhjam9pMF80YlJBbTFBTXM0ckRIVGl1TTJPdkZDRENKSHZmZWY2cUtkaUJrbHNUZ0ZzVHZUbzZCZF96RUlKanB5NDFxZ2FIWms4UzBmWlRIbzdhNWxhR0hmanJodS1PYXpMZ3AteFlyRllqVm9vekxsdWpob3NrVGVHaVV4aGc2LXc0Uy1UR0ZoV0F5SF9RMnJFMDV1RTJn",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697216154.584767,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "VISITOR_INFO1_LIVE",
          "value": "In7tT0DSt5c",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1678208154.585636,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "PREF",
          "value": "tz=Asia.Calcutta",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136687.105847,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "SID",
          "value": "PQjEDKQycuP9FSSBmAWtOAMO1eAVNIZccpgAff11YmIXbj0r2J5L9AwrnDw5XEv9Gfugqw.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.069534,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSID",
          "value": "PQjEDKQycuP9FSSBmAWtOAMO1eAVNIZccpgAff11YmIXbj0rnq67xmsJfUwskEQhQjOxSA.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.069704,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSID",
          "value": "PQjEDKQycuP9FSSBmAWtOAMO1eAVNIZccpgAff11YmIXbj0rzJADtHKWE8Y5Zvhdt0BgQg.",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1700136644.069858,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "YSC",
          "value": "1rOV0uC9Ovo",
          "domain": ".youtube.com",
          "path": "/",
          "expires": -1,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "CONSISTENCY",
          "value": "APAR8nu4dcehbi_GL2obmBupVlZjn0K6z8CbwSO1IsD_4Xcq95fX_AFwemBbVloRMH89WJjuqddJgpV1yRzEJapX-0J8h-DACugnt-weuKtjdDgRRwH1FBUPYmhvLX7V1jkCsoERteHuKDahHQWh1MnT",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1665577291,
          "httpOnly": false,
          "secure": true
        },
        {
          "name": "SIDCC",
          "value": "AEf-XMTY9DCwUXtf5ZfXiglBCZH96og_OHOq2mMJUV7bNTP8tpkeO_pzetk2yYcqQOZt1dLdXA",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112704.640097,
          "httpOnly": false,
          "secure": false
        },
        {
          "name": "__Secure-1PSIDCC",
          "value": "AEf-XMR7qJ8s8HSP1vY8Lh5GeViENXcJeNmT_YePtt6ju4yTS-lcAI2ugN3z7_eFDqPtR6EVWQ",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112704.64028,
          "httpOnly": true,
          "secure": true
        },
        {
          "name": "__Secure-3PSIDCC",
          "value": "AEf-XMTTP-mcnCGF7uigMB02kzoIzJgGhrySXpWt5sDijKYDBSrbg7_fCOd9O8J1XyUc_mY9zg",
          "domain": ".youtube.com",
          "path": "/",
          "expires": 1697112704.640367,
          "httpOnly": true,
          "secure": true
        }
      ],
    "name":"Shubham Shukla",
    "device":{
        "UA":"Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 iPhone11,8 Safari/604.1",
        "screen":{width: 828, height: 1792},
    } 
});



//P1.infoMe();
//P2.infoMe();
//P3.infoMe();
//P4.infoMe();

P1.startLife(bot,useProxy);
P2.startLife(bot,useProxy);
P3.startLife(bot,useProxy);
P4.startLife(bot,useProxy);


