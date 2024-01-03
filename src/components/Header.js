import { Heading, Text, Avatar, Box, VStack } from "@chakra-ui/react";
import React from "react";
import profilepicture from '../images/seanmilfort_profile.jpg'

const Header = () => {
return (
    <Box marginTop="5em" justifyContent={"center"} >
        <VStack>
            <Avatar size="2xl" name="Sean Milfort" src={profilepicture} />
            <Heading size="xl">Hello, I'm Sean Milfort!</Heading>
            <Text size="md">Click on one of my links to find out more information!</Text>
        </VStack>
    </Box>
)
}

export default Header;