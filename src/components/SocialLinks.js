import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { HStack, Box } from "@chakra-ui/react";
import {
    faXTwitter,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
    faMastodon,
    faThreads
  } from "@fortawesome/free-brands-svg-icons";

const socials = [
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
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/seanmilfort",
    },
    {
      icon: faMastodon,
      url: "https://techhub.social/@seanmilfort",
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
        <HStack spacing={4} style={{justifyContent: "center", alignItems: "center"}}>
            {socials.map(socialMediaLinks => {
                return <Box key={socialMediaLinks.url}><a rel="me noopener" href={socialMediaLinks.url}><FontAwesomeIcon icon={socialMediaLinks.icon} size="2x" /></a></Box>
            })}
        </HStack>
    </Box>)
}

export default SocialLinks;