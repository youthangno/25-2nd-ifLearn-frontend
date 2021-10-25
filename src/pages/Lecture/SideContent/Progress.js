import React from 'react';
import styled from 'styled-components';
import Runtime from '../../../components/ProgressData/Runtime';
import CurrentRuntime from '../../../components/ProgressData/CurrentRuntime';
import FinishedUnitNum from '../../../components/ProgressData/FinishedUnitNum';
import Percent from '../../../components/ProgressData/Percent';

const Progress = ({ data }) => {
  let period = data.period;

  const unLimit = period => {
    if (period === 999) {
      return '무제한';
    }
  };

  return (
    <ProgressCover>
      <Terms>수강기한 : {unLimit(period)}</Terms>
      <ProgressText>
        {` 진도율 : ${FinishedUnitNum({ data })}/${
          data.section_legnth
        }강 (${Percent({ data })}%) | 시간 : ${CurrentRuntime({
          data,
        })}분/${Runtime({
          data,
        })}분`}
      </ProgressText>
      <ProgressBar value={Percent({ data })} max="100" />
    </ProgressCover>
  );
};

const ProgressCover = styled.div`
  color: #495057;
  font-size: 15px;

  @media ${({ theme }) => theme.device.pc} {
    margin-bottom: 2px;
    color: #495057;
    font-size: 13px;
    line-height: 1.5;
  }
`;

const Terms = styled.div`
  margin-bottom: ${({ isMobile }) => (isMobile ? '1px' : '2px')};
  line-height: 1.47;
`;

const ProgressText = styled.div`
  line-height: 1.47;
`;

const ProgressBar = styled.progress`
  width: 100%;
  height: 5px;
  border-radius: 2px;
  border: unset;
  background-color: #e9ecef;
`;

export default Progress;
