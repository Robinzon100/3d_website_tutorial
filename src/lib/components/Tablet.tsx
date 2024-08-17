import c from "./Tablet.module.css";
import Stars from '@/lib/icons/Stars';
import Arrow from '@/lib/icons/Arrow';
import { HTMLAttributes } from "react";

interface TabletProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Tablet = ({ className }: TabletProps) => {
    return (
        <div className={`${c.tablet_main} ${className ? className : ''}`}>
            <div className={c.tablet_tag}>
                <div className={c.tablet_tag_icon}>
                    <Stars />
                </div>

                <p className={c.tablet_tag_text}>new release</p>
            </div>

            <div className={c.tablet_content}>
                <p className={c.tablet_text}>
                    read more about it
                </p>
                <div className={c.tablet_arrow_icon}>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default Tablet;