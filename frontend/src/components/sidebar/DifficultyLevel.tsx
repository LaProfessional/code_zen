import React from 'react';
import styles from "../../styles/layout/DifficultyLevel.module.scss";

type IconProps = React.ImgHTMLAttributes<HTMLImageElement>;

interface DifficultyLevelProps extends IconProps {
    title: string;
    classHoverTitle?: string;
    description: string;
}

const DifficultyLevel: React.FC<DifficultyLevelProps> = ({title, classHoverTitle, description, src, alt},) => {

    return (
        <div className={ styles.container }>
            <img className={ styles.difficultyIcon } src={ src } alt={ alt }/>
            <div>
                <h2 className={ styles[classHoverTitle || ""] }>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    );
};

export default DifficultyLevel;