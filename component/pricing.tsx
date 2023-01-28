import { Box, Icon, Flex, Text, Heading, Button, HStack, StackProps, Stack } from "@chakra-ui/react"

import React from 'react'

export const Listitem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
        
            <text>{children}</text>
        </HStack>
    )
}

export default function Pricing() {
    return (
        
            <Box
                display='center'
                flexDirection={['column', 'column', 'row']}
                maxW='400px'
                margin='auto'
                mt='-150px'
                borderRadius='350px'
                overflow='show'
                boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
            >

                <Flex >
                    <Box bgColor="#F0EAFB" p="30px" textAlign="center">
                        <Text fontWeight="bold"  fontSize="24px">PROFESSIONAL</Text>
                        <Heading as="h3" fontSize="60px" mt="16px">$750/month</Heading>

                        <Button color="purple" colorScheme="purple" borderRadius="8px" size="lg" width="282px" mt="24px"> Get Started</Button>
                    </Box>
                </Flex>


                 
        </Box>



    )

}