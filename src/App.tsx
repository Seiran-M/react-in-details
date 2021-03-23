import React, {useState} from 'react'
import './App.css'
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {Accordion} from './components/Accordion/Accordion'
import {Rating, RatingValueType} from './components/Rating/Rating'
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff'
import {Select} from './components/Select/Select'
import {Clock} from './components/Clock/Clock'

export const App: React.FC = () => {

   let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
   let [switchOn, setSwitchOn] = useState<boolean>(false)

   const [value, setValue] = useState<string | undefined>('2')
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

         <Select value={value} onChange={() => {}} items={[
            {title: 'Simgeropol', value: 1},
            {title: 'Istanbul', value: 2},
            {title: 'Kiev', value: 3},
            {title: 'Los Angeles', value: 4},
         ]}/>
         <Clock/>
      </div>
   )
}

type PageTitlePropsType = {
   title: string
}

const PageTitle: React.FC<PageTitlePropsType> = (props) => {
   return (
      <h1>{props.title}</h1>
   )
}
