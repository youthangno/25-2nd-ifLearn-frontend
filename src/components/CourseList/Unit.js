import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';

const Unit = ({ lecture, key, id }) => {
  let finish = lecture.finished;
  console.log('finish', finish);
  return (
    <Link to={`/lecture/${lecture.lecture_id}`}>
      <UnitEl tabIndex="-1" key={key}>
        <Check finish={finish}>
          <i className="fas fa-check" />
        </Check>
        <TitleCover>
          <Title>{lecture.lecture_name}</Title>
          <UnitInfo tabIndex="-1">
            <InfoIcon>
              <i className="fas fa-play-circle" />
            </InfoIcon>
            <span>{lecture.runtime}</span>
          </UnitInfo>
        </TitleCover>
      </UnitEl>
    </Link>
  );
};

const UnitInfo = styled.div`
  font-size: 14px;
  line-height: 1.43;
`;

const Title = styled.div`
  margin-bottom: 4px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;

  @media ${({ theme }) => theme.device.pc} {
    font-size: 15px;
  }
`;

const UnitEl = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 14px 20px;
  cursor: pointer;
  color: #868e96;
  transition: all 0.15s linear;

  &:hover,
  &:active {
    background: ${lighten(0.1, '#ddd')};
  }

  :focus {
    border-left: 6px solid #459aa1;
    background-color: #eef8f9;
    color: #212529;

    ${UnitInfo} {
      color: #459399;
    }

    ${Title} {
      font-weight: 500;
    }
  }
`;

const Check = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 9999px;

  ${({ finish }) => finish === 1} {
    background-color: '#459aa1';
  }

  background-color: ${({ finish }) => (finish === 1 ? '#459aa1' : ' #ced4da')};
  color: #ffffff;
  transition: background-color 0.15s ease;
`;

const TitleCover = styled.div`
  padding: 0 40px 0 12px;

  @media ${({ theme }) => theme.device.pc} {
    padding: 0 20px 0 12px;
  }
`;
const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  margin-right: 4px;
  background-color: ${finish => (finish === 1 ? '#459aa1' : ' #ced4da')};
  transition: background-color 0.15s ease;
`;

export default Unit;
