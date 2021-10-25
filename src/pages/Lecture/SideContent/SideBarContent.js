import React from 'react';
import ContentBox from '../../../components/CourseList/ContentBox';

function SideBarContent({ section_list }) {
  return (
    <div>
      {section_list.map((list, index) => (
        <ContentBox key={index} list={list} />
      ))}
    </div>
  );
}

export default SideBarContent;
