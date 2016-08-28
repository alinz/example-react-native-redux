/**
 * Created by rotem on 27/08/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter';


describe('Counter', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Counter/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with text', () => {
        const tree = renderer.create(
            <Button text="Up"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});