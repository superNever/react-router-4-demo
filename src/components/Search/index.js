/**
 * Created by wanghongxiang on 2018/4/7.
 */
import React, { Component } from 'react'
import ErrorBoundary from '../ErrorBoundary/index'
class Search extends Component {
    componentDidMount () {
        if (this.input) {
            this.input.focus()
        }
    }
    render () {
        const {
            value,
            onChange,
            onSubmit,
            children
        } = this.props;
        return (
            <ErrorBoundary>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        ref={(node) => this.input = node}
                    />
                    <button type="submit">
                        {children}
                    </button>
                </form>
            </ErrorBoundary>
        )
    }
}
export default Search;
