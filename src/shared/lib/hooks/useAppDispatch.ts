import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/StoreProvider'
import { type Dispatch } from 'react'
import { type AnyAction } from '@reduxjs/toolkit'

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>()
