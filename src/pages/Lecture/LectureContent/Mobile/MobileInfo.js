import React from 'react';
import styled from 'styled-components';
import Progress from '../../SideContent/Progress';
import InfoContent from '../../SideContent/InfoContent';
import MobileInfoBtn from './MobileInfoBtn';

const MobileInfo = ({ data, streamingData }) => {
  return (
    <Wrap>
      <Unit>
        <Title>{streamingData.lecture_name}</Title>
        <Icon>
          <i className="fas fa-arrow-up" />
        </Icon>
      </Unit>
      <InfoContent course_name={data.course_name}>
        <Progress data={data} />
      </InfoContent>
      <MobileInfoBtn streamingData={streamingData} />
      <Presentation />
    </Wrap>
  );
};

const Presentation = styled.div`
  width: 100%;
  height: 100px;
`;

const Wrap = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.pc} {
    display: contents;
  }
`;

const Unit = styled.div`
  display: flex;
  padding: 16px 32px;
  border-bottom: 1px solid #e9ecef;
  color: #454545;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Title = styled.div`
  flex: 1 1 auto;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const Icon = styled.div``;

export default MobileInfo;
