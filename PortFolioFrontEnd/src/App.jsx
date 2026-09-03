import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, HStack } from "@chakra-ui/react"

import './App.css'

function App() {
  

  return (
    <>
      <h1>App Page</h1>
      <HStack>
      <Button colorPalette="teal" variant="solid">Click me</Button>
      <Button disabled>Click me</Button>
    </HStack>
    </>
  )
}

export default App
