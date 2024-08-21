const LuasSilinder = (r, t) => {
  return 2 * 3.14 * r * (r + t);
};

const VolumeSilinder = (r, t) => {
  return 3.14 * r * r * t;
};

const Silinder = (r, t) => {
  return {
    luas: LuasSilinder(r, t),
    volume: VolumeSilinder(r, t),
  };
};

module.exports = { LuasSilinder, VolumeSilinder };
