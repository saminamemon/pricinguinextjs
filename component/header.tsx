import React from 'react'
import { Box, Heading, Text,Image } from "@chakra-ui/react"
import source from "../images/logo.svg"
export default function Header() {
    return (
        <Box
            as="section"
            color='gray.200'
            
             maxW="4000px"  bg='#40E0D0' p="6"
          


            pt="90px"
            pl='9px'
            pb="198px"
            textAlign={['left', "left", "center"]}>
            <Heading fontWeight='extrabold' color='white' fontSize={['3xl', "3xl", '5xl']}>
            15 days free trial</Heading>
            <Text fontSize={['lg', 'lg', '2xl']} color='white'pt='4'>Find simple plan for comprehensive automation</Text>
        </Box>

    )
}