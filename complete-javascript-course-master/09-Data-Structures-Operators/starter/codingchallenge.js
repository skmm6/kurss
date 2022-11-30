'use strict';
/*
// coding challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// КОДИНГ ЧЕЛЕНДЖ 3 ===================================
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3
console.log(`Событие происходило каждые ${90 / gameEvents.size} минут`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`Событие происходило каждые ${time / gameEvents.size} минут`);

// 4
for (const [time, event] of gameEvents)
  console.log(
    `${time <= 45 ? '[ПЕРВЫЙ ТАЙМ]' : '[ВТОРОЙ ТАЙМ]'} ${time}: ${event}`
  );
// КОДИНГ ЧЕЛЕНДЖ 3 ===================================


// for (const name of game.scored) {
//   console.log(`Гол ${i + 1}: ${name}`);
// }
// КОДИНГ ЧЕЛЕНДЖ 2 ===================================

// 1.
for (const [i, players] of game.scored.entries()) {
  console.log(`Гол ${i + 1}: ${players}`);
}
// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'ничью' : `победу ${game[team]}`;
  console.log(`Коэффициент на ${teamStr}... ${odd} `);
}
// бонус
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
// КОДИНГ ЧЕЛЕНДЖ 2 ===================================
// const properties = Object.keys(game.scored);

// for (const gol of properties) {
//   console.log(`Гол ${+gol + 1}: ${game.scored[gol]}`);
// }

// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Гол ${i + 1}: ${game.scored[i]}`);
// }


// 1)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)
const [GK, ...fieldPlayers] = players1;
console.log(GK, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

printGoals(...game.scored);

// 7)
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/
