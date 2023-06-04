import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type CharactersPageInfo } from 'pages/CharactersPage'

export const fetchCharactersList = createAsyncThunk<
CharactersPageInfo,
number,
ThunkConfig<string>
>(
  'charactersPage/fetchCharactersList',
  async (pageNumber, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<CharactersPageInfo>('/people', {
        params: {
          page: pageNumber
        }
      })

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
