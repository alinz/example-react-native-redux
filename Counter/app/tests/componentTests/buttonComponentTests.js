/**
 * Created by rotem on 27/08/2016.
 */
import React from 'react';
import { Text } from 'react-native-mock';
import { shallow } from 'enzyme';
import Button from '../../components/button';
import { expect } from 'chai';

describe('<Button />', () => {
    it('should render stuff', () => {

        const wrapper = shallow(<Button text = "Up"/>);
        expect(wrapper.length).to.equal(1);
        expect(wrapper.contains(<Text>Up</Text>)).to.equal(true);
        expect(wrapper.children().length).to.equal(1);
        expect(wrapper.children().first().name()).to.equal("TouchableOpacity");
    });

    it('should be call the press action on press' , ()=>{
        let testPress = 0;
        const pressActionTest =  ()=> {++testPress};

        expect(testPress).to.equal(0);
        const wrapper = shallow(<Button text = "Up" pressAction={pressActionTest} />);
        wrapper.children().first().simulate("press");
        expect(testPress).to.equal(1);
    })
});