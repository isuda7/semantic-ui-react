import React, {useState} from 'react'
import {Button, Checkbox, Form, Input} from "semantic-ui-react";
import { InputSrch } from '../../../../components';
import SelectButtomSheet from './SelectButtomSheet';

const FormPage = () => {
    const [value, setValue] = useState(false);
    return (
        <section className='g_sec'>
            {/* Form Layout */}
            <h2 className='g_h2'>Form Layout</h2>
            <div className='preview'>
                <Form>
                    <Form.Field>
                    <label htmlFor='formName'>First Name</label>
                    <Input id='formName' placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor='formName2'>Last Name</label>
                    <Input id='formName2' placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>

            {/* Input */}
            <h2 className='g_h2'>Input</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <Input placeholder='Placeholder' />
                <br />
                <Input placeholder='Placeholder' value='Value' />
                <br />
                <Input placeholder='Placeholder' disabled />
            </div>
            <h3 className='g_h3'>Input Search</h3>
            <div className='preview'>
                <InputSrch />
            </div>

            {/* Select */}
            <h2 className='g_h2'>Select</h2>
            <div className='preview'>
                <SelectButtomSheet title='셀렉트 제목' value='Select Placeholder' placeholder='선택하세요.' items={
                    ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
                }/>
                <SelectButtomSheet value='Select Placeholder' placeholder='선택하세요.' disabled items={
                    ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
                } />
            </div>

            {/* Checkbox */}
            <h2 className='g_h2'>Checkbox</h2>
            <div className='preview'>
                <Checkbox className='check_type1' label='Make my profile visible' />
                <br />
                <Checkbox label='Make my profile visible' />
                <br />
                <Checkbox label='Make my profile visible' />
            </div>

            {/* Radio */}
            <h2 className='g_h2'>Radio</h2>
            <div className='preview'>
                <Checkbox radio name='RadioGroup1' label='Radio choice' value='RadioGroup11' checked={value === 'RadioGroup11'} className='radio_type1' onChange={(e, data) => setValue(data.value)}/>
                <br />
                <Checkbox radio name='RadioGroup1' label='Radio choice' value='RadioGroup12' checked={value === 'RadioGroup12'} className='radio_type1' onChange={(e, data) => setValue(data.value)}/>
                <br />
                <Checkbox radio name='RadioGroup1' label='Radio choice' value='RadioGroup13' checked={value === 'RadioGroup13'} className='radio_type1' onChange={(e, data) => setValue(data.value)}/>
            </div>

            {/* Toggle */}
            <h2 className='g_h2'>Toggle</h2>
            <div className='preview'>
                <span className='toggle'>
                </span>
            </div>
        </section>
    )
}

export default FormPage
