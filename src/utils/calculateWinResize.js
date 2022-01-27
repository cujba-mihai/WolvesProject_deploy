const updateWindowDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const remSize =
    width > 768 && width < 1060
      ? 0.5625
      : width <= 768
        ? 0.5
        : 0.625;

  return {
    width,
    height,
    remSize: remSize
  }
};

export default updateWindowDimensions;