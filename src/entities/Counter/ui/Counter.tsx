import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { Button } from 'shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = ({ className = '' }) => {
  const dispatch = useDispatch()
  const countValue = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  const incrementByAmount = (): void => {
    dispatch(counterActions.incrementByAmount(10))
  }

  return (
    <div className={classNames('', {}, [className])}>
      <h1>{countValue}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
      <Button onClick={incrementByAmount}>increment by 10</Button>
    </div>
  )
}
