import styled, { keyframes } from 'styled-components';
import { Icon } from '../../../../ui/Icon';
import { Link } from 'react-router-dom';
import { Route } from '../../../../router/routes';

const Circle = styled.div`
  margin-left: -40px;
  width: 283px;
  height: 283px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.secondary3};
  background: linear-gradient(128deg, #5e45ec 16.12%, #ec75ff 90.7%),
    linear-gradient(124deg, #a861eb 6.62%, #08cec9 84.79%);
  transform: rotateZ(180deg);

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    margin-left: -20px;
    width: 210px;
    height: 210px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: -35px;
    margin-left: -60px;
  }
`;

const PagarahpAnimation = keyframes`
    0%, 50%, 100% {
        transform: translateX(0px);
    }
    25%, 75% {
        transform: translateX(5px);
    }
`;

const Wrapper = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotateZ(180deg);

  &:hover > p {
    animation: ${PagarahpAnimation} 2s infinite ease-in-out;
  }
`;

const Paragraph = styled.p`
  margin: 37px 0 8px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 152.026%;
  text-transform: capitalize;

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    font-size: 0.875em;
  }
`;

export const MoreAboutCircle = () => {
  return (
    <Circle>
      <Wrapper to={Route.Studio}>
        <Icon $name="circle" $size={54} />
        <Paragraph dangerouslySetInnerHTML={{ __html: 'MORE ABOUT OUR<br/>STUDIO' }} />
        <Icon $name="arrow" $size={15} />
      </Wrapper>
    </Circle>
  );
};
