import { type Dispatch, useEffect } from 'react'
import { fetchCharacterById } from 'entities/Character/model/services/fetchCharacterById'
import { useSelector } from 'react-redux'
import {
  getCharacterDetailsData, getCharacterDetailsError,
  getCharacterDetailsIsLoading
} from 'entities/Character/model/selectors/characterDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type CharacterDetailsSchema } from 'entities/Character'
import { type AnyAction } from '@reduxjs/toolkit'

interface UseCharacterInfoResult extends CharacterDetailsSchema {
  dispatch: Dispatch<AnyAction>
}

export function useCharacterInfo (id: string): UseCharacterInfoResult {
  const dispatch = useAppDispatch()
  const data = useSelector(getCharacterDetailsData)
  const isLoading = useSelector(getCharacterDetailsIsLoading)
  const error = useSelector(getCharacterDetailsError)

  useEffect(() => {
    dispatch(fetchCharacterById(id) as any)
  }, [])

  return {
    data,
    isLoading,
    error,
    dispatch
  }
}
