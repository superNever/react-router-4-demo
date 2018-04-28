/**
 * Created by wanghongxiang on 2018/4/7.
 */
import React from 'react';
const Loading = () => <div>Loading....</div>;
const WithLoading = (Component) => ({isLoading, ...rest}) => isLoading ? <Loading /> : <Component {...rest}/>;
export default WithLoading;
