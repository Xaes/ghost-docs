import React from 'react';
import LogoImage from '../../../images/logo.png';

export default function Logo(props) {
    return (
        <img {...props} src={LogoImage} style={{ maxWidth: '100px' }} alt="Xaes Logo" />
    );
}