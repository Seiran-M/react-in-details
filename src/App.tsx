import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export function App() {

   let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
   let [switchOn, setSwitchOn] = useState<boolean>(false)

   return (
      <div className="app-wrapper">
         <PageTitle title={'Page title'}/>

         <OnOff on={switchOn} onChange={setSwitchOn}/>

         <Accordion titleValue={' Accordion '}
                    collapsed={accordionCollapsed}
                    onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                    onClick={() => {}} items={[
            {title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Artem', value: 3},
            {title: 'Viktor', value: 4},
         ]}
         />

         <Rating value={ratingValue} onClick={setRatingValue}/>

         <UncontrolledAccordion titleValue={' Uncontrolled Accordion '}/>

         <UncontrolledRating defaultRating={1} onChange={() => {}}/>

         <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      </div>
   );
}

type PageTitlePropsType = {
   title: string
}

function PageTitle(props: PageTitlePropsType) {
   return (
      <h1>{props.title}</h1>
   )
}
