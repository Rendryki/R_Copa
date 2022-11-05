function createGame(player1, hour, player2){
    return `
    <li>
            <img src="svg-images/countries/icon-${player1}.svg" alt="">
            <strong>${hour}</strong>
            <img src="svg-images/countries/icon-${player2}.svg" alt="">
    </li>
    `
}

let delay = -0.3
function createCard(date, day, games){
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    
    <h2>${date}<span>${day}</span></h2>

    <ul>

        ${games}

    </ul>

    </div>    
    `
}

document.querySelector("#cards").innerHTML = 

    createCard("24/11", "quinta", createGame("brazil", "07:00", "serbia") + createGame("brazil", "07:00", "serbia")) + createCard("28/11", "segunda", createGame("brazil", "13:00", "cameroon")) + createCard("02/12", "sexta", createGame("brazil", "16:00", "switzerland"))
