import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const classRoot = [cl.myModal]
  if (visible) classRoot.push(cl.active)
  return (
    <div
      className={classRoot.join(' ')}
      onClick={()=>setVisible(false)} //closes modal when click outside
    >
      <div className={cl.myModalContent}
           onClick={(e)=>e.stopPropagation()} //should not close modal  when click on it
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
