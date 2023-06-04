import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchCharacterById } from '../services/fetchCharacterById'
import { type Character } from '../types/character'
import { type CharacterDetailsSchema } from 'entities/Character'
import { type ChangeEvent } from 'react'

const initialState: CharacterDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const characterDetailsSlice = createSlice({
  name: 'characterDetails',
  initialState,
  reducers: {
    onCharacterEdit (state, action: PayloadAction<ChangeEvent<HTMLInputElement> | undefined>) {
      const { name, value } = (action.payload?.target) ?? { name: '', value: '' }

      if (state.data != null) {
        state.data = { ...state.data, [name]: value }
      }
    },
    onCharacterSave (state, action) {
      console.log('actionSave', action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCharacterById.fulfilled, (
        state,
        action: PayloadAction<Character>
      ) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: characterDetailsActions } = characterDetailsSlice
export const { reducer: characterDetailsReducer } = characterDetailsSlice
