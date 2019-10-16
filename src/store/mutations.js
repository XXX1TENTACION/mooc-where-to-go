export default {
  gallaryImgsShow(state) {
    state.isgallaryImgsShow = true;
  },
  gallaryImgsHide(state) {
    state.isgallaryImgsShow = false;
  },
  changeCity(state, cityName) {
    state.locationCity = cityName;
    localStorage.city = cityName;
  }
};
