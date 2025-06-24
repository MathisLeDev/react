import {useEffect, useState} from 'react';
import Card from "./Card.tsx";
import type {Fruit} from "../App.tsx";

type Props = {
    availableFruits: Fruit[];
    gameState: "start" | "playing" | "end" | "loose";
    onRestart: () => void;
    onStart: () => void;
    endGame: () => void;
}

const Board = (props: Props) => {
    const {availableFruits, gameState, endGame, onStart, onRestart} = props;


    const [firstCard, setFirstCard] = useState<number | null>(null);
    const [secondCard, setSecondCard] = useState<number | null>(null);
    const [foundCards, setFoundCards] = useState<number[]>([]);


    const handleCardClick = (index: number) => {
        if (firstCard === null) {
            setFirstCard(index);
        } else if (secondCard === null && index !== firstCard) {
            setSecondCard(index);
        }
    }


    const resetCards = () => {
        setFirstCard(null);
        setSecondCard(null);
    };


    useEffect(() => {
        if (firstCard !== null && secondCard !== null) {
            if (availableFruits[secondCard] === availableFruits[firstCard]) {
                setFoundCards((prev) => [...prev, firstCard, secondCard]);
                resetCards();
            } else {
                setTimeout(() => {
                    resetCards()
                }, 1000);
            }

        } else {
            setTimeout(() => {
                resetCards();
            })
        }
    }, [secondCard]);

    useEffect(() => {
        if (foundCards.length === availableFruits.length) {
            alert("Congratulations! You found all pairs!");
            endGame()
        }
    }, [foundCards]);

    const handleRestart = () => {
        setFirstCard(null);
        setSecondCard(null);
        setFoundCards([]);
        onRestart();
    }


    const getButtonTextOnStatus = () => {
        switch (gameState) {
            case "start":
                return (<button
                        type={"button"}
                        className={
                            "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        }
                        onClick={onStart}
                    >
                        Start Game
                    </button>
                )

            case "end":
                return (<button
                    type={"button"}
                    className={
                        "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    }
                    onClick={handleRestart}
                >
                    Retry Game
                </button>)
            default:
                return <button
                    type={"button"}
                    disabled={true}
                    className={
                        "bg-blue-500 opacity-0 text-white px-4 py-2 rounded hover:bg-blue-600"
                    }
                >
                    Retry Game
                </button>
        }
    }

    return (<>
        <div className={"flex flex-col 2xl:flex-row gap-8 border-3 rounded-xl border-black !p-4"}>
            <div className={"grid grid-cols-7 gap-4"}>
                {availableFruits.map((fruit, index) => (
                 <Card fruit={fruit} index={index} gameState={gameState} firstCard={firstCard} secondCard={secondCard} foundCards={foundCards} handleCardClick={handleCardClick}/>
                ))}
            </div>
        </div>
            {getButtonTextOnStatus()}
        </>
    );
};

export default Board;