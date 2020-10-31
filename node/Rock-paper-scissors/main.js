let game = require('./game')

function main() {
    process.stdout.write('石头-剪刀-布 \n')
    
    process.stdin.on('data', (input) => {
        input = input.toString().trim()
        
        input && game(input)
    })
}

main()