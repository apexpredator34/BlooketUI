javascript:function start(){loadGUI(),addUtils()}function loadGUI(){var e=document.createElement("iframe");e.id="blooo",e.style.display="none",e.style.width="1px",e.style.height="1px",document.body.appendChild(e),window.alertf=e.contentWindow.alert,window.promptf=e.contentWindow.prompt;let t=document.createElement("div");t.innerHTML='<div id="GUI"> <style>details > summary{cursor: pointer; transition: 1s; list-style: circle;}.hack{border: none; background: hsl(0, 0%, 20%); padding: 7px; margin: 5px; width: 70%; color: white; transition: 0.1s; border-radius: 5px; cursor: pointer;}.hack:hover{background: hsl(0, 1%, 31%);}</style> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">BlooketUI <button id="gui-" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: 90%; font-size: 2.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: -10px; padding-right: -15px; color: white;">-</button> <button id="guiX" style="background: black; height: 45px; width: 45px; border: none; cursor: pointer; position: absolute; top: -10px; right: -10px; font-size: 1.5rem; border-radius: 10px; font-family: Nunito; font-weight: bolder; padding-top: 10px; padding-right: 15px; color: white;">X</button> </div><div style="display: block; margin: 10px; min-height: 70px;"> <div id="curPage">no game detected</div><div id="name">name: null</div><div>(press e to hide)</div><details open=""> <summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Main</summary> <button id="token" class="hack">Get Daily Rewards</button> <button id="spoof" class="hack">Spoof Blooks</button> <button id="open" class="hack">Spam Open Boxes</button> <button id="sell" class="hack">Auto Sell Dupes</button> <button id="correct" class="hack">Every Answer Correct</button> </details><br><div id="LoadedGame"> </div><div> Updated by <a href="https://github.com/Blooketware">Blooketware</a><br><a href="https://github.com/Blooketware/BlooketUI/">Repository</a></div></div>',t.style="width: 350px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;",document.body.appendChild(t);var o=0,a=0,n=0,s=0;t.onmousedown=(e=window.event)=>{e.preventDefault(),n=e.clientX,s=e.clientY,document.onmouseup=()=>{document.onmouseup=null,document.onmousemove=null},document.onmousemove=e=>{(e=e||window.event).preventDefault(),o=n-e.clientX,a=s-e.clientY,n=e.clientX,s=e.clientY;let d=t.offsetTop-a>0?t.offsetTop-a:0,l=t.offsetLeft-o>0?t.offsetLeft-o:0;t.style.top=d+"px",t.style.left=l+"px"}}}async function debuggerHelp(e){const t=await fetch("https://api.blooket.com/api/users/verify-token",{method:"GET",headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,ru;q=0.8"},credentials:"include"});startDebugger((await t.json()).name)}function addtokens(e){try{Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;document.getElementsByTagName("P")[0].parentElement.remove()}catch(e){confirm("An error has occured, would you like to open the debugger?")&&debuggerHelp()}}function spoofblooks(e){try{if("/play/lobby"==window.location.pathname){let e=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;e.stateNode.state.lockedBlooks=[],e.stateNode.state.takenBlooks=[],window.alertf("Select a different Blook to unlock all Blooks!")}else window.alertf("Run this in a lobby (https://blooket.com/play/lobby/)")}catch(e){confirm("An error has occured, would you like to open the debugger?")&&debuggerHelp()}}function openboxes(e){try{Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;document.getElementsByTagName("P")[0].parentElement.remove()}catch(e){confirm("An error has occured, would you like to open the debugger?")&&debuggerHelp()}}function selldupes(e){try{Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;document.getElementsByTagName("P")[0].parentElement.remove()}catch(e){confirm("An error has occured, would you like to open the debugger?")&&debuggerHelp()}}function allcorrect(e){try{let e=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;var t=e.stateNode.state.question.answers;e.stateNode.state.question.correctAnswers=t,e.stateNode.state.question.text="ggez blooketware ftw!"}catch(e){confirm("An error has occured, would you like to open the debugger?")&&debuggerHelp()}}function guiexit(e){const t=document.getElementById("GUI"),o=document.getElementById("guiX"),a=document.getElementById("blooo"),n=document.getElementById("token"),s=document.getElementById("spoof"),d=document.getElementById("open"),l=document.getElementById("sell"),i=document.getElementById("correct");o.removeEventListener("click",guiexit),n.removeEventListener("click",addtokens),s.removeEventListener("click",spoofblooks),d.removeEventListener("click",openboxes),l.removeEventListener("click",selldupes),i.removeEventListener("click",allcorrect),window.onkeydown=null,t.remove(),o.remove(),a.remove()}function toggleVisGUI(){var e=document.getElementById("GUI");"none"==e.style.display?e.style.display="block":e.style.display="none"}function startDebugger(e){if(null!=document.getElementById("deb"))window.alertf("The debugger is already open.");else{let e=document.createElement("div");e.innerHTML='<div id="deb"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Debug UI</div><div id="debname" style="font-size: 1rem;">Name: null</div><div id="hackstat">Hack Status: null</div><div id="gameinfo">No gamemode detected</div><br><button id="rundeb" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Run Debugger</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/Blooketware">Blooketware</a></div></div>',e.style="width: 175px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;",document.body.appendChild(e);var t=0,o=0,a=0,n=0;e.onmousedown=(s=window.event)=>{s.preventDefault(),a=s.clientX,n=s.clientY,document.onmouseup=()=>{document.onmouseup=null,document.onmousemove=null},document.onmousemove=s=>{(s=s||window.event).preventDefault(),t=a-s.clientX,o=n-s.clientY,a=s.clientX,n=s.clientY;let d=e.offsetTop-o>0?e.offsetTop-o:0,l=e.offsetLeft-t>0?e.offsetLeft-t:0;e.style.top=d+"px",e.style.left=l+"px"}}}let s="No game detected";switch(window.location.pathname){case"/play/racing":s="Racing";break;case"/play/fishing":s="Fishing Frenzy";break;case"/play/gold":s="Gold Quest";break;case"/play/factory":s="Factory";break;case"/cafe":s="Cafe is currently not supported";break;case"/kingdom":s="Crazy Kingdom";break;case"/tower/map":case"/tower/battle":s="Tower of Doom";break;case"/defense":s="Tower Defense"}const d=document.getElementById("rundeb"),l=document.getElementById("gameinfo"),i=document.getElementById("hackstat"),r=document.getElementById("debname");d.addEventListener("click",getstat),l=s,r.innerHTML=`Name: ${e}`,i.innerHTML="Hack Status:"}async function getstat(){const e=document.getElementById("hackstat"),t=await fetch("https://api.blooket.com/api/games?gameId=62185f4950d6238032ffd5c2",{credentials:"include"});"online"==(await t.json()).title?e.innerHTML="Hack Status: Online":e.innerHTML="Hack Status: Offline"}async function handleData(e){if("elements"){const e=await fetch("https://api.blooket.com/api/users/verify-token",{method:"GET",headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,ru;q=0.8"},credentials:"include"});let t="No game detected";switch(window.location.pathname){case"/play/racing":t="Racing";break;case"/play/fishing":t="Fishing Frenzy";break;case"/play/gold":t="Gold Quest";break;case"/play/factory":t="Factory";break;case"/cafe":t="Cafe is not supported";break;case"/kingdom":t="Crazy Kingdom";break;case"/tower/map":case"/tower/battle":t="Tower of Doom";break;case"/defense":t="Tower Defense"}let o=(await e.json()).name;const a=document.getElementById("name");document.getElementById("curPage").innerHTML=t,a.innerHTML=`Name: ${o}`}else console.error("handle data incorect type")}function addListeners(){const e=document.getElementById("guiX"),t=document.getElementById("gui-"),o=document.getElementById("token"),a=document.getElementById("spoof"),n=document.getElementById("open"),s=document.getElementById("sell"),d=document.getElementById("correct");e.addEventListener("click",guiexit),t.addEventListener("click",toggleVisGUI),o.addEventListener("click",addtokens),a.addEventListener("click",spoofblooks),n.addEventListener("click",openboxes),s.addEventListener("click",selldupes),d.addEventListener("click",allcorrect),window.addEventListener("keydown",(function(e){"e"==e.key&&toggleVisGUI()}))}function CheckGame(){let e=null,t="",o="No game detected",a=window.location.pathname;switch(a){case"/play/racing":t="race",o="Racing",e='<div id="LoadedGame"><button id="finish" class="hack">Finish Race</button></div><br>',n(t,e,o);break;case"/play/fishing":t="fishing",o="Fishing Frenzy",e='<div id="LoadedGame"><button id="setweight" class="hack">Set Weight</button><button id="setlure" class="hack">Set Lure</button><button id="frenzy" class="hack">Always Frenzy</button></div><br>',n(t,e,o);break;case"/play/gold":t="gold",o="Gold Quest",e='<div id="LoadedGame"> <button id="setgold" class="hack">Set Gold</button> <button id="choiceesp" class="hack">Choice ESP</button> </div><br>',n(t,e,o);break;case"/play/factory":t="factory",o="Factory",e='<div id="LoadedGame"><button id="mega" class="hack">All Mega Bots</button> <button id="setcash" class="hack">Set Cash</button> <button id="ng" class="hack">Remove Glitches</button></div><br>',n(t,e,o);break;case"/play/hack":t="crypto",o="Crypto-Hack",e='<div id="LoadedGame"><button id="set" class="hack">Set Crypto</button> <button id="esp" class="hack">Change Name</button></div><br>',n(t,e,o);break;case"/kingdom":t="kingdom",o="Crazy Kingdom",e='<div id="LoadedGame"><button id="esp" class="hack">ChoiceESP</button><button id="max" class="hack">Max Stats</button> <button id="taxes" class="hack">No Taxes</button> <button id="setgold" class="hack">Set Gold</button> <button id="sethappy" class="hack">Set Happiness</button> <button id="setmaterials" class="hack">Set Materials</button> <button id="setpeople" class="hack">Set People</button></div><br>',n(t,e,o);break;case"/tower/map":case"/tower/battle":t="doom",o="Tower of Doom",e='<div id="LoadedGame"><button id="maxstats" class="hack">Max Stats</button><button id="lowstats" class="hack">Lower Enemy Stats</button><button id="settokens" class="hack">Set Coins</button><button id="infhlt" class="hack">Infinite Health</button></div><br>',n(t,e,o);break;case"/defense":t="defense",o="Tower Defense",e='<div id="LoadedGame"> <button id="settokens" class="hack">Set Tokens</button> <button id="sethealth" class="hack">Set Health</button> <button id="setround" class="hack">Set Round</button> <button id="maxtowers" class="hack">Max All Towers</button> <button id="towersany" class="hack">Place Towers Anywhere</button> </div><br>',n(t,e,o);break;default:document.getElementById("LoadedGame").innerHTML='<div id="LoadedGame"></div>'}function n(e,t,o){let a=document.getElementById("LoadedGame"),n=document.getElementById("curPage");a.innerHTML=t,n.innerHTML=o,function(e){let t=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;switch(e){case"crypto":const e=document.getElementById("set"),o=document.getElementById("esp");e.addEventListener("click",(()=>{var e=window.promptf("How much Crypto would you like?");let o=Number(e);null==o&&null==o||(t.stateNode.state.crypto=o)})),o.addEventListener("click",(()=>{var e=window.promptf("What would you like your password to be?");null==tokenz&&null==tokenz||(t.stateNode.state.passwordOptions[0]=e,t.stateNode.state.password=e,window.alertf(`Set password to: ${e}`))}));break;case"defense":const a=document.getElementById("settokens"),n=document.getElementById("sethealth"),s=document.getElementById("setround"),d=document.getElementById("maxtowers"),l=document.getElementById("towersany");a.addEventListener("click",(()=>{var e=window.promptf("How many tokens would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.tokens=e)})),n.addEventListener("click",(()=>{var e=window.promptf("How much health would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.health=e)})),s.addEventListener("click",(()=>{var e=window.promptf("What round would you like to be on?");null==e&&null==e&&NaN==e||(t.stateNode.state.round=e)})),d.addEventListener("click",(()=>{null!=t.stateNode.towers[0]&&(t.stateNode.towers[0].damage="9999",t.stateNode.towers[0].range="99999",t.stateNode.towers[0].blastRadius="999",t.stateNode.towers[0].fullCd="0"),null!=t.stateNode.towers[1]&&(t.stateNode.towers[1].damage="9999",t.stateNode.towers[1].range="99999",t.stateNode.towers[1].blastRadius="999",t.stateNode.towers[1].fullCd="0"),null!=t.stateNode.towers[2]&&(t.stateNode.towers[2].damage="9999",t.stateNode.towers[2].range="99999",t.stateNode.towers[2].blastRadius="999",t.stateNode.towers[2].fullCd="0"),null!=t.stateNode.towers[3]&&(t.stateNode.towers[3].damage="9999",t.stateNode.towers[3].range="99999",t.stateNode.towers[3].blastRadius="999",t.stateNode.towers[3].fullCd="0"),null!=t.stateNode.towers[4]&&(t.stateNode.towers[4].damage="9999",t.stateNode.towers[4].range="99999",t.stateNode.towers[4].blastRadius="999",t.stateNode.towers[4].fullCd="0"),null!=t.stateNode.towers[5]&&(t.stateNode.towers[5].damage="9999",t.stateNode.towers[5].range="99999",t.stateNode.towers[5].blastRadius="999",t.stateNode.towers[5].fullCd="0"),null!=t.stateNode.towers[5]&&(t.stateNode.towers[5].damage="9999",t.stateNode.towers[5].range="99999",t.stateNode.towers[5].blastRadius="999",t.stateNode.towers[5].fullCd="0"),null!=t.stateNode.towers[6]&&(t.stateNode.towers[6].damage="9999",t.stateNode.towers[6].range="99999",t.stateNode.towers[6].blastRadius="999",t.stateNode.towers[6].fullCd="0"),null!=t.stateNode.towers[7]&&(t.stateNode.towers[7].damage="9999",t.stateNode.towers[7].range="99999",t.stateNode.towers[7].blastRadius="999",t.stateNode.towers[7].fullCd="0"),null!=t.stateNode.towers[8]&&(t.stateNode.towers[8].damage="9999",t.stateNode.towers[8].range="99999",t.stateNode.towers[8].blastRadius="999",t.stateNode.towers[8].fullCd="0"),null!=t.stateNode.towers[9]&&(t.stateNode.towers[9].damage="9999",t.stateNode.towers[9].range="99999",t.stateNode.towers[9].blastRadius="999",t.stateNode.towers[9].fullCd="0"),null!=t.stateNode.towers[10]&&(t.stateNode.towers[10].damage="9999",t.stateNode.towers[10].range="99999",t.stateNode.towers[10].blastRadius="999",t.stateNode.towers[10].fullCd="0"),null!=t.stateNode.towers[11]&&(t.stateNode.towers[11].damage="9999",t.stateNode.towers[11].range="99999",t.stateNode.towers[11].blastRadius="999",t.stateNode.towers[11].fullCd="0"),null!=t.stateNode.towers[12]&&(t.stateNode.towers[12].damage="9999",t.stateNode.towers[12].range="99999",t.stateNode.towers[12].blastRadius="999",t.stateNode.towers[12].fullCd="0"),null!=t.stateNode.towers[13]&&(t.stateNode.towers[13].damage="9999",t.stateNode.towers[13].range="99999",t.stateNode.towers[13].blastRadius="999",t.stateNode.towers[13].fullCd="0"),null!=t.stateNode.towers[14]&&(t.stateNode.towers[14].damage="9999",t.stateNode.towers[14].range="99999",t.stateNode.towers[14].blastRadius="999",t.stateNode.towers[14].fullCd="0"),null!=t.stateNode.towers[15]&&(t.stateNode.towers[15].damage="9999",t.stateNode.towers[15].range="99999",t.stateNode.towers[15].blastRadius="999",t.stateNode.towers[15].fullCd="0"),null!=t.stateNode.towers[16]&&(t.stateNode.towers[16].damage="9999",t.stateNode.towers[16].range="99999",t.stateNode.towers[16].blastRadius="999",t.stateNode.towers[16].fullCd="0"),null!=t.stateNode.towers[17]&&(t.stateNode.towers[17].damage="9999",t.stateNode.towers[17].range="99999",t.stateNode.towers[17].blastRadius="999",t.stateNode.towers[17].fullCd="0"),null!=t.stateNode.towers[18]&&(t.stateNode.towers[18].damage="9999",t.stateNode.towers[18].range="99999",t.stateNode.towers[18].blastRadius="999",t.stateNode.towers[18].fullCd="0"),null!=t.stateNode.towers[19]&&(t.stateNode.towers[19].damage="9999",t.stateNode.towers[19].range="99999",t.stateNode.towers[19].blastRadius="999",t.stateNode.towers[19].fullCd="0"),null!=t.stateNode.towers[20]&&(t.stateNode.towers[20].damage="9999",t.stateNode.towers[20].range="99999",t.stateNode.towers[20].blastRadius="999",t.stateNode.towers[20].fullCd="0")})),l.addEventListener("click",(()=>{t.stateNode.tiles[0]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[1]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[2]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[3]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[4]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[5]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[6]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[7]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[8]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[9]=[0,0,0,0,0,0,0,0,0,0],t.stateNode.tiles[10]=[0,0,0,0,0,0,0,0,0,0],window.alertf("You can now place Towers on any tile.")}));break;case"race":document.getElementById("finish").addEventListener("click",(()=>{t.stateNode.state.progress=t.stateNode.state.goalAmount,window.alertf("Get one question correct to finish the race.")}));break;case"kingdom":const i=document.getElementById("esp"),r=document.getElementById("taxes"),c=document.getElementById("setgold"),u=document.getElementById("sethappy"),m=document.getElementById("setmaterials"),p=document.getElementById("setpeople"),g=document.getElementById("max");i.addEventListener("click",(()=>{kingesp()})),r.addEventListener("click",(()=>{t.stateNode.taxCounter=99999,window.alertf("Disabled the Tax Toucan")})),c.addEventListener("click",(()=>{var e=window.promptf("How much gold would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.gold=e)})),u.addEventListener("click",(()=>{var e=window.promptf("How much happiness would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.happiness=goldz)})),m.addEventListener("click",(()=>{var e=window.promptf("How many materials would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.materials=e)})),p.addEventListener("click",(()=>{var e=window.promptf("How many people would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.people=e)})),g.addEventListener("click",(()=>{t.stateNode.state.gold=100,t.stateNode.state.people=100,t.stateNode.state.materials=100,t.stateNode.state.happiness=100,window.alertf("Maxed stats.")})),setInterval((()=>{if(null!=t.stateNode.state.guest.no.spawn&&(t.stateNode.state.guest.no.spawn="Dragon1")){confirm("Toucan detected, would you like to bypass it?")&&(t.stateNode.state.guest.no.spawn=null,window.alertf("You can say No safely now."))}if("Witch"==t.stateNode.state.guest.blook){confirm("Witch detected, would you like to set the outcome of yes to gaining riches?")&&(t.stateNode.state.guest.yes.array[0]={msg:"Hmmmm... It looks like your future has plenty of riches.",happiness:10,people:10,materials:10,gold:15},t.stateNode.state.guest.yes.array[1]={msg:"Hmmmm... It looks like your future has plenty of riches.",happiness:10,people:10,materials:10,gold:15},t.stateNode.state.guest.yes.array[2]={msg:"Hmmmm... It looks like your future has plenty of riches.",happiness:10,people:10,materials:10,gold:15},window.alertf("When you say yes you will gain:\nHappiness: 10\nPeople: 10\nMaterials: 10\nGold: 15"))}}),500);break;case"doom":const w=document.getElementById("lowstats"),y=document.getElementById("settokens"),b=document.getElementById("maxstats"),h=document.getElementById("infhlt");y.addEventListener("click",(()=>{let e=document.querySelector(".styles__playerEnergy___G4cGN-camelCase");var o=window.promptf("How many coins would you like?");null==o&&null==o&&NaN==o||(t.stateNode.state.coins=o,e.innerText=o,e.innerHTML=o,e.outerText=o,e.outerHTML=o,window.alertf("Set coins to "+o))})),b.addEventListener("click",(()=>{let e=document.querySelectorAll(".styles__innerPower___3tJ6M-camelCase"),o=document.querySelectorAll(".styles__powerBox___2sDuh-camelCase");t.stateNode.state.myCard.charisma=20,t.stateNode.state.myCard.strength=20,t.stateNode.state.myCard.wisdom=20,e[0].style="background-color: rgb(151, 15, 5); width: 100%;",e[1].style="background-color: rgb(7, 21, 93); width: 100%;",e[2].style="background-color: rgb(148, 12, 128); width: 100%;",o[0].innerText=t.stateNode.state.myCard.strength,o[1].innerText=t.stateNode.state.myCard.charisma,o[2].innerText=t.stateNode.state.myCard.wisdom,window.alertf("Set max stats.")})),w.addEventListener("click",(()=>{t.stateNode.state.enemyCard.charisma=0,t.stateNode.state.enemyCard.strength=0,t.stateNode.state.enemyCard.wisdom=0,window.alertf("Set enemy stats to 0")})),h.addEventListener("click",(()=>{t.stateNode.state.myLife=69420,window.alertf("Set Health to 69420")}));break;case"factory":const f=document.getElementById("mega"),v=document.getElementById("setcash"),N=document.getElementById("ng");f.addEventListener("click",(()=>{let e=t.stateNode.state.blooks;e[0]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[1]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[2]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[3]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[4]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[5]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[6]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[7]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[8]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5},e[9]={name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5}})),v.addEventListener("click",(()=>{t.stateNode.state.cash=window.promptf("How much cash would you like?")})),N.addEventListener("click",(()=>{t.stateNode.state.dance="",t.stateNode.state.lol="",t.stateNode.state.joke="",t.stateNode.state.showTour="",t.stateNode.state.hazards=["","","","",""],t.stateNode.state.glitcherName="",t.stateNode.state.glitch="",t.stateNode.state.glitchMsg="",t.stateNode.state.glitcherBlook="",window.alertf("Attempted to remove glitches.")}));break;case"fishing":const k=document.getElementById("frenzy"),E=document.getElementById("setweight"),L=document.getElementById("setlure");k.addEventListener("click",(()=>{t.stateNode.state.isFrenzy=!0})),E.addEventListener("click",(()=>{var e=window.promptf("How much weight would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.weight=e)})),L.addEventListener("click",(()=>{var e=window.promptf("How much lure would you like? (0-4)");null==e&&null==e&&NaN==e||(t.stateNode.state.lure=e)}));break;case"gold":const B=document.getElementById("setgold"),x=document.getElementById("choiceesp");B.addEventListener("click",(()=>{var e=window.promptf("How much gold would you like?");null==e&&null==e&&NaN==e||(t.stateNode.state.gold=e)})),x.addEventListener("click",(()=>{goldesp()}))}}(e)}"/play/racing"==a&&(t="race",o="Racing",e='<div id="LoadedGame"><button id="finish" class="hack">Finish Race</button></div><br>',n(t,e,o))}function kingesp(){function e(){document.getElementById("espp").remove()}!function(){let e=document.createElement("div");e.innerHTML='<div id="espp"><style>details>summary{cursor:pointer;transition:1s;list-style:circle}.button{font-size:1rem}</style><div style="padding-top:2px;font-size:1.5rem;text-align:center">Choice ESP</div><br><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">Yes:</summary><div id="c1h" class="button"></div><div id="c1p" class="button"></div><div id="c1g" class="button"></div><div id="c1m" class="button"></div></details><details open><summary style="padding:10px;font-size:1.5em;font-weight:bolder">No:</summary><div id="c2h" class="button"></div><div id="c2p" class="button"></div><div id="c2g" class="button"></div><div id="c2m" class="button"></div></details><br><button id="close" style="width:130px;height:30px;cursor:pointer;background:#333;border-radius:22px;border:none;font-size:1rem"><b>Close ESP</b></button><br><div style="font-size:.8rem">ui by <a href="https://github.com/Blooketware">Blooketware</a></div></div>',e.style="width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;",document.body.appendChild(e);var t=0,o=0,a=0,n=0;e.onmousedown=(s=window.event)=>{s.preventDefault(),a=s.clientX,n=s.clientY,document.onmouseup=()=>{document.onmouseup=null,document.onmousemove=null},document.onmousemove=s=>{(s=s||window.event).preventDefault(),t=a-s.clientX,o=n-s.clientY,a=s.clientX,n=s.clientY;let d=e.offsetTop-o>0?e.offsetTop-o:0,l=e.offsetLeft-t>0?e.offsetLeft-t:0;e.style.top=d+"px",e.style.left=l+"px"}}}(),document.getElementById("close").addEventListener("click",e),setInterval((()=>{null!=document.getElementById("espp")&&function(){let e=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;const t=e.stateNode.state.guest.no,o=e.stateNode.state.guest.yes,a=document.getElementById("c2g"),n=document.getElementById("c2h"),s=document.getElementById("c2p"),d=document.getElementById("c2m"),l=document.getElementById("c1g"),i=document.getElementById("c1h"),r=document.getElementById("c1p"),c=document.getElementById("c1m");null!=t.happiness?n.innerHTML=`Happiness: ${t.happiness}`:n.innerHTML=null,null!=t.people?s.innerHTML=`People: ${o.people}`:s.innerHTML=null,null!=t.gold?a.innerHTML=`Gold: ${t.gold}`:a.innerHTML=null,null!=t.materials?d.innerHTML=`Materials: ${t.materials}`:d.innerHTML=null,null!=o.happiness?i.innerHTML=`Happiness: ${o.happiness}`:i.innerHTML=null,null!=o.people?r.innerHTML=`People: ${o.people}`:r.innerHTML=null,null!=o.gold?l.innerHTML=`Gold: ${o.gold}`:l.innerHTML=null,null!=o.materials?c.innerHTML=`Materials: ${o.materials}`:c.innerHTML=null}()}),500)}function goldesp(){function e(){document.getElementById("esp").remove()}!function(){let e=document.createElement("div");e.innerHTML='<div id="esp"> <div style=" padding-top: 2px; font-size: 1.5rem; text-align: center;">Choice ESP</div><div id="c1" style="font-size: 1rem;">Choice 1:</div><div id="c2">Choice 2:</div><div id="c3">Choice 3:</div><br><button id="close" style="width: 130px; height: 30px; cursor: pointer; background: hsl(0, 0%, 20%); border-radius: 22px; border: none; font-size: 1rem;"><b>Close ESP</b></button><br><br><div style="font-size: 0.8rem;">ui by <a href="https://github.com/Blooketware">Blooketware</a></div></div>',e.style="width: 200px; background: rgb(31, 25, 30); border-radius: 13px; position: absolute; text-align: center; font-family: Nunito; color: white; overflow: hidden; top: 5%; left: 40%;",document.body.appendChild(e);var t=0,o=0,a=0,n=0;e.onmousedown=(s=window.event)=>{s.preventDefault(),a=s.clientX,n=s.clientY,document.onmouseup=()=>{document.onmouseup=null,document.onmousemove=null},document.onmousemove=s=>{(s=s||window.event).preventDefault(),t=a-s.clientX,o=n-s.clientY,a=s.clientX,n=s.clientY;let d=e.offsetTop-o>0?e.offsetTop-o:0,l=e.offsetLeft-t>0?e.offsetLeft-t:0;e.style.top=d+"px",e.style.left=l+"px"}}}(),document.getElementById("close").addEventListener("click",e),setInterval((()=>{!function(){const e=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.choices,t=document.getElementById("c1"),o=document.getElementById("c2"),a=document.getElementById("c3");t.innerHTML="Choice 1: "+e[0].text,o.innerHTML="Choice 2: "+e[1].text,a.innerHTML="Choice 3: "+e[2].text}()}),500)}function addUtils(){handleData("elements"),addListeners(),CheckGame()}start(),addUtils(),setInterval((()=>{CheckGame()}),1e4);