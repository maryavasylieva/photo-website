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
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </SocialWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #161616;
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
  background: #222222;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: background 0.5s ease;
  }
`;

const FacebookIcon = styled(Facebook)`
  height: 20px;
  width: 20px;
  fill: #535353;
`;

const InstagramIcon = styled(Instagram)`
  width: 20px;
  height: 20px;
  fill: #535353;
`;

const TwitterIcon = styled(Twitter)`
  width: 20px;
  height: 20px;
  fill: #535353;
`;

export default SocialFooter;
