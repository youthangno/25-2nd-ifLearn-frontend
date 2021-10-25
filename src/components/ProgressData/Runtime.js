const Runtime = ({ data }) => {
  const section_list = data.section_list;
  let runtimeSecond = 0;

  for (let i = 0; i < section_list.length; i++) {
    const lecture_list = section_list[i].lecture_list;

    for (let j = 0; j < lecture_list.length; j++) {
      runtimeSecond += lecture_list[j].lecture_runtime;
    }
  }

  let runtime = Math.ceil(runtimeSecond / 60);

  return runtime;
};

export default Runtime;
