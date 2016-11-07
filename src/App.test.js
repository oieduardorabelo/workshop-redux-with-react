import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'
import { CommentBox } from './CommentBox/CommentBox'
import { CommentList } from './CommentList/CommentList'

const underTest = (props = {}) => shallow(
    <App { ...props } />
)

describe('<App />', () => {
    it('renders without crashing', () => {
        const component = underTest()
        expect(component.type()).toBe('main')
    })

    it('renders with CommentBox and CommentList', () => {
        const component = underTest()
        expect(component.find(<CommentList />)).toBeDefined()
        expect(component.find(<CommentBox />)).toBeDefined()
    })
})
