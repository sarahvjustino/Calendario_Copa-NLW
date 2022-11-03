function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/${player1}-flag.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}-flag.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'quinta',
    createGame('brazil', '16:00', 'serbia') +
    createGame('uruguay', '10: 00', 'south-korea')) +

  createCard('28/11', 'segunda',
    createGame('brazil', '13:00', 'switzerland') + createGame('uruguay', '16:00', 'portugal')) +

  createCard('02/12', 'sexta',
    createGame('brazil', '16:00', 'cameroon') + createGame('south-korea', '12:00', 'portugal'))
