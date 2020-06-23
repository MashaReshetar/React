import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle:'none',
        margin: 0,
        padding: 0
    }
}

function CatBlock ({cat, index, likes}) {
    return (
        <ul style={styles.ul}> 
            <li>
                <strong>{index + 1}</strong>
                {cat.name}
                <ul>{cat.likes.map(cat => <li>{cat}</li>)}</ul>
                <img src={cat.photoUrl} alt="cat" />
            </li>
        </ul>
    )
}

CatBlock.propTypes = {
    cat: PropTypes.object.isRequired,
    index: PropTypes.number,
    likes: PropTypes.string.isRequired
}

export default CatBlock