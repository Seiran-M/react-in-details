import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";


export default {
   title: 'input',
   // component: Input,
   argTypes: {
      backgroundColor: {control: 'color'},
   },
} as Meta;

export const UncontrolledInput: Story = () => <input/>;

export const TrackValueOfUncontrolledInput: Story = () => {
   const [value, setValue] = useState('')
   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const actualValue = event.currentTarget.value
      setValue(actualValue)
   }
   return (
      <>
         <input onChange={onChange}/> - {value}
      </>
   )
}

export const GetValueOfUncontrolledInputByButtonPress: Story = () => {
   const [value, setValue] = useState('')

   const inputRef = useRef<HTMLInputElement>(null)
   const save = () => {
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value)
   }
   return (
      <>
         <input ref={inputRef}/>
         <button onClick={save}>save</button>
         - actual value: {value}
      </>
   )
}

export const ControlledInputWidthFixedValue: Story = () => <input value={'hello druzi'}/>;

export const ControlledInput: Story = () => {
   const [parentValue, setParentValue] = useState('')
   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue((e.currentTarget.value))
   }

   return (
      <input value={parentValue} onChange={onChange}/>
   )
}

export const ControlledCheckbox: Story = () => {
   const [parentValue, setParentValue] = useState(true)
   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue((e.currentTarget.checked))
   }

   return (
      <input type="checkbox" checked={parentValue} onChange={onChange}/>
   )
}

export const ControlledSelect: Story = () => {
   const [parentValue, setParentValue] = useState<string|undefined>("1")
   const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setParentValue((e.currentTarget.value))
   }

   return (
      <select value={parentValue} onChange={onChange}>
         <option>none</option>
         <option value="1">Simferopol</option>
         <option value="2">Istanbul</option>
         <option value="3">Kiev</option>
      </select>
   )
}
