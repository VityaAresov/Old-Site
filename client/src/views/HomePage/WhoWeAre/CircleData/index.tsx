import styled from 'styled-components';

const Circle = styled.div`
  width: 283px;
  height: 283px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.secondary3};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;

  &:not(:first-of-type) {
    margin-left: -40px;
  }

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: 210px;
    height: 210px;

    &:not(:first-of-type) {
      margin-left: -20px;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    &:not(:first-of-type) {
      margin-top: -35px;
    }
    &:nth-child(1n) {
      margin-left: -80px;
    }
    &:nth-child(2n) {
      margin-left: 80px;
    }
  }
`;

const Nums = styled.div`
  font-family: 'Montserrat';
  font-size: 3.125em;
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
  line-height: 92.549%;

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    font-size: 2.8em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 2em;
    line-height: normal;
  }
`;

const Description = styled.div`
  font-family: 'Montserrat';
  text-align: center;
  font-weight: 500;
  line-height: 152.026%;
  text-transform: capitalize;

  @media (max-width: ${(props) => props.theme.screens.laptop}) {
    font-size: 0.875em;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.95em;
    line-height: normal;
  }
`;

type TCircleDataProps = {
  num: string;
  text: string;
};

export const CircleData: React.FC<TCircleDataProps> = ({ num, text }) => {
  return (
    <Circle>
      <Nums>{num}</Nums>
      <Description dangerouslySetInnerHTML={{ __html: text }} />
    </Circle>
  );
};
