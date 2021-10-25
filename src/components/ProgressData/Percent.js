import FinishedUnitNum from './FinishedUnitNum';

const Percent = ({ data }) => {
  let percent = (
    (FinishedUnitNum({ data }) / data.section_legnth) *
    100
  ).toFixed(2);

  return percent;
};

export default Percent;
