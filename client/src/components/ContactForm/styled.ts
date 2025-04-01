import styled, { css } from 'styled-components';

export const Form = styled.form<{ $notModal?: boolean }>`
  width: 670px;
  padding: 0 54px;

  ${(props) =>
    props.$notModal &&
    css`
      @media (max-width: ${(props) => props.theme.screens.laptopL}) {
        width: 580px;
      }
  `}

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 0 20px;
  }

  /* ${(props) =>
    props.$notModal &&
    css`
      @media (max-width: 700px) {
        width: 580px;
      }
    `} */

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: ${(props) => (props.$notModal ? '100%' : '335px')};
    ${(props) => props.$notModal && 'padding: 0;'};
    height: 453px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3<{ $notModal?: boolean }>`
  display: ${(props) => (props.$notModal ? 'none' : 'block')};
  color: ${(props) => props.theme.colors.main};
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -0.96px;
  margin-bottom: 28px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 23px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: block;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 22px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 28px;
  }
`;

export const Span = styled.span<{ $error?: boolean }>`
  /* line-height: 289.215%; */
  letter-spacing: -0.48px;
  ${(props) =>
    props.$error &&
    css`
      font-weight: 600;
      color: ${(props) => props.theme.colors.error};
    `}

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    display: none;
  }
`;

export const Input = styled.input<{ $error?: boolean }>`
  padding: 20px 21px;
  height: 59px;
  border: ${(props) => (props.$error ? `2px solid ${props.theme.colors.error}` : 0)};
  outline: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);

  font-family: 'Manrope';
  color: ${(props) => (props.$error ? props.theme.colors.error : props.theme.colors.text)};
  font-weight: 400;
  font-size: 1em;
  line-height: 289.215%;
  letter-spacing: -0.48px;

  &::placeholder {
    font-family: 'Manrope';
    font-size: 1em;
    color: ${(props) => (props.$error ? props.theme.colors.error : props.theme.colors.text)};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 8px 0;
    height: auto;

    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${(props) => (props.$error ? props.theme.colors.error : '#383A3B')};
    background-color: transparent;

    line-height: normal;
  }
`;

export const Textarea = styled.textarea<{ $error?: boolean }>`
  resize: none;
  padding: 20px 21px;
  height: 157px;
  border: ${(props) => (props.$error ? `1px solid ${props.theme.colors.error}` : 0)};
  outline: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);

  font-family: 'Manrope';
  color: ${(props) => (props.$error ? props.theme.colors.error : props.theme.colors.text)};
  font-weight: 400;
  font-size: 1em;
  /* line-height: 289.215%; */
  letter-spacing: -0.48px;

  &::placeholder {
    font-family: 'Manrope';
    font-size: 1em;
    color: ${(props) => (props.$error ? props.theme.colors.error : props.theme.colors.text)};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 8px 0;
    height: 39px;

    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${(props) => (props.$error ? props.theme.colors.error : '#383A3B')};
    background-color: transparent;

    /* line-height: normal; */
  }
`;

export const BtnHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    flex: 1;
  }
`;

export const Submit = styled.input.attrs<{ $notModal?: boolean; $nonClickable: boolean }>((props) => ({
  type: 'submit',
  value: props.$nonClickable ? 'Sending...' : (props.$notModal ? 'Send message' : 'Submit'),
}))`
  cursor: pointer;
  width: 100%;
  height: 58px;
  border: 0;
  outline: 0;
  border-radius: 16px;
  background: ${(props) => (props.$notModal ? props.theme.colors.background : props.theme.colors.main)};
  letter-spacing: -0.48px;
  text-align: center;
  font-family: 'Manrope';
  font-size: 1em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  pointer-events: ${(props) => props.$nonClickable ? 'none' : 'auto'};
  opacity: ${(props) => props.$nonClickable ? 0.5 : 1};

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    /* margin-top: 80px; */
    background: ${(props) => props.theme.colors.main};
  }
`;
