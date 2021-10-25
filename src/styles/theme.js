const deviceSizes = {
  tablet: '768px',
  pc: '1024px',
};

const device = {
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const theme = {
  device,
};

export default theme;
