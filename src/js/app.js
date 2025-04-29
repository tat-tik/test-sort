export default function sorting(players) {
  const sortPlayers = [...players].sort((a, b) => b.health - a.health);
  return sortPlayers;
}

console.log('app worked');