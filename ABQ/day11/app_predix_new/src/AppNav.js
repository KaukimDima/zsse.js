import React, { Component } from 'react';

export default class AppNav extends Component{

    state ={
        selectedRoute : "home"
    }

    _handleSelectedRoute = (el) => {
        this.setState({selectedRoute : el.detail.value});
        console.log(el.detail.value[0])
    } 
    componentDidMount(){
        this.$appNav.items = this.props.navData;
        this.$appNav.addEventListener('selected-route-changed', this._handleSelectedRoute ,false);
        console.log('did mount')
    }

    componentWillUnmount(){
        this.$appNav.removeEventListener('selected-route-changed', this._handleSelectedRoute);
        console.log("will unmount")
    }

    render(){
        // const {selectedRoute} = this.props
        // selectedRoute(this.$appNav.id)
        return(
            <div> <px-app-nav 
            ref = {(n) => this.$appNav = n}>
            </px-app-nav>   
            <h1>This selected route</h1>
            <h3>{this.state.selectedRoute}</h3>
            </div>
        )
    }
}