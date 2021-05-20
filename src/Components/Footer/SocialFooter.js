import styled from "styled-components";

import { ReactComponent as Facebook } from "../../assets/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socials/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/socials/twitter.svg";

const SocialFooter = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Logo Photographer</Logo>
        <SocialWrapper>
          <IconButton backgroundColor={"#3b5998"}>
            <FacebookIcon />
          </IconButton>
          <IconButton
            backgroundColor={
              "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
            }
          >
            <InstagramIcon />
          </IconButton>
          <IconButton backgroundColor={"#23ACED"}>
            <TwitterIcon />
          </IconButton>
        </SocialWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #161616;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Logo = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
`;

const SocialWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const IconButton = styled.button`
  width: 29px;
  height: 38px;
  border-radius: 50%;
  border: transparent;
  background-color: #222222;
  &:hover {
    background: ${(props) => props.backgroundColor};
    cursor: pointer;
    transition: background 0.5s ease;
  }
`;

const FacebookIcon = styled(Facebook)`
  height: 20px;
  width: 20px;
  fill: #535353;
  ${IconButton}:hover & {
    fill: #ffffff;
    transition: fill 0.5s ease;
  }
`;

const InstagramIcon = styled(Instagram)`
  width: 20px;
  height: 20px;
  fill: #535353;
  ${IconButton}:hover & {
    fill: #ffffff;
    transition: fill 0.5s ease;
  }
`;

const TwitterIcon = styled(Twitter)`
  width: 20px;
  height: 20px;
  fill: #535353;
  ${IconButton}:hover & {
    fill: #ffffff;
    transition: fill 0.5s ease;
  }
`;

export default SocialFooter;
