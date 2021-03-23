import React, {useState} from "react";import s from './UncontrolledOnOff.module.css'type PropsType = {   onChange: (on: boolean) => void   defaultOn?: boolean}export const UncontrolledOnOff: React.FC<PropsType> = (props) => {   let [on, SetOn] = useState(props.defaultOn ? props.defaultOn : false);   const onStyle = {      width: '48px',      height: '24px',      backgroundColor: on ? 'greenyellow' : 'white',   }   const offStyle = {      width: '48px',      height: '24px',      backgroundColor: !on ? 'red' : 'white',   }   const indicatorStyle = {      width: '23px',      height: '23px',      borderRadius: '50%',      border: '1px solid black',      backgroundColor: on ? 'greenyellow' : 'red',   }   const onClicked = () => {      SetOn(true)      props.onChange(true)   }   const offClicked = () => {      SetOn(false)      props.onChange(false)   }   return (      <div className={s.buttonsWrapper}>         <button style={onStyle} onClick={onClicked}>On</button>         <button style={offStyle} onClick={offClicked}>Off</button>         <div style={indicatorStyle}></div>      </div>   )}