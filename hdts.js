/*
 *
 *
脚本功能：红豆听书 解锁付费听书购买下载⏬
软件版本：
下载地址：
脚本作者：**
更新时间：2024-4.24
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 红豆听书 解锁付费听书购买
^https?:\/\/md.liaoliaoy.com\/listen\/api\/getUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/hdts.js
^https?:\/\/md.liaoliaoy.com\/listen\/api\/(buyBookInit|buyCard|batchBuyChapter|bookChapter|getNextChapter).*$ url script-request-body https://raw.githubusercontent.com/WeiGiegie/666/main/hdtsck.js
# > 去广告
^https?://case-cdn\.oceanplayable\.com url reject
^https?://ios\.bugly\.qq\.com url reject
^https?://ulogs\.um.*\.com url reject
^https?://token\.safebrowsing\.apple url reject
^https?://toblog\.ctobsnssdk\.com url reject

[mitm] 
hostname = md.liaoliaoy.com,www.yueliangfm.com,ios.bugly.qq.com,ulogs.umeng.com,ulogs.umengcloud.com,*toutiao.com,toblog.ctobsnssdk.com,token.safebrowsing.apple,toblog.ctobsnssdk.com


*
*
*/


(function(_0x5d757e,_0x5e4d1b){function _0x5300db(_0x49e09b,_0x429f87,_0x19f229,_0x493d53,_0x47842e){return _0x2007(_0x429f87- -0x115,_0x47842e);}function _0x3e66de(_0x5c5141,_0x255eeb,_0x160a70,_0x1d69fd,_0x3719f1){return _0x5f31(_0x1d69fd- -0x30e,_0x3719f1);}var _0x2eac76=_0x5d757e();function _0x57fa16(_0x31c2ac,_0x3080f1,_0x452750,_0x16930f,_0x5185bb){return _0x2007(_0x5185bb- -0x11,_0x3080f1);}function _0x7fab(_0xc7acbf,_0x27328,_0x573e2f,_0x1c8ae2,_0x3dcc08){return _0x2007(_0xc7acbf-0x378,_0x27328);}function _0x5ae43b(_0x44ba07,_0x44f84f,_0x381612,_0x51d3ad,_0x1a3d99){return _0x5f31(_0x44f84f-0x153,_0x1a3d99);}function _0x5570e7(_0x550c05,_0x14a1be,_0x32f20f,_0x3e26a1,_0x295079){return _0x5f31(_0x3e26a1- -0x36,_0x550c05);}function _0x420572(_0x437494,_0x537dae,_0x262ca8,_0x333d0f,_0x4471d9){return _0x2007(_0x262ca8- -0x273,_0x437494);}function _0x16aba5(_0x53f481,_0x470e9d,_0x78f7ce,_0x1fdbd6,_0x228366){return _0x2007(_0x1fdbd6- -0xea,_0x78f7ce);}while(!![]){try{var _0x4d5978=-parseInt(_0x5ae43b(0x176,0x182,0x19d,0x188,0x1c1))/0x1+-parseInt(_0x420572("\u0025\u004e\u0026\u006c",-0x213,-0x1ff,-0x1d4,-0x219))/0x2+-parseInt(_0x420572("\u004e\u0054\u0048\u004e",-0x26e,-0x247,-0x227,-0x204))/0x3+parseInt(_0x7fab(0x3a9,"JaH@".split("").reverse().join(""),0x3da,0x393,0x383))/0x4+parseInt(_0x420572("Sg*E".split("").reverse().join(""),-0x201,-0x246,-0x26a,-0x211))/0x5*(-parseInt(_0x420572("\u0025\u004e\u0026\u006c",-0x239,-0x233,-0x231,-0x25e))/0x6)+-parseInt(_0x3e66de(-0x301,-0x27c,-0x2be,-0x2bd,-0x2b6))/0x7*(-parseInt(_0x5ae43b(0x186,0x1c5,0x1a4,0x1d8,0x196))/0x8)+parseInt(_0x420572("kSL6".split("").reverse().join(""),-0x1cd,-0x212,-0x204,-0x1e9))/0x9;if(_0x4d5978===_0x5e4d1b){break;}else{_0x2eac76["\u0070\u0075\u0073\u0068"](_0x2eac76["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x1c846f){_0x2eac76["\u0070\u0075\u0073\u0068"](_0x2eac76["\u0073\u0068\u0069\u0066\u0074"]());}}})(_0x1606,0x7dfee);var _0x14964d=function(){var _0x9b9291=!![];return function(_0xb25ae2,_0x1c665b){var _0xe53bf6=_0x9b9291?function(){function _0x4dbe82(_0x1d2401,_0x3e4e60,_0x544494,_0x2d0fa9,_0x27dee1){return _0x5f31(_0x544494-0x2b4,_0x2d0fa9);}var _0x3ac619={'WGwOW':_0x22b1fb(-0xca,-0xa2,-0x85,-0xee,-0xc6)};function _0x4f0f93(_0x1d6caa,_0x115457,_0x1bdf4a,_0x4d7353,_0x5a95bd){return _0x2007(_0x115457- -0x367,_0x1bdf4a);}function _0x22b1fb(_0x451c1d,_0x456d0b,_0xc7c97f,_0x517be5,_0x490886){return _0x5f31(_0x490886- -0x132,_0x451c1d);}function _0x2176a4(_0x3cb27b,_0x54df96,_0x240310,_0x4b5e47,_0x254d2e){return _0x2007(_0x54df96-0x6c,_0x3cb27b);}if(_0x1c665b){if(_0x4dbe82(0x2e0,0x30c,0x2de,0x2ae,0x317)!==_0x4f0f93(-0x361,-0x31e,"Xhic".split("").reverse().join(""),-0x2de,-0x32e)){var _0x50c99a=_0x1c665b['apply'](_0xb25ae2,arguments);_0x1c665b=null;return _0x50c99a;}else{return function(_0x2411e1){}['constructor'](_0x4f0f93(-0x325,-0x332,"l&N%".split("").reverse().join(""),-0x357,-0x32e))["\u0061\u0070\u0070\u006c\u0079"](_0x3ac619['WGwOW']);}}}:function(){};_0x9b9291=![];return _0xe53bf6;};}();(function(){var _0x5463e2={'hLvxZ':_0x37a390(-0x13c,-0x156,-0x113,-0x167,"oXW)".split("").reverse().join("")),"\u006e\u0056\u0069\u0075\u0064":function(_0x565a4a,_0x397384){return _0x565a4a(_0x397384);},"\u0066\u0072\u004c\u0065\u0057":function(_0x559b9c,_0x3a4d0e){return _0x559b9c+_0x3a4d0e;},'DEQOx':_0x4f5b8f(-0x6f,-0x62,-0x4a,-0xc,-0x78)};function _0x4f5b8f(_0x12e4c3,_0x183b51,_0x30b699,_0xdc69f2,_0x15b4ee){return _0x5f31(_0x30b699- -0x53,_0x183b51);}function _0x37a390(_0x509fb0,_0x44f2be,_0x4efc4e,_0x116baa,_0x9fa3af){return _0x2007(_0x509fb0- -0x179,_0x9fa3af);}_0x14964d(this,function(){var _0x538f1f=new RegExp(_0x1ae6a0(0x102,0x10c,0x12f,0xd4,"NQK8".split("").reverse().join("")));var _0x4984d7=new RegExp(_0x5463e2['hLvxZ'],"\u0069");function _0x29fda9(_0x5e06f2,_0x33ca4a,_0x294d1d,_0x38c54c,_0x52df10){return _0x2007(_0x38c54c- -0x396,_0x294d1d);}var _0x4f66d0=_0x5463e2['nViud'](_0x4c48a6,_0x37132c(-0xa6,-0xe0,-0xc2,-0xfb,-0x91));function _0x1ae6a0(_0x572439,_0x4ae051,_0x532024,_0x5165e6,_0x4567e9){return _0x2007(_0x572439-0xb3,_0x4567e9);}function _0x545e18(_0x1e1eb3,_0x7b0524,_0x5c39a5,_0x216baf,_0x2dfd0e){return _0x5f31(_0x5c39a5-0x16d,_0x1e1eb3);}function _0x37132c(_0x224da9,_0x4a6fb2,_0x566348,_0x5d71c0,_0x4f84f5){return _0x5f31(_0x566348- -0x105,_0x4f84f5);}function _0x513919(_0x23cafe,_0x106b8f,_0x244c6e,_0x52ca35,_0x47ac0d){return _0x5f31(_0x47ac0d- -0x1d1,_0x244c6e);}if(!_0x538f1f['test'](_0x5463e2['frLeW'](_0x4f66d0,_0x5463e2["\u0044\u0045\u0051\u004f\u0078"]))||!_0x4984d7['test'](_0x5463e2['frLeW'](_0x4f66d0,_0x37132c(-0xe0,-0xee,-0xf3,-0xff,-0xc4)))){_0x5463e2["\u006e\u0056\u0069\u0075\u0064"](_0x4f66d0,"\u0030");}else{if(_0x545e18(0x1aa,0x1f2,0x1af,0x185,0x1f0)===_0x1ae6a0(0xbf,0x84,0xb2,0xc2,"\u004e\u0064\u0041\u0021")){_0x4c48a6();}else{var _0xe1ae2d=_0x10a4e3["\u0061\u0070\u0070\u006c\u0079"](_0x8e1877,arguments);_0x299773=null;return _0xe1ae2d;}}})();})();var _0x1f78e3=function(){var _0x59c410={'KhlHm':function(_0x273cd2,_0x495925){return _0x273cd2!==_0x495925;}};var _0x4e53b8=!![];return function(_0x57c136,_0x4e2d81){function _0x4a3f35(_0x7d8eaa,_0x37919c,_0x165eb2,_0x4eebdc,_0xfb3c5){return _0x2007(_0x165eb2-0x1df,_0x4eebdc);}function _0x15da5b(_0x16abd6,_0x133ac4,_0x4030a8,_0x4ab234,_0x5087aa){return _0x2007(_0x16abd6-0x1be,_0x133ac4);}function _0x14a5ce(_0x2b96a4,_0x45f4d4,_0x2bdb74,_0x49cfc3,_0x3a8989){return _0x2007(_0x2bdb74-0x1fa,_0x45f4d4);}var _0x49b103={'kmZSk':_0x4a3f35(0x21c,0x232,0x1fe,"dP8^".split("").reverse().join(""),0x1ca)};if(_0x59c410['KhlHm'](_0x14a5ce(0x286,"kIxZ".split("").reverse().join(""),0x265,0x24c,0x222),_0x4a3f35(0x25d,0x276,0x24d,"\u002a\u0048\u0072\u0045",0x234))){var _0x10d768=_0x4e53b8?function(){function _0x42b7bc(_0x5d11d3,_0x343072,_0x4fdfb0,_0xeb2cf,_0xec2145){return _0x5f31(_0x5d11d3-0x1ff,_0x4fdfb0);}function _0x1e4772(_0x166362,_0x52459e,_0xd7672b,_0x389816,_0x30fbc2){return _0x5f31(_0x389816- -0x29a,_0x52459e);}function _0x3f2b2d(_0x2d9a2a,_0x14d182,_0x36de3c,_0x22d7aa,_0x3a2bc3){return _0x5f31(_0x14d182-0x304,_0x3a2bc3);}function _0x3c3ca2(_0x2a908c,_0x58b589,_0x3b3cd3,_0x388443,_0x53d957){return _0x5f31(_0x3b3cd3-0x20a,_0x53d957);}if(_0x3f2b2d(0x34e,0x326,0x2f9,0x305,0x33a)===_0x1e4772(-0x24f,-0x27d,-0x23b,-0x278,-0x257)){if(_0x4e2d81){if(_0x3f2b2d(0x34d,0x383,0x37d,0x36b,0x3b7)===_0x3f2b2d(0x2e8,0x308,0x337,0x2f6,0x302)){var _0x44258e=_0x1c3c21?function(){if(_0x197ab1){var _0x745a5e=_0x4395f8["\u0061\u0070\u0070\u006c\u0079"](_0x46fd8f,arguments);_0x29f446=null;return _0x745a5e;}}:function(){};_0x1aae29=![];return _0x44258e;}else{var _0x2f3a10=_0x4e2d81['apply'](_0x57c136,arguments);_0x4e2d81=null;return _0x2f3a10;}}}else{_0x1593af["\u0064\u0061\u0074\u0061"]["\u0062\u006f\u006f\u006b\u0044\u0061\u0074\u0061"]['bookPriceType']='1';_0xb80ca=_0x5f1c8b['stringify'](_0x3eb39b);}}:function(){};_0x4e53b8=![];return _0x10d768;}else{_0x2e29cf(this,function(){var _0x5ab568=new _0x299594(_0x49b103["\u006b\u006d\u005a\u0053\u006b"]);function _0x32fe95(_0x3e103d,_0x5eaeb1,_0x961640,_0xbbad8b,_0x5dfb8c){return _0x5f31(_0xbbad8b-0x373,_0x3e103d);}function _0x3e76fc(_0x483ffb,_0x1c9b61,_0x4ba8a0,_0x422a89,_0x3bdfbc){return _0x5f31(_0x3bdfbc-0x40,_0x422a89);}var _0x78b2bb=new _0x5a3a0a(_0x28674c(-0x17f,-0x137,'8KQN',-0x157,-0x17a),'i');var _0x2632b0=_0x25c60e(_0x3e76fc(0x40,0x78,0xaa,0x8f,0x83));function _0x178ec3(_0x1a9ef5,_0x3d4e53,_0x51a381,_0x319db6,_0x1fb7e0){return _0x2007(_0x1fb7e0- -0x2ff,_0x3d4e53);}function _0x28674c(_0x51323f,_0x166c65,_0x14eef6,_0x502ce5,_0x5dc825){return _0x2007(_0x5dc825- -0x1cc,_0x14eef6);}if(!_0x5ab568["\u0074\u0065\u0073\u0074"](_0x2632b0+_0x178ec3(-0x29c,"9^OY".split("").reverse().join(""),-0x2b9,-0x2cf,-0x2b1))||!_0x78b2bb["\u0074\u0065\u0073\u0074"](_0x2632b0+_0x32fe95(0x380,0x38d,0x3b9,0x385,0x393))){_0x2632b0('0');}else{_0x28bd7f();}})();}};}();var _0x420dfd=_0x1f78e3(this,function(){var _0x1e562c={'ddvVJ':function(_0x4447fb,_0x455671){return _0x4447fb+_0x455671;},'wndDs':_0x1c5e31(-0x1da,-0x1e2,-0x1df,-0x211,-0x215),'nzIDJ':_0x446be0(0x18,0x2d,0x28,0x42,0x40),'Bjhvc':_0x2f7aba(-0x68,'YYRS',-0xdf,-0xd5,-0xac),'ulJKU':_0x2758d0(-0x7c,-0x6f,-0x85,'%B4A',-0xa4),"\u006d\u0073\u004f\u0053\u004d":_0x515b12(-0xff,-0x11b,-0x123,-0x13c,-0xe6)};function _0x1c5e31(_0x48062f,_0x4b8061,_0x1cfe30,_0x2c1e9e,_0x411179){return _0x5f31(_0x2c1e9e- -0x269,_0x1cfe30);}function _0x446be0(_0x2add37,_0x16645b,_0x10987a,_0x5d2247,_0x560a1a){return _0x5f31(_0x10987a- -0x2c,_0x2add37);}var _0x48b131=_0x59eab9('LDZj',0x214,0x1fe,0x222,0x232)["\u0073\u0070\u006c\u0069\u0074"]("\u007c");function _0x2758d0(_0x4d2593,_0x3132dd,_0x3bfbba,_0x4bcbc0,_0x1e68a5){return _0x2007(_0x1e68a5- -0xfe,_0x4bcbc0);}function _0x2f7aba(_0x4d58fe,_0x42a7c2,_0x9c6690,_0x461185,_0x2c07dc){return _0x2007(_0x2c07dc- -0xb9,_0x42a7c2);}var _0x194250=0x0;function _0x515b12(_0x31ba81,_0x24ec80,_0x49af26,_0x109158,_0x2ddb6d){return _0x5f31(_0x24ec80- -0x126,_0x49af26);}function _0x242b49(_0x301b80,_0x49e1af,_0x490856,_0x5ec1c0,_0x56c9d5){return _0x2007(_0x490856-0x40,_0x301b80);}function _0x58cc19(_0x5f5d18,_0x3fdc5d,_0x2b7f8c,_0x55124e,_0x5ce024){return _0x5f31(_0x5f5d18-0x20f,_0x55124e);}function _0x59eab9(_0x30b372,_0x402433,_0x14257e,_0x2e139b,_0xb356e1){return _0x2007(_0x14257e-0x1e0,_0x30b372);}function _0x59ed6e(_0x39559a,_0x34090b,_0xb45157,_0xd36f5,_0x19c566){return _0x5f31(_0x39559a- -0xc5,_0xd36f5);}function _0x28432b(_0x29cbe8,_0x59729f,_0x2fefe4,_0xdc3d82,_0x3e9a65){return _0x2007(_0xdc3d82- -0x356,_0x59729f);}while(!![]){switch(_0x48b131[_0x194250++]){case'0':try{var _0x454fb8=Function(_0x1e562c["\u0064\u0064\u0076\u0056\u004a"](_0x2f7aba(-0x5c,"$tSx".split("").reverse().join(""),-0x2a,-0x74,-0x32)+_0x1e562c['wndDs'],');'));_0x53730f=_0x454fb8();}catch(_0x802856){_0x53730f=window;}continue;case'1':var _0x5a1bca=[_0x1e562c["\u006e\u007a\u0049\u0044\u004a"],_0x1e562c['Bjhvc'],_0x446be0(0x2b,-0x4,-0x10,0x17,0xd),_0x1e562c["\u0075\u006c\u004a\u004b\u0055"],_0x28432b(-0x2de,'ZxIk',-0x2a2,-0x2da,-0x310),_0x515b12(-0xfa,-0xe1,-0xf1,-0xdd,-0xb0),_0x1e562c['msOSM']];continue;case'2':var _0x53730f;continue;case"\u0033":var _0x20a2c9=_0x53730f["\u0063\u006f\u006e\u0073\u006f\u006c\u0065"]=_0x53730f['console']||{};continue;case'4':for(var _0x2d8bf1=0x0;_0x2d8bf1<_0x5a1bca['length'];_0x2d8bf1++){var _0x33f68c=_0x2f7aba(-0x4a,'iLfE',-0xc2,-0xb3,-0x81)['split']('|');var _0x1deb46=0x0;while(!![]){switch(_0x33f68c[_0x1deb46++]){case'0':_0x59ce9a["\u005f\u005f\u0070\u0072\u006f\u0074\u006f\u005f\u005f"]=_0x1f78e3['bind'](_0x1f78e3);continue;case'1':var _0x3d66ed=_0x5a1bca[_0x2d8bf1];continue;case"\u0032":_0x59ce9a["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]=_0x2bafeb["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]["\u0062\u0069\u006e\u0064"](_0x2bafeb);continue;case"\u0033":var _0x59ce9a=_0x1f78e3["\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072"]['prototype']['bind'](_0x1f78e3);continue;case'4':_0x20a2c9[_0x3d66ed]=_0x59ce9a;continue;case'5':var _0x2bafeb=_0x20a2c9[_0x3d66ed]||_0x59ce9a;continue;}break;}}continue;}break;}});_0x420dfd();var _0x584bc1=0x9+0x8;var _0x4fb0a0=$response['body'];_0x584bc1=0x2+0x3;function _0x14b2ea(_0xe9498d,_0x9901be,_0x4c42a7,_0x3a071f,_0xbe2a2e){return _0x5f31(_0xbe2a2e-0xdf,_0x3a071f);}var _0xf4feb9=$request["\u0075\u0072\u006c"];var _0x21c6c2;var _0x354766=JSON["\u0070\u0061\u0072\u0073\u0065"](_0x4fb0a0);_0x21c6c2=0x9;function _0x1606(){var _0x4e8012=["\u0041\u0077\u0035\u004d\u0042\u0057","\u0057\u0037\u0068\u0064\u004e\u0066\u004a\u0064\u0056\u0075\u0043","\u0064\u0073\u0033\u0063\u004a\u0043\u006b\u0063\u0057\u0034\u004e\u0063\u004c\u0030\u0075\u0057\u0057\u0050\u004b","GA0k8TdZsSdNGkcP4Wqo8IcNwyp4cE".split("").reverse().join(""),"SKAJr1u".split("").reverse().join(""),'BgvUz3rO',"O0DUDuw".split("").reverse().join(""),"\u0057\u0034\u0075\u006b\u0045\u004b\u0033\u0063\u0052\u0057","\u0041\u0077\u0035\u004b\u007a\u0078\u0048\u0070\u007a\u0047",'s2HSsg0',"\u0079\u0078\u0062\u0050\u006c\u0032\u006a\u0031\u0045\u0075\u006a\u0056\u0042\u0032\u0053",'vNf1C2i',"aDZvgD".split("").reverse().join(""),'WRWNqKvj',"\u007a\u004c\u006a\u0057\u0071\u0078\u004f","\u0079\u0032\u0039\u0055\u0043\u0032\u0039\u0053\u007a\u0071","G7W9CRWu0qOcFRWBkCQcZOWn9RW".split("").reverse().join(""),"jomVclqmTX4WGfvv".split("").reverse().join(""),"qRddwRdBXhCkSmHkCeXz5W".split("").reverse().join(""),'mZC5mJi1BNLZteTK',"mMDOPMq".split("").reverse().join(""),"WHdh5WYomMdZQWRaPWck8DyvQWQzRW".split("").reverse().join(""),"\u007a\u0067\u0076\u0049\u0044\u0071",'D2HPBguGkhrYDwuPihT9',"C1t3D0v".split("").reverse().join(""),'WRuHEaCMlSkUiCk2WRhdSNJdJd/dSq',"WBM5wsYv2CvrxzN9sAWf2lUvgDZLgBV02BJ5sEVfwAS9wyPXMlK12lVOdC0rhA".split("").reverse().join(""),'yM9VA1bYAwnLvhLWzq',"bCRWmK7WX5fpXoCwiSPW".split("").reverse().join(""),"\u0074\u0063\u0068\u0064\u004b\u0043\u006b\u0078\u0057\u004f\u0034","\u0057\u0036\u006d\u0035\u0057\u0050\u0074\u0064\u004b\u0032\u0053","xK5WSoSjmGQWUz6W5kSSdR1r".split("").reverse().join(""),"GeQcdQWXo8lUkCtik8r".split("").reverse().join(""),"\u0057\u004f\u0046\u0063\u0050\u0049\u0068\u0064\u0056\u0065\u0034\u0056\u0071\u0043\u006f\u0074\u0057\u0036\u0037\u0064\u0055\u0072\u0056\u0063\u004e\u0064\u0070\u0064\u0047\u0053\u006b\u002f\u0075\u0064\u002f\u0063\u0051\u0061\u0043\u0067\u0065\u0038\u006f\u0075\u0070\u006d\u006f\u0068\u006b\u0038\u006f\u006f\u0057\u0035\u0075\u0072\u006b\u0043\u006f\u0054\u0057\u0052\u0058\u0067\u0065\u006d\u006b\u0055","\u0057\u0034\u0054\u0074\u0067\u0043\u006b\u0047\u006d\u0057",'o8kBW7/dHq',"mZSdJQWDkmnpomo7Hfi5f7W".split("").reverse().join(""),"CvzmjNz".split("").reverse().join(""),"mvrzXuD".split("").reverse().join(""),'Aw5PDa',"\u0057\u0034\u0053\u0042\u0062\u0053\u006f\u002b\u0046\u0076\u0061\u0030\u0057\u0036\u007a\u006b\u0057\u0051\u0072\u0068","ugBIfgD".split("").reverse().join(""),"\u0057\u0051\u006d\u0035\u0045\u0065\u0071\u0048\u0079\u0043\u006f\u0050\u0070\u0053\u006f\u0037\u0057\u0051\u0042\u0064\u0055\u0064\u0037\u0063\u0048\u0057\u0033\u0064\u0051\u0061","iPWqomKclxd".split("").reverse().join(""),'WOZdJmkdeG','kSkdrXhcOG','uMnTyLq',"u1skXwD".split("").reverse().join(""),'y2fSBa','y29UC3rYDwn0B3i','nCoCWRlcSqG','W4nWhSk2i8k6eHlcQcNdHCkAWPTSwCoV',"ZCuFJoChBS4W".split("").reverse().join(""),'mtC1n0HZAfPXuW','W7KUlmo+D8o5vupcSLJdUmkFW4ehkmkCWQqYAhtcL2SRWQRdRmk8mCoMWPzVimkkjuK',"8dGcxWPcZ0cG9QW".split("").reverse().join(""),'Bg9N',"\u0057\u0051\u0056\u0064\u0055\u0053\u006f\u0042\u0077\u0053\u006b\u0072\u006d\u0047","mWPcFtPdJPW".split("").reverse().join(""),"CXGctLTch6W".split("").reverse().join(""),'E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK',"aQWJkmEEkSoKoCtoWxLcF6W".split("").reverse().join(""),'cJmzvCkq',"\u007a\u0067\u0072\u0032\u0076\u004b\u004f","KxzU9wB".split("").reverse().join(""),"\u006e\u0038\u006f\u0065\u0057\u0051\u0070\u0063\u0054\u0062\u0038",'mJm0ndeWmgXMAM5bBa',"\u006f\u0038\u006f\u0079\u0057\u0050\u005a\u0063\u0050\u0049\u006d",'W6hcT8kqc8ohzq','W5NcN8ofqmkesv/dPCkIWPVdTq3dRK8','W6GbWRpdQw4','ChjVDg90ExbL','kSo0mefUjKu','zgf0yq','fIJcRmoMWQ8',"KhBWbxy".split("").reverse().join(""),"\u0057\u0050\u0046\u0064\u0053\u004e\u0074\u0064\u0050\u0071",'BLzPDwq','C3rYAw5NAwz5','WPpdPmoQy8k7',"GCLrNB192y".split("").reverse().join(""),'mJC3mdCXv0ThuuvN',"GGcdtoFk8n".split("").reverse().join(""),"zm7W8a6W".split("").reverse().join(""),"q0AZrLB".split("").reverse().join(""),"4oSPc3We".split("").reverse().join(""),'mtGWog1quvjMva','x19WCM90B19F','W7nWi1HXyCo2b8kMWQFdSq',"azULMy".split("").reverse().join(""),"GgToCnbomD".split("").reverse().join(""),'bGG+W60',"qwrYP1r".split("").reverse().join(""),"AkmIcp6WLk8F".split("").reverse().join(""),'dJeBvSkB','DxnLCM5HBwu',"eGlaoCipkSvkoSTd3RW".split("").reverse().join(""),'W5tdQxNdNKy',"GeBrf1trvdmZiZmYitm".split("").reverse().join(""),'qu5yEhq',"\u0041\u0068\u0072\u0030\u0043\u0068\u006d\u0036\u006c\u0059\u0039\u0030\u006c\u004d\u0031\u004c\u006c\u0030\u0044\u0050\u007a\u0075\u0044\u0050\u007a\u0074\u0043\u0033\u006e\u0057",'6l+z5lYA6iQX5O6j5B6i5AsA6yEr5BIb5zE3FVcFKPtWN5ku8j+sLa','W5BdTMFdGuVdHCkhWQTsqCkr','fgxcGCog','WPSyWR3dGhlcGmoWBW',"qk8JcxJGcJQW".split("").reverse().join(""),"SguSDKC".split("").reverse().join(""),"aIcBOW3kmrBKGd0i5Weo8JdZNVdp5WukmNctHKc/QW".split("").reverse().join(""),'Dg9tDhjPBMC',"00upnxB".split("").reverse().join(""),"1oCebo8m4oSu".split("").reverse().join(""),'dc0MW7f5',"a4Wk4RW7kSs".split("").reverse().join(""),'ww9rqLK','A21Au2S','W68vW5tdSSoOW6FcGIC','DxjS',"SPW0o8JdVwNcZPWAeXv".split("").reverse().join(""),"4wAHH2y".split("").reverse().join(""),'lclcIcmoWRexucdcN0VdL8oH',"u2yHjhD".split("").reverse().join(""),'x04EWOJcIG',"aLdROWOC6W".split("").reverse().join(""),"07WJqae".split("").reverse().join(""),"WVcV7Wc13TctQW1yxw".split("").reverse().join(""),'dNRcU8o2WR8',"ajeomnrkmwko8PdBRW".split("").reverse().join(""),"qxDW5wA".split("").reverse().join(""),"\u0057\u0050\u0064\u0064\u0056\u0067\u0037\u0064\u0054\u0038\u006b\u0036\u0057\u0051\u0031\u0071\u0057\u0050\u0048\u0075\u0067\u004b\u0069",'W7JdOfTfDa',"qEK9My".split("").reverse().join(""),"C4WH5xIdVOWS07W".split("").reverse().join(""),"xkCVdxRWjSexjyGJdF6W".split("").reverse().join(""),"igCJPhD".split("").reverse().join(""),'l2Trr1pcRmolW403','sw0PWR7cRwHEW77cSSo0wW','CgfYC2u'];_0x1606=function(){return _0x4e8012;};return _0x1606();}function _0x2007(_0xbd2a44,_0x2dbf18){var _0x1ab97f=_0x1606();_0x2007=function(_0xec897d,_0x27b376){_0xec897d=_0xec897d-0x0;var _0x38fc16=_0x1ab97f[_0xec897d];if(_0x2007['wUUUjw']===undefined){var _0x25dd01=function(_0x139696){var _0x1285b2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xd97446='';var _0x50ecf9="";for(var _0x2194e2=0x0,_0x2007b1,_0x12147a,_0xed49ae=0x0;_0x12147a=_0x139696['charAt'](_0xed49ae++);~_0x12147a&&(_0x2007b1=_0x2194e2%0x4?_0x2007b1*0x40+_0x12147a:_0x12147a,_0x2194e2++%0x4)?_0xd97446+=String['fromCharCode'](0xff&_0x2007b1>>(-0x2*_0x2194e2&0x6)):0x0){_0x12147a=_0x1285b2['indexOf'](_0x12147a);}for(var _0x303e8a=0x0,_0x2360f7=_0xd97446['length'];_0x303e8a<_0x2360f7;_0x303e8a++){_0x50ecf9+='%'+('00'+_0xd97446["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x303e8a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x50ecf9);};var _0x272b41=function(_0x3a33c1,_0x29e0a3){var _0x6f799c=[],_0x4e3325=0x0,_0x214457,_0x441665='';_0x3a33c1=_0x25dd01(_0x3a33c1);var _0x2e65ed;for(_0x2e65ed=0x0;_0x2e65ed<0x100;_0x2e65ed++){_0x6f799c[_0x2e65ed]=_0x2e65ed;}for(_0x2e65ed=0x0;_0x2e65ed<0x100;_0x2e65ed++){_0x4e3325=(_0x4e3325+_0x6f799c[_0x2e65ed]+_0x29e0a3['charCodeAt'](_0x2e65ed%_0x29e0a3['length']))%0x100;_0x214457=_0x6f799c[_0x2e65ed];_0x6f799c[_0x2e65ed]=_0x6f799c[_0x4e3325];_0x6f799c[_0x4e3325]=_0x214457;}_0x2e65ed=0x0;_0x4e3325=0x0;for(var _0x2adab6=0x0;_0x2adab6<_0x3a33c1['length'];_0x2adab6++){_0x2e65ed=(_0x2e65ed+0x1)%0x100;_0x4e3325=(_0x4e3325+_0x6f799c[_0x2e65ed])%0x100;_0x214457=_0x6f799c[_0x2e65ed];_0x6f799c[_0x2e65ed]=_0x6f799c[_0x4e3325];_0x6f799c[_0x4e3325]=_0x214457;_0x441665+=String['fromCharCode'](_0x3a33c1['charCodeAt'](_0x2adab6)^_0x6f799c[(_0x6f799c[_0x2e65ed]+_0x6f799c[_0x4e3325])%0x100]);}return _0x441665;};_0x2007['ekZade']=_0x272b41;_0xbd2a44=arguments;_0x2007['wUUUjw']=!![];}var _0x165af2=_0x1ab97f[0x0];var _0x160650=_0xec897d+_0x165af2;var _0x5f316c=_0xbd2a44[_0x160650];if(!_0x5f316c){if(_0x2007['HbNtcV']===undefined){_0x2007['HbNtcV']=!![];}_0x38fc16=_0x2007['ekZade'](_0x38fc16,_0x27b376);_0xbd2a44[_0x160650]=_0x38fc16;}else{_0x38fc16=_0x5f316c;}return _0x38fc16;};return _0x2007(_0xbd2a44,_0x2dbf18);}const _0xb23ca0=_0x11b623(-0x2bb,-0x297,-0x2eb,-0x28e,-0x284);function _0x58d3cd(_0x9a50ec,_0x55497e,_0x55b369,_0x53f8d5,_0x52a5e1){return _0x5f31(_0x53f8d5- -0x32e,_0x52a5e1);}const _0x5e4048=_0x58d3cd(-0x2c9,-0x33f,-0x2ff,-0x308,-0x303);function _0x98396d(_0x1ecf9b,_0x350854,_0x2011fb,_0x3c2a10,_0x3b1478){return _0x2007(_0x350854- -0x35e,_0x3c2a10);}const _0x549982=_0x98396d(-0x331,-0x318,-0x306,"l&N%".split("").reverse().join(""),-0x301);function _0x2b39ed(_0x24e267,_0x20d10c,_0x28d906,_0x41baaf,_0x409c38){return _0x5f31(_0x24e267-0x398,_0x20d10c);}function _0x4d5428(_0x46ce3e,_0x3687cb,_0x5bb08b,_0x2514d0,_0x3ccc9b){return _0x5f31(_0x46ce3e- -0x83,_0x3687cb);}function _0x11b623(_0x182742,_0x321579,_0x51bf99,_0x13e0f9,_0x4a365b){return _0x5f31(_0x182742- -0x2f1,_0x51bf99);}function _0x4b92db(_0x5a7c12,_0x323796,_0x5715d8,_0x3275ad,_0x1d23d5){return _0x2007(_0x5715d8-0x39,_0x5a7c12);}function _0x5f31(_0xbd2a44,_0x2dbf18){var _0x1ab97f=_0x1606();_0x5f31=function(_0xec897d,_0x27b376){_0xec897d=_0xec897d-0x0;var _0x38fc16=_0x1ab97f[_0xec897d];if(_0x5f31["\u0074\u0071\u0050\u006a\u0056\u0055"]===undefined){var _0x25dd01=function(_0x272b41){var _0x139696="\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006c\u006d\u006e\u006f\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004a\u004b\u004c\u004d\u004e\u004f\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u002b\u002f\u003d";var _0x1285b2='';var _0xd97446='';for(var _0x50ecf9=0x0,_0x2194e2,_0x2007b1,_0x12147a=0x0;_0x2007b1=_0x272b41['charAt'](_0x12147a++);~_0x2007b1&&(_0x2194e2=_0x50ecf9%0x4?_0x2194e2*0x40+_0x2007b1:_0x2007b1,_0x50ecf9++%0x4)?_0x1285b2+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](0xff&_0x2194e2>>(-0x2*_0x50ecf9&0x6)):0x0){_0x2007b1=_0x139696['indexOf'](_0x2007b1);}for(var _0xed49ae=0x0,_0x303e8a=_0x1285b2['length'];_0xed49ae<_0x303e8a;_0xed49ae++){_0xd97446+='%'+('00'+_0x1285b2['charCodeAt'](_0xed49ae)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xd97446);};_0x5f31['MUdsgJ']=_0x25dd01;_0xbd2a44=arguments;_0x5f31['tqPjVU']=!![];}var _0x165af2=_0x1ab97f[0x0];var _0x160650=_0xec897d+_0x165af2;var _0x5f316c=_0xbd2a44[_0x160650];if(!_0x5f316c){_0x38fc16=_0x5f31['MUdsgJ'](_0x38fc16);_0xbd2a44[_0x160650]=_0x38fc16;}else{_0x38fc16=_0x5f316c;}return _0x38fc16;};return _0x5f31(_0xbd2a44,_0x2dbf18);}if(_0xf4feb9["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0xb23ca0)!=-(0x90788^0x90789)){_0x354766['data']['nickname']=_0x2b39ed(0x418,0x42d,0x3d5,0x3f6,0x45c);_0x354766['data']['money']=_0x98396d(-0x302,-0x2fe,-0x30e,'ZxIk',-0x33a);_0x354766["\u0064\u0061\u0074\u0061"]['username']=_0x2b39ed(0x418,0x44e,0x43e,0x41b,0x406);_0x4fb0a0=JSON['stringify'](_0x354766);}if(_0xf4feb9["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0x5e4048)!=-(0xb6504^0xb6505)){_0x354766['message']=_0x58d3cd(-0x2f0,-0x293,-0x2b2,-0x2ad,-0x2e6);_0x4fb0a0=JSON['stringify'](_0x354766);}if(_0xf4feb9['indexOf'](_0x549982)!=-(0x1f27a^0x1f27b)){_0x354766['data']['bookData']['bookPriceType']='1';_0x4fb0a0=JSON['stringify'](_0x354766);}var _0x438a18={};_0x438a18['body']=_0x4fb0a0;$done(_0x438a18);function _0x4c48a6(_0x557c95){function _0xf4d9c2(_0x2415c3,_0x12261e,_0x6ce8b7,_0x39e446,_0x4d792f){return _0x2007(_0x12261e-0x81,_0x39e446);}function _0xbc0e65(_0x5163f3,_0x47f6a5,_0x5590c9,_0x1db345,_0x58bf01){return _0x5f31(_0x47f6a5- -0x1ec,_0x5163f3);}function _0x264559(_0x4cd0c7,_0x38f661,_0x3a6834,_0x222b23,_0x39de84){return _0x2007(_0x3a6834-0x3af,_0x38f661);}function _0x4cc93e(_0x190622,_0x405c58,_0x5c3ff8,_0x264555,_0x3316a0){return _0x5f31(_0x405c58- -0x2ca,_0x5c3ff8);}function _0x4f40d(_0x410453,_0x567e99,_0x8d69d8,_0xe841f8,_0x2ae222){return _0x2007(_0x8d69d8-0x1ea,_0x567e99);}var _0x52659f={'GZrEd':_0x4cc93e(-0x2ed,-0x2b2,-0x277,-0x2b2,-0x2d3),'xHKSq':_0x117498(0x191,0x1d1,"kIxZ".split("").reverse().join(""),0x1b3,0x1c2),"\u0062\u0042\u006f\u006c\u0071":function(_0x253825,_0x128bf5){return _0x253825+_0x128bf5;},"\u0043\u0068\u004a\u0070\u006d":_0x117498(0x199,0x13c,"\u0023\u0047\u0077\u0076",0x181,0x1a8),'RcmbT':_0xf4d9c2(0x120,0xf2,0xb7,"SL4@".split("").reverse().join(""),0xcf),"\u006e\u0054\u0073\u006b\u0044":function(_0x1cdbdb,_0x508819){return _0x1cdbdb(_0x508819);},'STcjK':_0x4cc93e(-0x28b,-0x2a3,-0x292,-0x267,-0x279),'dBEjk':function(_0x1ccc01,_0x21f529){return _0x1ccc01(_0x21f529);}};function _0x3d4b57(_0x2a985e,_0x30e7db,_0x4fcfb9,_0x1038c5,_0x219879){return _0x2007(_0x4fcfb9-0x336,_0x219879);}function _0x117498(_0x1f7865,_0x53cfb7,_0x162998,_0x4a4750,_0x3e02fc){return _0x2007(_0x4a4750-0x15e,_0x162998);}function _0x35d902(_0x221c44){function _0x227e9b(_0x2edb54,_0x26dc34,_0x47cb07,_0x4d67d9,_0x47e40f){return _0x2007(_0x47e40f-0x18f,_0x2edb54);}if(typeof _0x221c44===_0x52659f['xHKSq']){if(_0x227a82('xSt$',0x20d,0x229,0x1f9,0x260)===_0x47024b(-0x2b1,-0x2b6,-0x295,-0x29d,-0x2ca)){return![];}else{return function(_0x1dea0a){}["\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072"](_0x47024b(-0x35a,-0x32a,-0x35c,-0x337,-0x31d))['apply'](_0x227a82("EfLi".split("").reverse().join(""),0x1be,0x1f4,0x21e,0x1cc));}}else{if(_0x52659f['bBolq']("".split("").reverse().join(""),_0x221c44/_0x221c44)[_0x565922(0x249,0x1fb,0x20e,0x272,0x236)]!==0x1||_0x221c44%0x14===0x0){if(_0x52659f['ChJpm']===_0x227a82('P)X2',0x1a3,0x1cd,0x18c,0x1ab)){(function(){if(_0x52659f['GZrEd']===_0x52659f['GZrEd']){return!![];}else{return _0x46dab2;}})['constructor'](_0x387534(0x202,0x1b1,0x1c1,'@HaJ',0x19e)+_0x52659f['RcmbT'])["\u0063\u0061\u006c\u006c"](_0x387534(0x15e,0x17e,0x153,"PjYc".split("").reverse().join(""),0x131));}else{_0x46d70f(0x0);}}else{(function(){return![];})["\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072"](_0x565922(0x238,0x255,0x28a,0x26c,0x247)+_0x52659f["\u0052\u0063\u006d\u0062\u0054"])['apply'](_0xae14c2(0x155,0x163,0x1a0,0x13d,'8KQN'));}}function _0x387534(_0x85edf0,_0x3949f2,_0x6f18bc,_0x39b08e,_0x2edc6f){return _0x2007(_0x6f18bc-0x152,_0x39b08e);}function _0x36f5ec(_0x156351,_0x5d1f53,_0x44196b,_0x505ed4,_0x275e5d){return _0x2007(_0x156351-0x203,_0x505ed4);}function _0x6257ad(_0x51b390,_0x405021,_0x524b04,_0x152daa,_0x49e6a9){return _0x5f31(_0x405021-0x90,_0x524b04);}function _0x227a82(_0x478d92,_0x33baa8,_0x4123e5,_0x128a5a,_0x1011d9){return _0x2007(_0x4123e5-0x1a4,_0x478d92);}function _0xae14c2(_0x18381f,_0xd0e4c0,_0x4e283f,_0x659161,_0x375c48){return _0x2007(_0xd0e4c0-0x135,_0x375c48);}function _0x4085fb(_0x45d5e9,_0x2b6f6f,_0x25684a,_0x202fcf,_0x55a529){return _0x5f31(_0x25684a- -0x39b,_0x202fcf);}function _0x47024b(_0x4aa28c,_0x43dd7c,_0x4ca3c4,_0x5cc9fa,_0x5dae66){return _0x5f31(_0x5dae66- -0x350,_0x4ca3c4);}function _0x565922(_0x2fda5d,_0x49e9c9,_0x4c7084,_0x17268a,_0x40d263){return _0x5f31(_0x40d263-0x215,_0x49e9c9);}_0x52659f["\u006e\u0054\u0073\u006b\u0044"](_0x35d902,++_0x221c44);}try{if(_0x4f40d(0x21c,'CApp',0x231,0x216,0x203)===_0xf4d9c2(0x10f,0xd8,0xe6,'4psH',0x113)){var _0x5907dd=_0x5e2b59["\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072"]['prototype']['bind'](_0x2e7d8b);var _0x3b7cb4=_0x134ccf[_0x5e2894];var _0x2f1fe2=_0x1ca56c[_0x3b7cb4]||_0x5907dd;_0x5907dd['__proto__']=_0x2b3200['bind'](_0x38be90);_0x5907dd['toString']=_0x2f1fe2['toString']['bind'](_0x2f1fe2);_0x552bad[_0x3b7cb4]=_0x5907dd;}else{if(_0x557c95){if(_0x52659f["\u0053\u0054\u0063\u006a\u004b"]!==_0xf4d9c2(0x100,0xfa,0x13a,"KGBt".split("").reverse().join(""),0xda)){return _0x35d902;}else{var _0x818ded=_0x56859b?function(){if(_0x192b78){var _0x59c2c6=_0x339d38['apply'](_0x10ad10,arguments);_0x347906=null;return _0x59c2c6;}}:function(){};_0x3e9469=![];return _0x818ded;}}else{_0x52659f["\u0064\u0042\u0045\u006a\u006b"](_0x35d902,0x0);}}}catch(_0x2c8c5e){}}
