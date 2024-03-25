const monsterHealth = document.getElementById("monster-health");
const playerHealth = document.getElementById("player-health");
const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const restartBtn = document.getElementById("restart-btn");
let bonusLife = document.getElementById("bonus-life");


function monsterDamage(damage){
    const damage_done = Math.random() * damage
    monsterHealth.value -= damage_done
    return damage_done
}

function playerDamage(damage){
    const damage_done = Math.random() * damage
    playerHealth.value -= damage_done;
    return damage_done
}

function increasePlayerHealth(level) {
  playerHealth.value += level;
}

function reduceBonusLife(){
    if(bonusLife.textContent >= 1){
        bonusLife.textContent -= 1;
    }
}

function healPlayer(heal_value, maxLifeLevel){
    // Setting the player health value to have a maximum value
    const newPlayerHealth = parseInt(playerHealth.value) + heal_value;
    if (newPlayerHealth > maxLifeLevel) {
      playerHealth.value = maxLifeLevel;
    } else {
      playerHealth.value = newPlayerHealth;
    }
}

function restartGame(maxLifeLevel){
    playerHealth.value = maxLifeLevel;
    monsterHealth.value = maxLifeLevel
    // Set bonus life to default of 2
    bonusLife.textContent = 2
}
