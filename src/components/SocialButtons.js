import React from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

const socials = [
  {
    text: "Newsletter",
    url: "https://news.seanmilfort.com/",
  },
  {
    text: "Latest Blog Post",
    url: "https://blog.seanmilfort.com/my-goals-for-2024-b04c00914fa1?sk=8619f5ea364c1515883b86066e0d8cb0",
  },
  {
    text: "Bluesky",
    url: "https://bsky.app/profile/seanmilfort.com/",
  },
  {
    text: "Resume",
    url: "https://resume.seanmilfort.com",
  },
  {
    text: "Website",
    url: "https://seanmilfort.com/",
    }
  ];


const SocialButtons = () => {
    return (<Box marginTop="2em" >
        <VStack spacing={4}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a href={socialMediaLinks.url}><Button style={{color: "black", backgroundColor: "#E5EFE7", width: "400px", maxWidth:"90%"}}>{socialMediaLinks.text}</Button></a></Box>
            })}
        </VStack>
    </Box>)
}

export default SocialButtons;