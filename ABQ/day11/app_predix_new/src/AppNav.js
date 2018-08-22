import React, { Component } from 'react';

export default class AppNav extends Component{

    componentDidMount(){
        this.$appNav.items = this.props.navData
    }

    render(){
        const {selectedRoute} = this.props
        selectedRoute(this.$appNav.id)
        return(
            <dev> <px-app-nav 
            ref = {(n) => this.$appNav = n}>
            </px-app-nav>
                </dev>
        )
    }
}