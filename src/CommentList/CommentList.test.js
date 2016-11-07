import React from 'react'
import { shallow } from 'enzyme'

import { CommentList } from './CommentList'

const underTest = (props = { comments: [] }) => shallow(
    <CommentList { ...props } />
)

describe('<CommentList />', () => {
    it('renders without crashing', () => {
        const component = underTest()
        expect(component.type()).toBe('ul')
    })

    it('renders single item', () => {
        const component = underTest({ comments: [ 'New Comment' ] })
        expect(component.find('li').length).toBe(1)
    })

    it('renders multiples items', () => {
        const component = underTest({ comments: [ 'New Comment', 'One More Comment' ] })
        expect(component.find('li').length).toBe(2)
    })
})
