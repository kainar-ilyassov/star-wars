import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Character } from '../types/character'

export const fetchCharacterById = createAsyncThunk<
Character,
string,
ThunkConfig<string>
>(
  'characterDetails/fetchCharacterById',
  async (characterId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<Character>(`/people/${characterId}`)

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
