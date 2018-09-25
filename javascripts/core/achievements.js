const allAchievements = {
  r11 : "You gotta start somewhere",
  r12 : "100 antimatter is a lot",
  r13 : "Half life 3 confirmed",
  r14 : "L4D: Left 4 Dimensions",
  r15 : "5 Dimension Antimatter Punch",
  r16 : "We couldn't afford 9",
  r17 : "Not a luck related achievement",
  r18 : "90 degrees to infinity",
  r21 : "To infinity!",
  r22 : "Fake News",
  r23 : "The 9th Dimension is a lie",
  r24 : "Antimatter Apocalypse",
  r25 : "Boosting to the max",
  r26 : "You got past The Big Wall",
  r27 : "Double Galaxy",
  r28 : "There's no point in doing that",
  r31 : "I forgot to nerf that",
  r32 : "The Gods are pleased",
  r33 : "That's a lot of infinites",
  r34 : "You didn't need it anyway",
  r35 : "Don't you dare to sleep",
  r36 : "Claustrophobic",
  r37 : "That's fast!",
  r38 : "I don't believe in Gods",
  r41 : "Spreading Cancer",
  r42 : "Supersanic",
  r43 : "Zero Deaths",
  r44 : "Over in 30 seconds",
  r45 : "Faster than a potato",
  r46 : "Multidimensional",
  r47 : "Daredevil",
  r48 : "AntiChallenged",
  r51 : "Limit Break",
  r52 : "Age of Automation",
  r53 : "Definitely not worth it",
  r54 : "That's faster!",
  r55 : "Forever isn't that long",
  r56 : "Many Deaths",
  r57 : "Gift from the Gods",
  r58 : "Is this hell?",
  r61 : "Bulked up",
  r62 : "Oh hey, you're still here",
  r63 : "A new beginning.",
  r64 : "1 million is a lot",
  r65 : "Not-so-challenging",
  r66 : "Faster than a squared potato",
  r67 : "Infinitely Challenging",
  r68 : "You did this again just for the achievement right?",
  r71 : "ERROR 909: Dimension not found",
  r72 : "Can't hold all these infinities",
  r73 : "This achievement doesn't exist",
  r74 : "End me",
  r75 : "NEW DIMENSIONS???",
  r76 : "One for each dimension",
  r77 : "How the antitables have turned",
  r78 : "Blink of an eye",
  r81 : "Hevipelle did nothing wrong",
  r82 : "Anti-antichallenged",
  r83 : "YOU CAN GET 50 GALAXIES!??",
  r84 : "I got a few to spare",
  r85 : "All your IP are belong to us",
  r86 : "Do you even bend time bro?",
  r87 : "2 Million Infinities",
  r88 : "Yet another infinity reference",
  r91 : "Ludicrous Speed",
  r92 : "I brake for nobody",
  r93 : "MAXIMUM OVERDRIVE",
  r94 : "4.3333 minutes of Infinity",
  r95 : "Is this safe?",
  r96 : "Time is relative",
  r97 : "Yes. This is hell.",
  r98 : "0 degrees from infinity",
  r101 : "Costco sells dimboosts now",
  r102 : "This mile took an Eternity",
  r103 : "This achievement doesn't exist II",
  r104 : "That wasn't an eternity",
  r105 : "Infinite time",
  r106 : "The swarm",
  r107 : "Do you really need a guide for this?",
  r108 : "We could afford 9",
  r111 : "Yo dawg, I heard you liked infinities...",
  r112 : "Never again",
  r113 : "Long lasting relationship",
  r114 : "You're a mistake",
  r115 : "I wish I had gotten 7 eternities",
  r116 : "Do I really need to infinity",
  r117 : "8 nobody got time for that",
  r118 : "IT'S OVER 9000",
  r121 : "Can you get infinite IP?",
  r122 : "You're already dead.",
  r123 : "5 more eternities until the update",
  r124 : "Eternities are the new infinity",
  r125 : "Like feasting on a behind",
  r126 : "Popular music",
  r127 : "But I wanted another prestige layer...",
  r128 : "What do I have to do to get rid of you",
  r131 : "No ethical consumption",
  r132 : "Unique snowflakes",
  r133 : "I never liked this infinity stuff anyway",
  r134 : "When will it be enough?",
  r135 : "Faster than a potato^286078",
  r136 : "I told you already, time is relative",
  r137 : "Now you're thinking with dilation!",
  r138 : "This is what I have to do to get rid of you.",
  r141 : "Snap back to reality",
  r142 : "How does this work?",
  r143 : "r143",
  r144 : "r144",
  r145 : "r145",
  r146 : "r146",
  r147 : "r147",
  r148 : "r148",
  s11 : "The first one's always free",
  s12 : "Just in case",
  s13 : "It pays to have respect",
  s14 : "So do I",
  s15 : "Do a barrel roll!",
  s16 : "Do you enjoy pain?",
  s17 : "30 Lives",
  s18 : "Do you feel lucky? Well do ya punk?",
  s21 : "Go study in real life instead",
  s22 : "Cancer = Spread",
  s23 : "Stop right there criminal scum!",
  s24 : "Real news",
  s25 : "Shhh... It's a secret",
  s26 : "You're a failure",
  s27 : "It's not called matter dimensions is it?",
  s28 : "Nice.",
  s31 : "You should download some more RAM",
  s32 : "Less than or equal to 0.001",
  s33 : "A sound financial decision",
  s34 : "You do know how these work, right?",
  s35 : "Should we tell them about buy max...",
  s36 : "While you were away... Nothing happened.",
  s37 : "You followed the instructions",
  s38 : "Professional bodybuilder",
  s41 : "That dimension doesn’t exist",
  s42 : "Was it even broken?",
  s43 : "Time fixes everything",
  s44 : "Are you statisfied now?",
  s45 : "This dragging is dragging on",
  s46 : "s46",
  s47 : "s47",
  s48 : "s48",
};
const secretAchievementTooltips = {
    s11 : "Click on this achievement.",
    s12 : "Save 100 times without refreshing.",
    s13 : "Pay respects.",
    s14 : "Say something naughty.",
    s15 : "Do a barrel roll.",
    s16 : "Use standard, cancer, or bracket notation for 10 minutes with more than 1 eternity.",
    s17 : "Input the konami code.",
    s18 : "You have a 1/100,000 chance of getting this achievement every second.",
    s21 : "Purchase the secret time study.",
    s22 : "Buy 100,000 Antimatter Galaxies in total while using cancer notation.",
    s23 : "Open the console.",
    s24 : "Click on the news ticker that tells you to click on it.",
    s25 : "Discover a secret theme.",
    s26 : "Fail eternity challenges 10 times without refreshing. What are you doing with your life...",
    s27 : "Get Infinite matter.",
    s28 : "Don't act like you don't know what you did.",
    s31 : "Set your update rate to 200ms.",
    s32 : "Get a fastest infinity or eternity time of less than or equal to 0.001 seconds.",
    s33 : "Click on the donate link.",
    s34 : "Respec with an empty study tree.",
    s35 : "Buy single tickspeed 100,000 times.",
    s36 : "Have nothing happen while you were away.",
    s37 : "Follow instructions.",
    s38 : "Get all your dimension bulk buyers to 1e100.",
    s41 : "Try to purchase the 9th dimension.",
    s42 : '"Fix" your save.',
    s43 : "Fix infinity while dilated.",
    s44 : "Stare intently at the statistics tab for 15 minutes.",
    s45 : "Drag the perks around for a minute.",
    s46 : "s46",
    s47 : "s47",
    s48 : "s48",
  };
const allAchievementNums = Object.invert(allAchievements)
// to retrieve by value: Object.keys(allAchievements).find(key => allAchievements[key] === "L4D: Left 4 Dimensions");

function setAchieveTooltip() {
    var apocAchieve = document.getElementById("Antimatter Apocalypse");
    var noPointAchieve = document.getElementById("There's no point in doing that");
    var sanic = document.getElementById("Supersanic")
    var forgotAchieve = document.getElementById("I forgot to nerf that")
    var potato = document.getElementById("Faster than a potato")
    let potato2 = document.getElementById("Faster than a squared potato")
    let potato3 = document.getElementById("Faster than a potato^286078")
    var dimensional = document.getElementById("Multidimensional")
    var IPBelongs = document.getElementById("All your IP are belong to us")
    var reference = document.getElementById("Yet another infinity reference")
    let blink = document.getElementById("Blink of an eye")
    let exist = document.getElementById("This achievement doesn't exist")
    let exist2 = document.getElementById("This achievement doesn't exist II")
    let spare = document.getElementById("I got a few to spare")
    let speed = document.getElementById("Ludicrous Speed")
    let speed2 = document.getElementById("I brake for nobody")
    let overdrive = document.getElementById("MAXIMUM OVERDRIVE")
    let minute = document.getElementById("4.3333 minutes of Infinity")
    let infiniteIP = document.getElementById("Can you get infinite IP?")
    let over9000 = document.getElementById("IT'S OVER 9000")
    let dawg = document.getElementById("Yo dawg, I heard you liked infinities...")
    let eatass = document.getElementById("Like feasting on a behind")
    let layer = document.getElementById("But I wanted another prestige layer...")
    let fkoff = document.getElementById("What do I have to do to get rid of you")
    let minaj = document.getElementById("Popular music")
    let infstuff = document.getElementById("I never liked this infinity stuff anyway")
    let when = document.getElementById("When will it be enough?")
    let thinking = document.getElementById("Now you're thinking with dilation!")
    let thisis = document.getElementById("This is what I have to do to get rid of you.")

    apocAchieve.setAttribute('ach-tooltip', "Get over " + shortenCosts(1e80) + " antimatter.");
    noPointAchieve.setAttribute('ach-tooltip', "Buy a single First Dimension when you have over " + shortenCosts(1e150) + " of them. Reward: First Dimensions are 10% stronger.");
    forgotAchieve.setAttribute('ach-tooltip', "Get any Dimension multiplier over " + shortenCosts(1e31)) + ". Reward: First Dimensions are 5% stronger.";
    sanic.setAttribute('ach-tooltip', "Have antimatter/sec exceed your current antimatter above " + shortenCosts(1e63));
    potato.setAttribute('ach-tooltip', "Get more than " + shortenCosts(1e29) + " ticks per second. Reward: Reduces starting tick interval by 2%.");
    potato2.setAttribute('ach-tooltip', "Get more than " + shortenCosts(1e58) + " ticks per second. Reward: Reduces starting tick interval by 2%.");
    potato3.setAttribute('ach-tooltip', "Get more than "+shortenCosts(new Decimal("1e8296262"))+" ticks per second.")
    dimensional.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e12) + " of all dimensions except 8th.");
    IPBelongs.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e150)+" IP. Reward: Additional 4x multiplier to IP.")
    reference.setAttribute('ach-tooltip', "Get a x"+shortenDimensions(Number.MAX_VALUE)+" multiplier in a single sacrifice. Reward: Sacrifices are stronger.")
    blink.setAttribute('ach-tooltip', "Get to Infinity in under 200 milliseconds. Reward: Start with " + shortenCosts(1e25) + " antimatter and all dimensions are stronger in first 300ms of Infinity.");
    spare.setAttribute('ach-tooltip', "Reach " + shortenCosts(new Decimal("1e35000"))+" antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have.");
    //exist.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 9.9999e9999, 0, 0) + " antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have."); (i like the 9 9s thing and no one will see it with a formatted value)
    //exist2.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 1e35000, 0, 0) + " antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have.")
    speed.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e200)+" IP in 2 seconds or less. Reward: All dimensions are significantly stronger in first 5 seconds of infinity.")
    speed2.setAttribute('ach-tooltip', "Big Crunch for "+shortenCosts(1e250)+" IP in 20 seconds or less. Reward: All dimensions are significantly stronger in first 60 seconds of infinity.")
    overdrive.setAttribute('ach-tooltip', "Big Crunch with " + shortenCosts(1e300) + " IP/min. Reward: Additional 4x multiplier to IP.")
    minute.setAttribute('ach-tooltip', "Reach " + shortenCosts(1e260) + " infinity power. Reward: Double infinity power gain.")
    infiniteIP.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e30008"))+" IP.")
    over9000.setAttribute('ach-tooltip', "Get a total sacrifice multiplier of "+shortenCosts(new Decimal("1e9000"))+". Reward: Sacrifice doesn't reset your dimensions.")
    dawg.setAttribute('ach-tooltip', "Have all your infinities in your past 10 infinities be at least "+shortenMoney(Number.MAX_VALUE)+" times higher IP than the previous one. Reward: Your antimatter doesn't reset on dimboost/galaxy.")
    eatass.setAttribute('ach-tooltip', "Reach "+shortenCosts(1e100)+" IP without any infinities or first dimensions. Reward: IP multiplier based on time spent this infinity.")
    layer.setAttribute('ach-tooltip', "Reach "+shortenMoney(Number.MAX_VALUE)+" EP.")
    fkoff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e22000"))+" IP without any time studies. Reward: Time dimensions are multiplied by the number of studies you have.")
    minaj.setAttribute('ach-tooltip', "Have 180 times more Replicanti Galaxies than Antimatter Galaxies. Reward: Replicanti galaxies divide your replicanti by "+shortenMoney(Number.MAX_VALUE)+" instead of resetting them to 1.")
    infstuff.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal("1e200000"))+" IP without buying IDs or IP multipliers. Reward: You start eternities with all Infinity Challenges unlocked and completed.")
    when.setAttribute('ach-tooltip', "Reach "+shortenCosts( new Decimal("1e20000"))+" replicanti. Reward: You gain replicanti 2 times faster under "+shortenMoney(Number.MAX_VALUE)+" replicanti.")
    thinking.setAttribute('ach-tooltip', "Eternity for "+shortenCosts( new Decimal("1e600"))+" EP in 1 minute or less while dilated.")
    thisis.setAttribute('ach-tooltip', "Reach "+shortenCosts(new Decimal('1e28000'))+" IP without any time studies while dilated. Reward: The active time study path doesn't disable your replicanti autobuyer.")
}


function clearOldAchieves(){
    var toRemove = [];
    var achieveKey;
    var values = Object.keys(allAchievements).map(function(e) { return allAchievements[e] });
    for (var i = 0; i < player.achievements.length; i++) {
      if (values.indexOf(player.achievements[i]) !== -1 ) {  // does index[i] exist in allAchievements as a value?
        toRemove.push(i); // mark it for removal
        achieveKey = Object.keys(allAchievements).find(function(key){ return allAchievements[key] === player.achievements[i];});
        if (!player.achievements.includes(achieveKey)) { // check if new key already exists as well
            player.achievements.push(achieveKey); // if not... add it
        }
      } else if (allAchievements[player.achievements[i]] === undefined){
        toRemove.push(i);
      }
    }


    toRemove.reverse();
    for (var i = 0; i < toRemove.length; i++) {
      player.achievements.splice(toRemove[i], 1);
    }
}

function giveAchievement(name) {

    if (player.achievements.includes(name)){ clearOldAchieves(); }

    if (player.achievements.includes(allAchievementNums[name])) return false

    $.notify(name, "success");
    player.achievements.push(allAchievementNums[name]);
    document.getElementById(name).className = "achievementunlocked"
    kong.submitStats('Achievements', player.achievements.length);
    if (name == "All your IP are belong to us" || name == "MAXIMUM OVERDRIVE") {
        if (player.autoCrunchMode == "amount" && player.autobuyers[11].priority != undefined) player.autobuyers[11].priority = player.autobuyers[11].priority.times(4);
    }
    updateAchievements();
}

function updateAchievements() {
  var amount = 0
  for (var i=1; i<document.getElementById("achievementtable").children[0].children.length+1; i++) {
      var n = 0
      var achNum = i * 10
      for (var l=0; l<8; l++) {
          achNum += 1;
          var name = allAchievements["r"+achNum]
          if (isAchEnabled("r"+achNum)) {
                n++
                document.getElementById(name).className = "achievementunlocked"
          } else if (player.achievements.includes("r"+achNum)) {
                document.getElementById(name).className = "achievementdisabled"
          } else {
                document.getElementById(name).className = "achievementlocked"
          }
      }
      if (n == 8) {
          amount++
          document.getElementById("achRow"+i).className = "completedrow"
      } else {
          document.getElementById("achRow"+i).className = ""
      }
  }
  for (var i=1; i<document.getElementById("secretachievementtable").children[0].children.length+1; i++) {
      var n = 0
      var achNum = i * 10
      for (var l=0; l<8; l++) {
          achNum += 1;
          var name = allAchievements["s"+achNum]
          if (player.achievements.includes("s"+achNum)) {
              n++
              document.getElementById(name).setAttribute('ach-tooltip', secretAchievementTooltips["s"+achNum])
              document.getElementById(name).className = "achievementunlocked"
          } else {
              document.getElementById(name).className = "achievementhidden"
              document.getElementById(name).setAttribute('ach-tooltip', (name[name.length-1] !== "?" && name[name.length-1] !== "!" && name[name.length-1] !== ".") ? name+"." : name)
          }
      }
      if (n == 8) {
          document.getElementById("secretAchRow"+i).className = "completedrow"
      } else {
          document.getElementById("secretAchRow"+i).className = ""
      }
  }

  player.achPow = Decimal.pow(1.5, amount)

  document.getElementById("achmultlabel").textContent = "Current achievement multiplier on each Dimension: " + player.achPow.toFixed(1) + "x"

}

function getSecretAchAmount() {
    var n = 0
    for (var i=1; i<document.getElementById("secretachievementtable").children[0].children.length+1; i++) {
        var achNum = i * 10
        for (var l=0; l<8; l++) {
            achNum += 1;
            if (player.achievements.includes("s"+achNum)) {
                n++
            }
        }
    }
    return n
}

function isAchEnabled(name) {
  if (!player.achievements.includes(name)) return false;
  if (player.realities === 0) return true;
  const achId = parseInt(name.split("r")[1]);
  if (achId > 140) return true;
  const row = Math.floor(achId / 10);
  if (row <= achSkipPerkCount) return true;
  const currentSeconds = player.thisReality / 1000;
  return timeRequiredForAchievement(achId) <= currentSeconds;
}

function nextAchIn() {
  updateRealityAchievementModifiers();
  let currentSeconds = player.thisReality / 1000;
  if (currentSeconds > realityAchievementModifiers.secondsForAllAchs) return 0;
  const baseAchTime = realityAchievementModifiers.baseAchTime;
  const rowModifier = realityAchievementModifiers.rowModifier;
  for (let achrow = 1; achrow < 14; achrow++) {
    if (player.reality.perks.includes(parseInt("4" + achrow))) currentSeconds += (baseAchTime + (achrow - 7) * rowModifier) * 8
  }

  let timeReq = 0;
  let row = 1;
  while (currentSeconds > timeReq) {
    timeReq += (baseAchTime + ((row - 7) * rowModifier)) * 8;
    row++
  }
  row--;
  timeReq -= (baseAchTime + ((row - 7) * rowModifier)) * 8;

  let col = 1;
  while (currentSeconds > timeReq) {
    timeReq += (baseAchTime + ((row - 7) * rowModifier));
    col++
  }

  return (timeReq - currentSeconds) * 1000
}

function lockedString(name) {
  if (!player.achievements.includes(name))
    return "";
  const achId = parseInt(name.split("r")[1]);
  if (achId > 140 || isNaN(achId))
    return "";
  const row = Math.floor(achId / 10);
  if (row <= achSkipPerkCount) return "";
  const currentSeconds = player.thisReality / 1000;
  const remainingTime =  timeRequiredForAchievement(achId) - currentSeconds;

  if (remainingTime < 0)
    return "";
  else if (remainingTime < 60)
    return "\n\n(Locked: " + remainingTime.toFixed(0) + " seconds)";
  else if (remainingTime < 3600)
    return "\n\n(Locked: " + (remainingTime / 60).toFixed(1) + " minutes)";
  else if (remainingTime < 86400)
    return "\n\n(Locked: " + (remainingTime / 3600).toFixed(1) + " hours)";
  else
    return "\n\n(Locked: " + (remainingTime / 86400).toFixed(1) + " days)";
}

function timeRequiredForAchievement(achId) {
  updateRealityAchievementModifiers();
  const baseAchTime = realityAchievementModifiers.baseAchTime;
  const rowModifier = realityAchievementModifiers.rowModifier;

  const row = Math.floor(achId / 10);
  const perkAdjustedRow = Math.clamp(row - achSkipPerkCount, 1, row);
  const previousRowCount = perkAdjustedRow - 1;
  const previousRowsAchCount = previousRowCount * 8;
  // Unoptimized version
  // const achTime = row => baseAchTime + (row - 7) * rowModifier;
  // previousRowsTime = 0;
  // for (let i = 1; i < row; i++) {
  //   previousRowsTime += achTime(i) * 8
  // }
  const previousRowsTime = previousRowsAchCount * (baseAchTime + (previousRowCount - 13) * rowModifier / 2);
  const currentRowAchTime = baseAchTime + (perkAdjustedRow - 7) * rowModifier;
  const column = achId % 10;
  const currentRowTime = currentRowAchTime * column;
  return previousRowsTime + currentRowTime;
}

let realityAchievementModifiers = {
  realities: -1,
  baseAchTime: -1,
  rowModifier: -1,
  secondsForAllAchs: -1
};

const DAYS_FOR_ALL_ACHS = 2;
const SECONDS_IN_DAY = 60 * 60 * 24;
const DEFAULT_SECONDS_FOR_ALL_ACHS = SECONDS_IN_DAY * DAYS_FOR_ALL_ACHS;

// TODO: further optimization:
// pre-generate ach times on reality
function updateRealityAchievementModifiers() {
  if (realityAchievementModifiers.realities === player.realities) {
    return;
  }
  const requiredTimeModifier = Math.pow(0.9, Math.max(player.realities - 1, 0));
  const secondsForAllAchs = DEFAULT_SECONDS_FOR_ALL_ACHS * requiredTimeModifier;
  realityAchievementModifiers = {
    realities: player.realities,
    // how much it takes for row 7 achievement to get
    baseAchTime: secondsForAllAchs / 104,
    rowModifier: 100 * DAYS_FOR_ALL_ACHS * requiredTimeModifier,
    secondsForAllAchs: secondsForAllAchs
  };
}