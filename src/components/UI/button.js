import styled from 'utils/styles'
import { getColors } from 'utils/utility'

export const PrimaryBtn = styled.button`
  height: 42px;
  border: 2px solid ${
    ({ userTheme }) =>
      getColors('buttons', 'primary', '')
  };
  color: inherit;
  border-radius: 47px;
  padding: 6px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: transparent;
  transition: border-color 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    background-color 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover {
    background-color: ${getColors('buttons', 'primary', '')};
    border-color: ${({ userTheme }) => getColors('main', 'background', userTheme)};
  }
`

export const SecondaryBtn = styled.button`
  height: 42px;
  border: 2px solid ${
    ({ userTheme }) =>
      getColors('buttons', 'primary', userTheme)
  };
  border-radius: 47px;
  padding: 6px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #fff;
  background-color: ${
    ({ userTheme }) =>
      getColors('buttons', 'secondary', '')
  };
`