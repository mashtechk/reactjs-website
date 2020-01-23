import React from "react"
import { Box, Text, Button, Flex } from "rebass"
import { heroImg, heroBrandmark } from "../images"
import Container from "./container"

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      backgroundImage: `url("${heroImg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "120vh",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "darkBlue",
        width: "inherit",
        height: "inherit",
        opacity: 0.85,
      }}
    />

    <Flex
      alignItems="center"
      css={{
        position: "absolute",
        top: "-5vh",
        left: 0,
        width: "100%",
        height: "100%",
        lineHeight: 1,
        zIndex: 1,
      }}
    >
      <Container>
        <Text fontSize={5} color="gold" fontWeight="body" zIndex={2}>
          ★★★ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
        </Text>
        <Text fontSize={6} fontWeight="hero" color="white" zIndex={2}>
          WE ARE
        </Text>
        <Text fontSize={5} fontWeight="hero" color="lightBlue" zIndex={2}>
          REACTJS
        </Text>
        <Text fontSize={5} fontWeight="hero" color="gold" zIndex={2}>
          PHILIPPINES
        </Text>
        <Button
          sx={{
            marginTop: 3,
            py: 2,
            px: 3,
            outline: 0,
            fontSize: 2,
          }}
        >
          JOIN THE COMMUNITY
        </Button>
      </Container>
    </Flex>

    <Box
      sx={{
        backgroundColor: "darkBlue",
        width: "100%",
        height: "100%",
        backgroundImage: `url("${heroImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        WebkitMaskImage: `url("${heroBrandmark}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "right",
        WebkitMaskPositionY: "-4rem",
      }}
    />
  </Box>
)

export default Hero
