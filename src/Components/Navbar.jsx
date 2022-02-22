import {  Card } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import calculateamount from './Utility';

const Navbar = ({grossamount}) => {
    console.log(grossamount)
    return (
        <div>
            <Card style={{  width:"100%" , backgroundColor:"white" , boxShadow:"0 2px 4px" }} >
            <h1  style={{ marginLeft:"5%"  }} >Wallet Tracker</h1>
            <h2 style={{textAlign:"center" , boxShadow:"0 1px 2px " }}  >${grossamount}</h2>
            </Card>
        </div>
    )
}

var mapState=(state)=>({
    grossamount : calculateamount(state.transactions)
});

export default connect(mapState)(Navbar)

