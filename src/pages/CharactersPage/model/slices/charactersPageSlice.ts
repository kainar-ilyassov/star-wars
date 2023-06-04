import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchCharactersList } from '../services/fetchCharactersList'
import { type CharactersPageInfo, type CharactersPageSchema } from 'pages/CharactersPage'

const initialState: CharactersPageSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const charactersPageSlice = createSlice({
  name: 'charactersPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCharactersList.fulfilled, (
        state,
        action: PayloadAction<CharactersPageInfo>
      ) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchCharactersList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: charactersPageActions } = charactersPageSlice
export const { reducer: charactersPageReducer } = charactersPageSlice
