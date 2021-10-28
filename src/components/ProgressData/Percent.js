import FinishedUnitNum from './FinishedUnitNum';

const Percent = data => {
  let percent = ((FinishedUnitNum(data) / data.section_length) * 100).toFixed(
    2
  );

  return percent;
};

export default Percent;
