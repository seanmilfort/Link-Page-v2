import React from "react";
import { VStack, Box, Button } from "@chakra-ui/react";

const socials = [
  {
    text: "Newsletter",
    url: "https://news.seanmilfort.com/",
  },
  {
    text: "Blog",
    url: "https://blog.seanmilfort.com/",
  },
  {
    text: "Bluesky",
    url: "https://bsky.app/profile/seanmilfort.com/",
  },
  {
    text: "Resume",
    url: "https://seanmilfort.com/static/media/Sean_Milfort_Resume.0f84b725185fb6cd8834.pdf",
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
                return <Box key={socialMediaLinks.url}><a href={socialMediaLinks.url}><Button style={{color: "black", backgroundColor: "#E5EFE7", width: "400px"}}>{socialMediaLinks.text}</Button></a></Box>
            })}
        </VStack>
    </Box>)
}

export default SocialButtons;