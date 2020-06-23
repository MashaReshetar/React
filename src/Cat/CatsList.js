import React from 'react'
import PropTypes from 'prop-types'
import CatBlock from './CatBlock'

const styles = {
    ul: {
        listStyle:'none',
        margin: 0,
        padding: 0
    }
}

function CatsList (props) {
    return (
        <ul style={styles.ul}>
            { props.cats.map((cat, index) => {
                return <CatBlock 
                cat={cat} 
                key={cat.id}
                index={index} />
            })}
        </ul>
    )
}

CatsList.propTypes = {
    cats: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CatsList