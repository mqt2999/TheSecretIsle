function MemoryGame({options, setOptions, highScore, setHighScore}) {
    const [game, setGame] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])
  
    const colors = [
    '#e34132',
    '#6ca0dc',
    '#944743',
    '#dbb2d1',
    '#ec9787',
    '#00a68c',
    '#645394',
    '#6c4f3d',
    '#ebe1df',
    '#bc6ca7',
    '#bfd833',
  ]

  useEffect(() => {
    const newGame = []
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        colorId: i,
        color: colors[i],
        flipped: false,
      }
      const secondOption = {
        id: 2 * i + 1,
        colorId: i,
        color: colors[i],
        flipped: false,
      }

      newGame.push(firstOption)
      newGame.push(secondOption)
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5)
    setGame(shuffledGame)
  }, [])

  useEffect(() => {
    const finished = !game.some(card => !card.flipped)
    if (finished && game.length > 0) {
      setTimeout(() => {
        const bestPossible = game.length
        let multiplier
  
        if (options === 12) {
          multiplier = 5
        } else if (options === 18) {
          multiplier = 2.5
        } else if (options === 24) {
          multiplier = 1
        }
  
        const pointsLost = multiplier * (0.66 * flippedCount - bestPossible)
  
        let score
        if (pointsLost < 100) {
          score = 100 - pointsLost
        } else {
          score = 0
        }
  
        if (score > highScore) {
          setHighScore(score)
          const json = JSON.stringify(score)
          localStorage.setItem('memorygamehighscore', json)
        }
  
        const newGame = confirm('You Win!, SCORE: ' + score + ' New Game?')
        if (newGame) {
          const gameLength = game.length
          setOptions(null)
          setTimeout(() => {
            setOptions(gameLength)
          }, 5)
        } else {
          setOptions(null)
        }
      }, 500)
    }
  }, [game])
  if (game.length === 0) return <div>loading...</div>
  else {
    return (
      <div id="cards">
        {game.map((card, index) => (
          <div className="card" key={index}>
            <Card
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    )
  }
}

function Card(props) {
  return <div>i'm a card</div>
}