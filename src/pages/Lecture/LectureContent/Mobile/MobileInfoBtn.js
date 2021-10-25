import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

import Button from '../../../../components/Button/Button';

const MobileInfoBtn = ({ streamingData }) => {
  let next = streamingData.lecture_id + 1;
  let before = streamingData.lecture_id - 1;
  console.log('streamingData', streamingData.finished);

  return (
    <ButtonList>
      <Link to="/course/">
        <LinkButton>
          <Icon>
            <i className="fas fa-external-link-alt" />
          </Icon>
          <Text>나가기</Text>
        </LinkButton>
      </Link>

      <Button text="봤어요" icon="fa-check" streamingData={streamingData} />
      <Link to={`/lecture/${before}`}>
        <Button text="이전수업" icon="fa-arrow-left" />
      </Link>
      <Link to={`/lecture/${next}`}>
        <Button text="다음수업" icon="fa-arrow-right" />
      </Link>
    </ButtonList>
  );
};

const ButtonList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:active {
    background: ${lighten(0.1, '#ddd')};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;

const Text = styled.div`
  color: #495057;
  font-size: 12px;
`;

export default MobileInfoBtn;
