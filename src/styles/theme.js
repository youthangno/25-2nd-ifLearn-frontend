const deviceSizes = {
  tablet: '768px',
  labtop: '1024px',
};

const device = {
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  labtop: `screen and (max-width: ${deviceSizes.labtop})`,
};

const theme = {
  device,
};

export default theme;
