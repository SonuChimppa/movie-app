import React, { useContext } from 'react'
import { global } from './App'
function ContextApi() {
    let { color } = useContext(global)
    return (
        <div>
            <h1 style={{ color: color }}>fsfsfsfsfssfsfsdfsdfsfdsd</h1>
        </div>
    )
}

export default ContextApi