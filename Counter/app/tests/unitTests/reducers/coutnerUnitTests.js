/**
 * Created by rotem on 25/08/2016.
 */
import counterReducer from '../../../reducers/counter';
import * as actionTypes from '../../../actions/actionTypes';
import {expect,should} from 'chai';


const stateWith5InCount = {count : 5};
describe('counter reducer',()=>{
    it('should start from 0',()=>{
        expect(counterReducer(undefined,{type:actionTypes.INCREMENT}).count).to.equal(1);
    });

    it('should increase by 1' , ()=>{
        expect(counterReducer(stateWith5InCount,{type:actionTypes.INCREMENT}).count).to.equal(6);
    });

    it('should decrease by 1' , ()=>{
        expect(counterReducer(stateWith5InCount,{type:actionTypes.DECREMENT}).count).to.equal(4);
    });

    it('should play nice with other redux reducers',()=>{
        expect(counterReducer(stateWith5InCount,{type:"whatnot"})).to.deep.equal(stateWith5InCount);
    });
})