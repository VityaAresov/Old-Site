import styled from 'styled-components';
import { Button } from '../../../ui/Button';
import { Controls } from '../../HomePage/OurClients/styled';

export const Section = styled.section`
  padding-bottom: 100px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 56px;
  }
`;

export const GridCollage = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
  grid-auto-rows: 360px;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    grid-auto-rows: 340px;
  }
`;

export const LoadButton = styled(Button)<{ $hide: boolean }>`
  margin-top: 64px;
  display: ${(props) => (props.$hide ? 'none' : 'block!important')};
  width: 262px;
  height: 63px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    background-color: transparent !important;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 28px;
    width: 104px;
    height: 47px;
    font-size: 0.875em;
    letter-spacing: -0.42px;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 70vw;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: 90vw;
  }
`;

export const FullScreenImage = styled.img`
  width: 100%;
  height: calc(90vh - 58px - 54px);
  object-fit: contain;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: calc(60vh - 58px - 54px);
  }
`;

export const LeftControls = styled(Controls)`
  margin-left: 20px;
  border: 0;
  background: ${(props) => props.theme.colors.background}!important;

  &:hover {
    transform: scale(1.1);
  }

  & i {
    transform: rotate(-135deg);
  }
`;

export const RightControls = styled(Controls)`
  margin-right: 20px;
  border: 0;
  background: ${(props) => props.theme.colors.background}!important;

  &:hover {
    transform: scale(1.1);
  }

  & i {
    transform: rotate(45deg);
  }
`;

export const NoContent = styled.h2`
  padding-top: 45px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
`;
