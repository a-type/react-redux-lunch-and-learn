import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ProfileActions from '../actions/ProfileActions';
import Profile from '../components/Profile';

const mapStateToProps = (state) => {
    return state.profile;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(ProfileActions.setName(name));
        }
    };
};

const ProfileApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileApp