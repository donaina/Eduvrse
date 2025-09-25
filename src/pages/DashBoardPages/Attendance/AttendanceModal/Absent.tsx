import React from 'react'
    interface AbsentProps {
        open: boolean;
        close: () => void;
    }
const Absent :React.FC<AbsentProps>= ({open,close}:AbsentProps) => {
  return (
    <div>Absent</div>
  )
}

export default Absent