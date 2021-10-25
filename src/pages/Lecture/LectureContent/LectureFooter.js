import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

function LectureFooter({ data }) {
  const checkUnit = e => {};

  return (
    <Container>
      <div>
        <FontAwesome>
          <i className="fas fa-chevron-left" />
          이전 강의
        </FontAwesome>
        <Unit>
          {data.finished === 1 ? <i className="fas fa-check" /> : '봤어요'}
        </Unit>
        <FontAwesome>
          다음 강의
          <i className="fas fa-chevron-right" />
        </FontAwesome>
      </div>
    </Container>
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

  @media ${({ theme }) => theme.device.pc} {
    display: none !important;
  }
`;

const FontAwesome = styled.span`
  margin: ${props => props.margin};
  padding: ${props => props.padding || '6px 12px'};
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  line-height: 1.5;

  &:hover,
  &:active {
    background: ${lighten(0.25, '#171717B0')};
  }
`;

const Unit = styled.span`
  padding: 6px 12px;
  margin: 0 40px;
  border-radius: 4px;
  cursor: 'pointer';
  color: #ffffff;
  line-height: 1.5;

  &:hover,
  &:active {
    background: ${lighten(0.25, '#171717B0')};
  }
`;

export default LectureFooter;
