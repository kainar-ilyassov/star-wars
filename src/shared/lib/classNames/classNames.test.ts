import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames function', () => {
  test('with only first param', () => {
    expect(classNames('someClass'))
      .toBe('someClass')
  })

  test('with additional class names', () => {
    expect(classNames('someClass', ['class1', 'class2']))
      .toBe('someClass class1 class2')
  })

  test('with modes added by true', () => {
    expect(classNames('someClass', [], { selected: true }))
      .toBe('someClass selected')
  })

  test('with modes added by false', () => {
    expect(classNames('someClass', [], { selected: false }))
      .toBe('someClass')
  })
})
