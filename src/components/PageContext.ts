import React from 'react'
import {contextType} from "../ts"


const context = React.createContext<contextType>(["", ()=>{}])

export default context
export const Provider = context.Provider
export const Consumer = context.Consumer
