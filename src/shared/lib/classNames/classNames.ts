export type Mods = Record<string, boolean | string | undefined>

export function classNames (cls: string, additionalCls: Array<string | undefined> = [], mods: Mods = {}): string {
  return [
    cls,
    ...additionalCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
