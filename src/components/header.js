import React from "react";
import { StyledHeader } from "./styles/header.styled";
import { Container } from "./styles/container.styled";
import { Nav } from "./styles/header.styled";
import { Logo } from "./styles/header.styled";
import { Button } from "./styles/button.styled";
import { Flex } from "./styles/flex.styled";
import { Image } from "./styles/header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience.Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
