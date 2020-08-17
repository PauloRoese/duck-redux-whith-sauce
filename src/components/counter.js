import React from 'react';

import { connect } from 'react-redux';

// Function stateless 

const counterItems = ({ items }) => (
    <div>
        <h2> Temos {items.length}</h2>
    </div>
)

const mapStateToProps = state => ({
    items: state.items
})

export default connect(mapStateToProps)(counterItems);