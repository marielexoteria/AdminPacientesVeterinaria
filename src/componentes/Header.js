import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <header>
            <h1 className = "text-center">{props.titulo}</h1>
        </header>
    )
}

//usando PropTypes para documentar el proyecto
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;