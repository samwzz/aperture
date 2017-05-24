const UploadModalStyle = {
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
    position                   : 'fixed',
    top                        : '50%',
    left                       : '50%',
    border                     : '1px solid black',
    "transform"                : 'translate(-50%, -50%)',
    padding                    : '36px',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    borderRadius               : '3px',
    zIndex          : 11,
    opacity         : 100,
    transition      : 'opacity 0.5s'
  }
};

export default UploadModalStyle;
