import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            event.shiftKey ? props.handleSearch() : props.handleAdd() 
        } else if(event.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols="10">
                <input id="description"
                className="form-control"
                onChange={props.handleChange}
                value={props.description}
                onKeyUp={keyHandler}
                placeholder="Adcionar uma tarefa" />
            </Grid>

            <Grid cols="2">
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='remove' onClick={props.handleClear} />
            </Grid>
        </div>
    )
}