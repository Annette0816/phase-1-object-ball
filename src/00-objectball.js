function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Call gameObject() and log the output to check it
  console.log(gameObject());
  

  function numPointsScored(playerName) {
    const game = gameObject();
    
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }

  function teamColors(teamName) {
    const game = gameObject();
    
    for (let teamKey in game) {
      const team = game[teamKey];
      
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
  }

  function teamNames() {
    const game = gameObject();
    const teams = [];
  
    for (let teamKey in game) {
      teams.push(game[teamKey].teamName);
    }
  
    return teams;
  }

  function playerNumbers(teamName) {
    const game = gameObject();
    
    for (let teamKey in game) {
      const team = game[teamKey];
      
      if (team.teamName === teamName) {
        const numbers = [];
        for (let player in team.players) {
          numbers.push(team.players[player].number);
        }
        return numbers;
      }
    }
  }

  
  function playerStats(playerName) {
    const game = gameObject();
    
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
  
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      for (let player in players) {
        if (players[player].shoe > largestShoe) {
          largestShoe = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
  
    return rebounds;
  }

  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = '';
  
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
  
    return topPlayer;
  }

  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else {
      return game.away.teamName;
    }
  }

  function doesLongNameStealATon() {
    const game = gameObject();
    const longNamePlayer = playerWithLongestName();
    let mostSteals = 0;
    let stealsLeader = '';
  
    for (let teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
  
      for (let player in players) {
        if (players[player].steals > mostSteals) {
          mostSteals = players[player].steals;
          stealsLeader = player;
        }
      }
    }
  
    return longNamePlayer === stealsLeader;
  }
  
