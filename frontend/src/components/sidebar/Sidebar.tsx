import React from 'react';
import styles from "../../styles/layout/Sidebar.module.scss";

import homeIcon from "../../assets/difficulty-icons/Home.svg";
import easyIcon from "../../assets/difficulty-icons/Easy.svg";
import normalIcon from "../../assets/difficulty-icons/Normal.svg";
import hardIcon from "../../assets/difficulty-icons/Hard.svg";
import harderIcon from "../../assets/difficulty-icons/Harder.svg";
import insaneIcon from "../../assets/difficulty-icons/Insane.svg";
import demonIcon from "../../assets/difficulty-icons/Demon.png";
import extremeDemonIcon from "../../assets/difficulty-icons/ExtremeDemon.png";

import DifficultyLevel from "./DifficultyLevel";

const Sidebar = () => {

    const difficultyData = [
        {
            title: "Home",
            description: "Go home to choose a different difficulty",
            src: homeIcon,
            alt: "Home",
        },
        {
            title: "Easy",
            classHoverTitle: "blue",
            description: "Basic challenges to get started",
            src: easyIcon,
            alt: "Easy",
        },
        {
            title: "Normal",
            classHoverTitle: "green",
            description: "Steady progress with moderate effort",
            src: normalIcon,
            alt: "Normal"
        },
        {
            title: "Hard",
            classHoverTitle: "yellow",
            description: "Push your limits with tougher tasks",
            src: hardIcon,
            alt: "Hard"
        },
        {
            title: "Harder",
            classHoverTitle: "poppy",
            description: "Complex challenges for advanced users",
            src: harderIcon,
            alt: "Harder"
        },
        {
            title: "Insane",
            classHoverTitle: "purple",
            description: "Extreme difficulty for the brave",
            src: insaneIcon,
            alt: "Insane"
        },
        {
            title: "Demon",
            classHoverTitle: "red",
            description: "Nearly impossible — only for masters",
            src: demonIcon,
            alt: "Demon"
        },
        {
            title: "Extreme Demon",
            classHoverTitle: "darkred",
            description: "God-tier challenge. Abandon hope, ye who enter.",
            src: extremeDemonIcon,
            alt: "Extreme Demon"
        }
    ];

    return (
        <aside className={ styles.sidebar }>
            <div className={ styles.sidebarContainer }>
                { difficultyData.map((difficulty, index) => (

                    <React.Fragment key={ difficulty.title }>
                        {index === 1 && (
                            <span>Level</span>
                        )}

                        { index === difficultyData.length - 2 && (
                            <span>Very hard</span>
                        ) }

                        <DifficultyLevel
                            title={ difficulty.title }
                            classHoverTitle={ difficulty.classHoverTitle }
                            description={ difficulty.description }
                            src={ difficulty.src }
                            alt={ difficulty.alt }
                        />
                    </React.Fragment>
                )) }

            </div>
        </aside>
    );
};

export default Sidebar;