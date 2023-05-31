import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CustomLink.module.scss';

export enum CustomLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface CustomLinkProps extends LinkProps{
  className?: string;
  children: ReactNode;
  theme?: CustomLinkTheme
}

export const CustomLink: FC<CustomLinkProps> = (props) => {
    const {
        className,
        children,
        theme = CustomLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.customLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
