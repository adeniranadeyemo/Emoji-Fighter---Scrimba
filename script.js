let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  const fighter1 = fighters[Math.floor(Math.random() * fighters.length)]
  const fighter2 = fighters[Math.floor(Math.random() * fighters.length)]
  stageEl.textContent = fighter1 + " vs " + fighter2
})