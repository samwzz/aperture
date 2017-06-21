const FormModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.8)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    // top             : '30%',
    // left            : '40%',
    // right           : '40%',
    // bottom          : '30%',
    border          : '1px solid #ccc',
    padding         : '36px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.5s'
  }
};

export default FormModalStyle;
