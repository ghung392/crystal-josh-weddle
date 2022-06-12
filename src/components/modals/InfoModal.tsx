import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Welcome to Weddle!<br/><br/>
      </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the colour of the tiles will
        change to show how close your guess was to the word. Keep in mind that unlike Wordle, 
        the words in this Weddle are tied to Crystal and Josh just like the knot that was tied earlier! 
        They may even be words that don't exist in normal dictionaries!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
       <br/><br/> The better you do, the better the kiss Crystal and Josh will do! 
        Feel free to help one another at your table. The more kisses the merrier! 
        Below are the following kisses you can win based on the number of guesses it took you to guess the secret word.<br/><br/>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        1 - Choose ANY kiss
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        2 - Hold a kiss for 10 seconds
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        3 - Jumping into one's arms
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        4 - The Dip
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        5 - Behind the back
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        6 - Just a peck
      </p>
    </BaseModal>
  )
}
