import React, { Dispatch, useContext } from 'react'
import { Action } from 'reducers/challenge'

export const DispatchContext = React.createContext<Dispatch<Action>>(() => { })

export const useContextDispatch = () => useContext(DispatchContext)