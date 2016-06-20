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
      "4Head",
      "AMPEnergy",
      "AMPEnergyCherry",
      "ANELE",
      "ArgieB8",
      "ArsonNoSexy",
      "AsianGlow",
      "AthenaPMS",
      "BabyRage",
      "BatChest",
      "BCouch",
      "BCWarrior",
      "BibleThump",
      "BiersDerp",
      "BigBrother",
      "BionicBunion",
      "BlargNaut",
      "bleedPurple",
      "BloodTrail",
      "BORT",
      "BrainSlug",
      "BrokeBack",
      "BudBlast",
      "BuddhaBar",
      "BudStar",
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
      "DOOMGuy",
      "DoritosChip",
      "duDudu",
      "EagleEye",
      "EleGiggle",
      "FailFish",
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
      "HotPokket",
      "HumbleLife",
      "ItsBoshyTime",
      "Jebaited",
      "JKanStyle",
      "JonCarnage",
      "KAPOW",
      "Kappa",
      "KappaClaus",
      "KappaPride",
      "KappaRoss",
      "KappaWealth",
      "Keepo",
      "KevinTurtle",
      "Kippa",
      "Kreygasm",
      "Mau5",
      "mcaT",
      "MikeHogu",
      "MingLee",
      "MKXRaiden",
      "MKXScorpion",
      "MrDestructoid",
      "MVGame",
      "NinjaTroll",
      "NomNom",
      "NoNoSpot",
      "NotATK",
      "NotLikeThis",
      "OhMyDog",
      "OMGScoots",
      "OneHand",
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
      "PicoMause",
      "PipeHype",
      "PJSalt",
      "PJSugar",
      "PMSTwin",
      "PogChamp",
      "Poooound",
      "PraiseIt",
      "PRChase",
      "PunchTrees",
      "PuppeyFace",
      "RaccAttack",
      "RalpherZ",
      "RedCoat",
      "ResidentSleeper",
      "riPepperonis",
      "RitzMitz",
      "RuleFive",
      "SeemsGood",
      "ShadyLulu",
      "ShazBotstix",
      "ShibeZ",
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
      "TooSpicy",
      "TriHard",
      "TTours",
      "twitchRaid",
      "TwitchRPG",
      "UleetBackup",
      "UncleNox",
      "UnSane",
      "VaultBoy",
      "VoHiYo",
      "Volcania",
      "WholeWheat",
      "WinWaker",
      "WTRuck",
      "WutFace",
      "YouWHY",
      "\\s+"
    ];

    var emotes_regex = RegExp(emotes.join('|'), 'ig');
    var spam_regex = RegExp(spam_words.join('|'), 'i');
    spamChecks = [
      function isInSpamList(message) {
        return message.search(spam_regex) != -1;
      },
      function isOnlyCaps(message) {
        return message.toUpperCase() === message;
      },
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
