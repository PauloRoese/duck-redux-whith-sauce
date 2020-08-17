import React, { useState } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Creators } from '../store/reducers/reducerItems';

const ListaItems = (props) => {

    const { addItem, removeItem, items } = props;
    const [text, setText] = useState('')

    const onChangeFile = (ev) => {
        setText(ev.currentTarget.value);
    }

    const adiconaItem = (ev) => {
        addItem(text);
        setText('');
        console.log(props)
    }

    const remove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <ul>
                {items.map(item => (
                    <>
                        <li key={item.id}>{item.text}</li>
                        <button
                            type="button"
                            onClick={(ev) => remove(item.id)}
                        >Remove</button>
                    </>
                ))}
            </ul>

            <input
                type="text"
                value={text}
                onChange={(ev) => onChangeFile(ev)}
            />
            <button
                type="button"
                onClick={(ev) => adiconaItem(ev)}
            >
                add
            </button>
        </div>
    )
}

const mapStateToProps = state => (
    console.log('state',state),
    {
    items: state.items
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(Creators, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(ListaItems);