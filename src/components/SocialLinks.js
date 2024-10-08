import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { HStack, Box, Stack } from "@chakra-ui/react";
import {
    faXTwitter,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
    faMastodon,
    faThreads,
    faMedium
  } from "@fortawesome/free-brands-svg-icons";

const socialsTop = [
  {
    icon: faXTwitter,
    url: "https://twitter.com/seanmilfort",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/seanmilfort/",
  },
  {
    icon: faThreads,
    url: "https://www.threads.net/@seanmilfort/",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@seanmilfort",
  },
  {
    icon: faTiktok,
    url: "https://www.tiktok.com/@seanmilfort",
  }
  ];
  const socialsBottom = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faMedium,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faMastodon,
      url: "https://mastodon.social/@seanmilfort",
    },
    {
        icon: faGithub,
        url: "https://github.com/seanmilfort",
      },
    {
        icon: faEnvelope,
        url: "mailto: seanmilfort@me.com",
      }
  ];


const SocialLinks = () => {
    return (<Box marginTop="2em" >
        <Stack direction={["column", "column", "row"]} spacing={4} justifyContent={"center"} alignItems="center">
          <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
              {socialsTop.map(socialMediaLinks => {
                  return <Box key={socialMediaLinks.url}><a rel="me" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
              })}
          </HStack>
          <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
              {socialsBottom.map(socialMediaLinks => {
                  return <Box key={socialMediaLinks.url}><a rel="me" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
              })}
          </HStack>
        </Stack>
    </Box>)
}

export default SocialLinks;
