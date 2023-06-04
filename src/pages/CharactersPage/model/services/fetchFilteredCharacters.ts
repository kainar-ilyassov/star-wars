import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type CharactersPageInfo } from 'pages/CharactersPage'

export const fetchFilteredCharacters = createAsyncThunk<
CharactersPageInfo,
string,
ThunkConfig<string>
>(
  'charactersPage/fetchFilteredCharacters',
  async (searchQuery, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<CharactersPageInfo>('/people', {
        params: {
          search: searchQuery
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
