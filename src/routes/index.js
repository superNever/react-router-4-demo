/**
 * Created by wanghongxiang on 2018/4/27.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {Loading} from 'tinper-bee';
import Bundle from './lazyLoad'
import Demo from './demo';

const createComponent = (component) => () => {
    let AsyncComponent = (
        <Bundle load={component}>
        {
            (Async) => Async ? <Async /> : <Loading/>

        }
        </Bundle>
    );
    return AsyncComponent
};

const routeList = [
    ...Demo
];

let result = [];
routeList.map((val, index) => {
    result.push({
        path: val.path,
        exact: val.exact,
        component: createComponent(val.component)
    })
});
export default result
