const MOVES = {
    rock: [0, 'scissors', '✊'],
    paper: [1, 'rock','🖐'],
    scissors: [2, 'paper','✌' ]
}

let i = 0
function play(move) {
    let npcMove = computerAuto()

    let msg = `you:${MOVES[move][2]} npc: ${MOVES[npcMove][2]}`
    console.log(msg)

    if (draw(move, npcMove)) {
        console.log('-平局-')
    } else if (draw(swich(move), npcMove)) {
        console.log('你赢了！')
        ++i
    } else {
        console.log('你输了~')
    }
    i > 3 && process.exit()
}

function computerAuto() {
    let moveNo = Math.floor(Math.random() * 3)
    return Object.entries(MOVES).find(item => {
        let [, value] = item
        return value[0] === moveNo
    })[0]
}

function swich(key) {
    return MOVES[key][1]
}

function draw(a, b) {
    return a === b
}

module.exports = play
