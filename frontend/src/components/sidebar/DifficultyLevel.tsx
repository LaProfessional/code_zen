import React from 'react';
import styles from "../../styles/layout/DifficultyLevel.module.scss";

const DifficultyLvl = () => {
    return (
        <div className={ styles.container }>
            <img className={ styles.difficultyIcon } alt="Easy"/>
            <div className={ styles.description }>
                <h2>Normal</h2>
                <p>Intermediate tasks for growth</p>
            </div>
        </div>
    );
};

export default DifficultyLvl;