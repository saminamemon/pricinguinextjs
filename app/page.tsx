"use client"
import { Button, Link } from '@chakra-ui/react';


import Header from "../component/header"
import Pricing from "../component/pricing"
import { Features } from "../component/feature"


export default function Home() {
  return (
    <div>
      <Button colorScheme='purple'>Feature</Button>
      
      <Button colorScheme='blue'>Pricing</Button>
      
      <Button colorScheme='blue'>Webinars</Button>
      
      <Button colorScheme='blue'>Resources</Button>
      <Button colorScheme='cyan'><Link href="/name">LOGIN</Link></Button>
      <Header />
      <Pricing />
      <Features />
    </div>
  )
}


    




     

