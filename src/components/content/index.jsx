import React, {useState} from 'react'
import { Input, Stack, InputGroup,InputLeftAddon,InputRightAddon,Button, Box} from '@chakra-ui/react'
import styles from './style.module.css'

export const Content  = () => {
const [username, setUsername] = useState();

const HandleChangeUsername = (e) => { 
    e.preventDefault();
    console.log(e.target.value);
    setUsername(e.target.value);
}
const [result, setResult] = useState('');

function getChoices() {
    const choicesOption = ['pierre', 'feuille', 'ciseaux'];
    const computerChoice = choicesOption[Math.floor(Math.random() * choicesOption.length)];
    let playerChoice = prompt("entrer votre choix parmi ces trois pierre, feuille, ciseaux : ");

    while (!choicesOption.includes(playerChoice)) {
      const playerChoice = prompt("essayer de nouveau, entrer votre choix dans cette liste (pierre, feuille, ciseaux): ");
    }
    setResult(checkWin(computerChoice, playerChoice));
}
function checkWin(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
      return "Il y a égalité !";
    } else if (
      (computerChoice === 'pierre' && playerChoice === 'ciseaux') ||
      (computerChoice === 'feuille' && playerChoice === 'pierre') ||
      (computerChoice === 'ciseaux' && playerChoice === 'feuille')
    ) {
      return `L'ordinateur gagne ! Il a choisi ${computerChoice}.`;
    } else {
      return `Vous gagnez ! Vous avez choisi ${playerChoice}.`;
    }
  }

  return (
    <div> 
        <h1 className= {styles.maintitle}>Everybody knows the game Rock, Paper, Scissor, so we don't need to give rules. Use your instinct </h1>
        <br></br>
        <Box bg='tomato' w='100%' p={4} color='white' className={styles.maintitle}>Game Pierre-Feuille-Ciseaux </Box>
        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' onClick={getChoices} size='lg'> Jouer </Button>
        <p>Résultat: {result}</p>
        </Stack>
    </div>
  )
}
