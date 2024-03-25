const maxLifeLevel = 100;
const playerAttackValue = 10;
const monsterAttackValue = 14;
const strongAttackValue = 16;
const healValue = 15;

const ATTACK_MODE = "ATTACK";
const STRONG_ATTACK_MODE = "STRONG ATTACK";

let playerHealthValue = maxLifeLevel;
let monsterHealthValue = maxLifeLevel;

function endGame() {
  //Check if player has bonus life
  const playerBonusLife = parseInt(bonusLife.textContent);
  if (playerHealthValue <= 0 && playerBonusLife > 0) {
    alert("You should have died but your bonus life saved you! Get healing now to continue fighting");
    reduceBonusLife()
  }else{
    // End game logic
    if (playerHealthValue > 0 && monsterHealthValue <= 0) {
      alert("You won!");
      // Restart Game
      resetGame();
    }else if(monsterHealthValue > 0 && playerHealthValue <= 0){
      alert("You lost!");
      // Restart Game
      resetGame();
    }else if(monsterHealthValue && playerHealthValue === 0){
      alert("A draw!");
      // Restart Game
      resetGame();
    }
  }
}

function attackControl(mode) {
  if (mode === ATTACK_MODE) {
    // Launch attack on monster
    const damageOnMonster = monsterDamage(playerAttackValue);
    monsterHealthValue -= damageOnMonster;
    // Launch attack on player
    const damageOnPlayer = playerDamage(monsterAttackValue);
    playerHealthValue -= damageOnPlayer;
  }
  if (mode === STRONG_ATTACK_MODE) {
    // Launch strong attack on monster
    const damageOnMonster = monsterDamage(strongAttackValue);
    monsterHealthValue -= damageOnMonster;
    // Launch attack on player
    const damageOnPlayer = playerDamage(monsterAttackValue);
    playerHealthValue -= damageOnPlayer;
  }
  // End Game
  endGame();
}

function resetGame(){
    restartGame(maxLifeLevel);
    playerHealthValue = maxLifeLevel;
    monsterHealthValue = maxLifeLevel;
}

function attackHandler() {
  attackControl(ATTACK_MODE);
}

function strongAttackHandler(){
    attackControl(STRONG_ATTACK_MODE)
}

function healer(){
  // Setting the player health value to have a maximum value
  const newPlayerHealth = playerHealthValue + healValue;
  if (newPlayerHealth > maxLifeLevel) {
    healPlayer(healValue, maxLifeLevel);
    playerHealthValue = maxLifeLevel;
  } else {
    healPlayer(healValue, maxLifeLevel);
    playerHealthValue = newPlayerHealth;
  }
}


attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
restartBtn.addEventListener("click", resetGame)
healBtn.addEventListener("click", healer)
