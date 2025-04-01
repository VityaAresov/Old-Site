import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 1380px;
  box-sizing: content-box !important;

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    max-width: 1060px;
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 10px)`}) {
    padding-right: 0;
  }
`;

export const StyledTabs = styled.ul`
  margin-top: 64px;
  margin-bottom: 55px;
  display: flex;
  gap: 18px;

  @media (max-width: 1425px) {
    justify-content: space-between;
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 10px)`}) {
    margin-top: 32px;
    margin-bottom: 24px;
    flex-wrap: nowrap;
    justify-content: unset;
    gap: 12px;

    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.button.attrs<{ $isActive: boolean }>(() => ({
  type: 'button',
}))`
  cursor: pointer;
  width: 262px;
  height: 63px;
  border-radius: 16px;
  border: 1.5px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Poppins', 'Manrope', sans-serif;
  font-size: 1em;
  font-weight: 500;
  line-height: 63px;
  letter-spacing: -0.48px;
  text-align: center;
  transition: background-color 300ms ease-in-out;
  background-color: ${(props) => (props.$isActive ? props.theme.colors.main : 'transparent')};

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
  }

  @media (max-width: ${(props) => props.theme.screens.laptopL}) {
    width: 222px;
    width: max-content;
    padding: 0 40px;
  }

  @media (max-width: 1100px) {
    padding: 0 20px;
  }

  @media (max-width: ${(props) => `calc(${props.theme.screens.tablet} + 10px)`}) {
    width: 262px;
    padding: 0;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: max-content;
    padding: 0 20px;
    height: 47px;
    line-height: 47px;
    font-size: 0.875em;
    letter-spacing: -0.42px;
  }
`;
