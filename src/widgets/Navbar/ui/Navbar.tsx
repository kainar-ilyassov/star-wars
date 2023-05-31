import {classNames} from 'shared/lib/classNames/classNames';
import {CustomLink, CustomLinkTheme} from "shared/ui/CustomLink/ui/CustomLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <CustomLink
                    theme={CustomLinkTheme.PRIMARY}
                    to={'/'}
                    className={cls.mainLink}
                >
                    Main page
                </CustomLink>
                <CustomLink
                    theme={CustomLinkTheme.SECONDARY}
                    to={'/about'}
                    className={cls.aboutLink}
                >
                    About page
                </CustomLink>
            </div>
        </div>
    );
};
