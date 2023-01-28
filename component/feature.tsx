import { Box, Heading,List, HStack,layout, ListIcon, ListItem, Stack, StackProps, Text,UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { global } from 'styled-jsx/css';



export function Features() {
    return (
        <Box maxW='1024px' m='center' pt='60px' pb='8' as='section' >
            <Box >
                
                <UnorderedList text-align="center" color="black">
                
                <ListItem text-align="center" alignItems="center">
                Sales Signals-Run-TimeNotification </ListItem>
                <ListItem>BluePrint Process Management </ListItem>
                <ListItem>Web-to-Case Forms </ListItem>
                <ListItem>Macros</ListItem>
                <ListItem>Inventory Management </ListItem>
                <ListItem> Validation Rules</ListItem>
                <ListItem>Automatic Field Update</ListItem>
                <ListItem>Google Adds Indegration </ListItem>
                <ListItem>Webhooks</ListItem>
                    </UnorderedList>
                    

                    

        </Box>
        </Box>
    );
}