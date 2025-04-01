import styled from 'styled-components';

export const Form = styled.form`
  max-width: 619px;
  width: 100%;
  display: flex;
  gap: 14px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 311px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Input = styled.input<{ $error: boolean }>`
  flex-grow: 1;
  padding: 4px 24px;
  height: 55px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
  color: ${(props) => (props.$error ? props.theme.colors.error : '#DEDEDE')};
  font-family: 'Manrope';
  font-size: 1em;
  font-weight: ${(props) => (props.$error ? 700 : 400)};
  line-height: 289.215%;
  border: ${(props) => (props.$error ? `1px solid ${props.theme.colors.error}` : 0)};
  outline: 0;

  &::placeholder {
    color: ${(props) => (props.$error ? props.theme.colors.error : '#DEDEDE')};
    font-family: 'Manrope';
    font-size: 1em;
    font-weight: ${(props) => (props.$error ? 700 : 400)};
    line-height: 289.215%;
  }
`;

export const Subscribe = styled.input.attrs(() => ({
  type: 'submit',
  value: 'Subscribe',
}))`
  border: 0;
  outline: 0;
  width: 150px;
  height: 55px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.secondary2};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 1em;
  line-height: 289.215%;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
  }
`;
