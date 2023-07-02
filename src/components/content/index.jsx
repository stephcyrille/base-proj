import React, {useState} from 'react'
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react'

export const Content = () => {
    const [username,setUsername]=useState();

    const HandleChangeUsername=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setUsername(e.target.value)
    }

  return (
    <div>
        <label htmlFor="username">Saisissez votre nom</label>
        <Input type="text" id='username' onChange={HandleChangeUsername} />
        <br />

        <h2>Votre nom saissi est: <b>{username}</b></h2>
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftAddon children='+234' />
                <Input type='tel' placeholder='phone number' />
            </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
            <InputGroup size='sm'>
                <InputLeftAddon children='https://' />
                <Input placeholder='mysite' />
                <InputRightAddon children='.com' />
            </InputGroup>
        </Stack>

    </div>
  )
}
