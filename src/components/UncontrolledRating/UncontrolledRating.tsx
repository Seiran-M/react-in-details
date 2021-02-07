import React, {useState} from "react";export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5type RatingValuetype={   defaultRating?: RatingValueType   onChange: (value:RatingValueType)=>void}export function UncontrolledRating(props:RatingValuetype) {    let [rating, setRating] = useState<RatingValueType>(props.defaultRating ? props.defaultRating : 0);    return (        <div>            <Star selected={rating > 0} setRating={() => {setRating(1); props.onChange(1)}}/>            <Star selected={rating > 1} setRating={() => {setRating(2); props.onChange(2)}}/>            <Star selected={rating > 2} setRating={() => {setRating(3); props.onChange(3)}}/>            <Star selected={rating > 3} setRating={() => {setRating(4); props.onChange(4)}}/>            <Star selected={rating > 4} setRating={() => {setRating(5); props.onChange(5)}}/>        </div>    )};type StarPropsType = {    selected: boolean    setRating: () => void}function Star(props: StarPropsType) {    return (        <span onClick={() => {props.setRating()}}>            {props.selected ? <b>Star </b> : "Star "}        </span>    )}