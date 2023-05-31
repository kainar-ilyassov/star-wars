declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const SVG: React.FC<React.SVGAttributes<SVGElement>>
  export default SVG
}

declare const _IS_DEV_: boolean
