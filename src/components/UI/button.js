import styled from 'utils/styles'
import { getColors } from 'utils/utility'

export const PrimaryBtn = styled.button`
  height: 42px;
  border: 2px solid
    ${({ userTheme }) => getColors('buttons', 'primary', userTheme ?? '')};
  color: inherit;
  border-radius: 47px;
  padding: ${({ icon }) => (icon ? '28px 12px' : '6px 24px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: transparent;
  transition: border-color 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    background-color 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover:not(:disabled) {
    background-color: ${getColors('buttons', 'primary', '')};
    border-color: ${({ userTheme }) =>
    getColors('main', 'background', userTheme)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const SecondaryBtn = styled.button`
  height: 42px;
  border: 2px solid ${getColors('buttons', 'primary', '')};
  border-radius: 47px;
  padding: ${({ icon }) => (icon ? '28px 12px' : '6px 24px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #fff;
  background-color: ${getColors('buttons', 'secondary', '')};
  transition: border-color 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    background-color 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover:not(:disabled) {
    background-color: ${getColors('buttons', 'primary', '')};
    border-color: ${({ userTheme }) =>
    getColors('main', 'background', userTheme)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
