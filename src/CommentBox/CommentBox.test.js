import React from 'react'
import { shallow } from 'enzyme'

import { CommentBox } from './CommentBox'

const underTest = (props = {}) => shallow(
    <CommentBox { ...props } />
)

const preventDefault = () => {}

describe('<CommentBox />', () => {
    it('renders without crashing', () => {
        const component = underTest()
        expect(component.type()).toBe('form')
    })

    it('renders with textarea and submit button', () => {
        const component = underTest()
        expect(component.find('textarea')).toBeDefined()
        expect(component.find('button[type="submit"]')).toBeDefined()
    })

    it('textarea changes value and update state', () => {
        const component = underTest()
        component.find('textarea').simulate('change', { target: { value: 'John Doe' } })
        expect(component.state('comment')).toBe('John Doe')
    })

    it('form submit should clean state', () => {
        // mapDispatchToProps setup
        const spyHandleSubmit = jest.fn();
        const component = underTest({ handleSubmit: spyHandleSubmit })

        component.find('textarea').simulate('change', { target: { value: 'John Doe' } })
        expect(component.state('comment')).toBe('John Doe')

        component.simulate('submit', { preventDefault })

        // calling mapDispatchToProps
        expect(spyHandleSubmit).toHaveBeenCalledWith('John Doe')
        expect(component.state('comment')).toBe('')
    })

    it('form submit when textarea keyup enter', () => {
        // mapDispatchToProps setup
        const spyHandleSubmit = jest.fn();
        const component = underTest({ handleSubmit: spyHandleSubmit })

        component.find('textarea')
            .simulate('change', { target: { value: 'John Doe' } })
            .simulate('keyup', { keyCode: 13, preventDefault })

        // calling mapDispatchToProps
        expect(spyHandleSubmit).toHaveBeenCalledWith('John Doe')
        expect(component.state('comment')).toBe('')
    })
})
