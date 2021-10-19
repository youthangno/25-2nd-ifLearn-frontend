import React from 'react';
import styled from 'styled-components';

export default function Box({ imoticon, upTitle, downTitle, listArr }) {
  return (
    <Wrapper>
      <WhatWeLearn>
        {imoticon}
        <br />
        {upTitle}
        <br />
        {downTitle}
      </WhatWeLearn>
      <WhatWeLearnDetail>
        {listArr?.map((content, idx) => {
          return (
            <div key={idx}>
              <i className="fas fa-check" /> {content.name}
            </div>
          );
        })}
      </WhatWeLearnDetail>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 32px 24px 32px 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const WhatWeLearn = styled.div`
  margin-right: 16px;
  flex-basis: 130px;
  line-height: 1.39;
  color: #343a40;
  font-weight: 500;
  text-align: center;
`;

const WhatWeLearnDetail = styled.div`
  i {
    margin-right: 10px;
    color: rgb(88, 192, 121);
  }

  div {
    margin-bottom: 10px;
    line-height: 1.5;
    font-size: 16px;
    color: #343a40;
  }
`;
