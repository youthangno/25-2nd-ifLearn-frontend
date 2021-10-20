import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

function LectureFooter() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <FontAwesome>
            <i className="fas fa-chevron-left" />
            이전 강의
          </FontAwesome>
          <FontAwesome margin="0 64px" padding="6px 0">
            <i className="fas fa-check" />
          </FontAwesome>
          <FontAwesome>
            다음 강의
            <i className="fas fa-chevron-right" />
          </FontAwesome>
        </div>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  background-color: hsla(0, 0%, 9%, 0.69);
  margin-top: auto;

  @media ${({ theme }) => theme.device.labtop} {
    display: none !important;
  }
`;

const FontAwesome = styled.span`
  margin: ${props => props.margin};
  padding: ${props => props.padding || '6px 12px'};
  cursor: pointer;
  color: #ffffff;
`;

export default LectureFooter;
