declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
    const SVG: React.FC<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;