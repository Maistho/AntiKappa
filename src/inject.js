(function() {
  var TMIExistsInterval = setInterval(function() {
    if (window.TMI) {
      clearInterval(TMIExistsInterval);

      console.log("Hello. This message was sent from scripts/inject.js");
      filterTwitch(window.TMI);
    }
  }, 1000);
  function filterTwitch(TMI) {
    var spam_words = [
      '^\\w+$',
      '^\\!',
      'was.*?the.*?problem.*?',
      'darude.*?sandstorm',
      'her+o her+o',
      'dun?.*?dun?.*?dun?',
      'rip skins',
      'BudStar',
      '█',
      '(.+?)\1{4,}',
      'orc.*?spam',
    ];
    var emotes = [
      "150Cappa",
      "4Head",
      "AMPEnergy",
      "AMPEnergyCherry",
      "ANELE",
      "anomM8",
      "anomVAC",
      "ArgieB8",
      "ArsonNoSexy",
      "AsianGlow",
      "AthenaPMS",
      "BabyRage",
      "BatChest",
      "BCouch",
      "BCWarrior",
      "bibaSucks",
      "bibaVac",
      "BibleThump",
      "BiersDerp",
      "BigBrother",
      "BionicBunion",
      "BlargNaut",
      "bleedPurple",
      "BloodTrail",
      "boatyD",
      "boatyG",
      "boatyR",
      "boatyU",
      "BORT",
      "BrainSlug",
      "BrokeBack",
      "broxyPachi",
      "BudBlast",
      "BuddhaBar",
      "BudStar",
      "bunkerVac",
      "ChefFrank",
      "cmonBruh",
      "CoolCat",
      "CorgiDerp",
      "CougarHunt",
      "DAESuppy",
      "DalLOVE",
      "DansGame",
      "DatSheffy",
      "DBstyle",
      "deExcite",
      "deIlluminati",
      "DendiFace",
      "DogFace",
      "donaTampon",
      "DOOMGuy",
      "DoritosChip",
      "duDudu",
      "EagleEye",
      "EleGiggle",
      "FailFish",
      "fallenBR",
      "fallenNTC",
      "forsenSleeper",
      "FPSMarksman",
      "FrankerZ",
      "FreakinStinkin",
      "FUNgineer",
      "FunRun",
      "FutureMan",
      "FuzzyOtterOO",
      "GingerPower",
      "GrammarKing",
      "HassaanChop",
      "HassanChop",
      "HeyGuys",
      "hiroWtf",
      "HotPokket",
      "hottedGG",
      "HumbleLife",
      "ItsBoshyTime",
      "j4ckieGasm",
      "j4ckieHi",
      "Jebaited",
      "JKanStyle",
      "JonCarnage",
      "jukeLuv",
      "KAPOW",
      "Kappa",
      "KappaClaus",
      "KappaPride",
      "KappaRoss",
      "KappaWealth",
      "keefRigged",
      "Keepo",
      "KevinTurtle",
      "Kippa",
      "Kreygasm",
      "krippO",
      "lirikH",
      "lirikHug",
      "Mau5",
      "mcaT",
      "MikeHogu",
      "MingLee",
      "MKXRaiden",
      "MKXScorpion",
      "moeEz",
      "moeMoed",
      "monniFin",
      "MrDestructoid",
      "MVGame",
      "NinjaTroll",
      "NomNom",
      "NoNoSpot",
      "NotATK",
      "NotLikeThis",
      "oakPenal",
      "OhMyDog",
      "omarGar",
      "omgPoro",
      "OMGScoots",
      "omgYay",
      "OneHand",
      "onsApprove",
      "onsBan",
      "onsLAD",
      "OpieOP",
      "OptimizePrime",
      "OSfrog",
      "OSkomodo",
      "OSsloth",
      "panicBasket",
      "PanicVis",
      "PartyTime",
      "PazPazowitz",
      "PeoplesChamp",
      "PermaSmug",
      "PeteZaroll",
      "PeteZarollTie",
      "pglKnife",
      "phantomFish",
      "phantomLoss",
      "phantomRigged",
      "PicoMause",
      "PipeHype",
      "PJSalt",
      "PJSugar",
      "PMSTwin",
      "PogChamp",
      "Poooound",
      "PraiseIt",
      "PRChase",
      "pteroRaena",
      "PunchTrees",
      "PuppeyFace",
      "RaccAttack",
      "RalpherZ",
      "RedCoat",
      "ResidentSleeper",
      "resttK",
      "riPepperonis",
      "RitzMitz",
      "robinBags",
      "RuleFive",
      "SeemsGood",
      "ShadyLulu",
      "ShazBotstix",
      "ShibeZ",
      "sixHeart",
      "SmoocherZ",
      "SMOrc",
      "SMSkull",
      "SoBayed",
      "SoonerLater",
      "SriHead",
      "SSSsss",
      "StinkyCheese",
      "StoneLightning",
      "StrawBeary",
      "sukRIP",
      "sumPotato",
      "SuperVinlin",
      "SwiftRage",
      "TBCheesePull",
      "TBTacoLeft",
      "TBTacoRight",
      "TF2John",
      "TheRinger",
      "TheTarFu",
      "TheThing",
      "ThunBeast",
      "TinyFace",
      "togiSU",
      "TooSpicy",
      "TriHard",
      "trilluxeVAC",
      "tripleLOVE",
      "trumpW",
      "TTours",
      "twitchRaid",
      "TwitchRPG",
      "UleetBackup",
      "UncleNox",
      "unlostBic",
      "UnSane",
      "vakob1VAC",
      "VaultBoy",
      "VoHiYo",
      "Volcania",
      "weed1",
      "weed2",
      "weed3",
      "weed4",
      "weedGG",
      "weedOOO",
      "weedWOO",
      "WholeWheat",
      "WinWaker",
      "WTRuck",
      "WutFace",
      "YouWHY",
    ];

    var emotes_regex = RegExp(emotes.join('|'), 'g');
    var spam_regex = RegExp(spam_words.join('|'), 'i');
    spamChecks = [
      function isInSpamList(message) {
        return message.search(spam_regex) != -1;
      },
      function isOnlyCaps(message) {
        return message.toUpperCase() === message;
      },
      function tooMuchCaps(message) {
        // Match all uppercase characters /\p{Lu}/
        var upper = message.match(/[A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸ-ŹŻŽƁ-ƂƄƆ-ƇƉ-ƋƎ-ƑƓ-ƔƖ-ƘƜ-ƝƟ-ƠƢƤƦ-ƧƩƬƮ-ƯƱ-ƳƵƷ-ƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺ-ȻȽ-ȾɁɃ-ɆɈɊɌɎͰͲͶΆΈ-ΊΌΎ-ΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹ-ϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀ-ӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԱ-ՖႠ-ჅḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾ-ℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱯⱲⱵⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽ-ꝾꞀꞂꞄꞆꞋＡ-Ｚ]|\ud801[\udc00-\udc27]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]/ug);
        if (!upper) return false;

        // Match all lowercase characters /\p{Ll}/
        var lower = message.match(/[a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķ-ĸĺļľŀłńņň-ŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌ-ƍƒƕƙ-ƛƞơƣƥƨƪ-ƫƭưƴƶƹ-ƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜ-ǝǟǡǣǥǧǩǫǭǯ-ǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿ-ɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐ-ϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻ-ϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎ-ӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣա-ևᴀ-ᴫᵢ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶ-ᾷιῂ-ῄῆ-ῇῐ-ΐῖ-ῗῠ-ῧῲ-ῴῶ-ῷⁱⁿℊℎ-ℏℓℯℴℹℼ-ℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥ-ⱦⱨⱪⱬⱱⱳ-ⱴⱶ-ⱼⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣ-ⳤⴀ-ⴥꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌﬀ-ﬆﬓ-ﬗａ-ｚ]|\ud801[\udc28-\udc4f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]/ug);

        return !(lower && lower.length > upper.length);
      }
    ];
    function isSpam(message) {
      message = message.replace(emotes_regex, '');
      if (message.length === 0) return true;
      for (var i = 0; i < spamChecks.length; ++i) {
        if (spamChecks[i](message)) {
          return true;
        }
      }
      return false;
    }

    var initRoom = function() {
      var room;
      for (var i in TMI._sessions[0]._rooms) {
        room = TMI._sessions[0]._rooms[i];
        break;
      }
      if (!room) {
        return;
      }
      clearInterval(RoomExistsInterval);

      var orig = room._events.message[0];

      room._events.message[0] = function(e) {
        if (!isSpam(e.message)) {
          orig(e);
        }
      };
    };
    var RoomExistsInterval = setInterval(initRoom, 100);
  }
})();
