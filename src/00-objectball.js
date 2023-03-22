const gameObject=()=>(
    {
        home:
            {teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:
            {'hplayer':
                {number:0,
                shoe:16,
                points:22,
                rebounds:12,
                assists:12,
                steals:3,
                blocks:1,
                slamDunks:1}  
            }
            
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:
            {'aplayer':
                {number:4,
                shoe:18,
                points:10,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamDunks:2}  
            }
            
        }
    }

)

let object = gameObject();
function homeTeamName() {
    return object["home"]["teamName"];
  }
console.log(homeTeamName());

function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  console.log(homeTeamName());


const homeTeam = gameObject()['home']
const awayTeam = gameObject()['away']
const allPlayers = {...homeTeam['players'],...awayTeam['players']}

const numPointsScored=(playerName)=>{
    for (player in allPlayers){
        if (player==playerName){
         return allPlayers[playerName]['points']  
        }
    }
    
}
console.log(numPointsScored('aplayer'))

const shoeSize=(playerName)=>{
    for (player in allPlayers){
        if (player==playerName){
         return allPlayers[playerName]['shoe']  
        }
    }
    
}
console.log(shoeSize('aplayer'))

function teamColors(team) {
    return homeTeam.teamName === team ? homeTeam.colors : awayTeam.colors;
  }
console.log(teamColors('Charlotte Hornets'))

function teamNames() {
    return [homeTeam.teamName, awayTeam.teamName];
}
console.log(teamNames())

function playerNumbers(targetTeam){
    
    let playerNumbersArray = [];
    for(let team in object){
        if(targetTeam === object[team].teamName){
            
            for(let player in object[team].players){
                console.log(player)
                playerNumbersArray.push(object[team].players[player].number)
            }
        }
    }
    return playerNumbersArray;
}
console.log(playerNumbers('Charlotte Hornets'))

const playerStats=playerName=>{
    for (player in allPlayers){
        if (player==playerName){
            return allPlayers[playerName]
        }

    }
}
console.log(playerStats('aplayer'))

function bigShoeRebounds(){
    let biggestShoe = 0;
    let biggestShoePlayerRebounds = 0;
        for(let player in allPlayers){
            if(allPlayers[player].shoe > biggestShoe){
                biggestShoe = allPlayers[player].shoe;
                biggestShoePlayerRebounds = allPlayers[player].rebounds;
                biggestShoePlayerName = player
            }
        }
    
    console.log(biggestShoePlayerName)
    console.log("Shoe size: ", biggestShoe)
    return biggestShoePlayerRebounds;
}
console.log(bigShoeRebounds())

const mostPointsScored=()=>{
    let mostPoints=0
    let highScorer='';
    for(let player in allPlayers){
        if(allPlayers[player].points > mostPoints){
            mostPoints=allPlayers[player].points;
            highScorer=player
        }
    }
    console.log(highScorer)
    console.log(`Points: ${mostPoints}`)
}
console.log(mostPointsScored())