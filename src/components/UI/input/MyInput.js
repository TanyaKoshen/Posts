import React, {memo} from 'react';
import classes from './MyInput.module.css';

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input
//       {ref}
//       {...props}
//       className={classes.MyInput}/>
//   );
// });

const MyInput = (props) => {
  return (
    <input
      {...props}
      className={classes.MyInput}/>
  );
};

export default memo(MyInput);
