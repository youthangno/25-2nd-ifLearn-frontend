const FinishedUnitNum = ({ data }) => {
  const section_list = data.section_list;
  let finishedUnit = 0;

  for (let i = 0; i < section_list.length; i++) {
    const lecture_list = section_list[i].lecture_list;

    for (let j = 0; j < lecture_list.length; j++) {
      if (lecture_list[j].finished == 1) {
        finishedUnit += 1;
      }
    }
  }

  return finishedUnit;
};

export default FinishedUnitNum;
