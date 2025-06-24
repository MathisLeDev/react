import type {Fruit} from "../App.tsx";

type Props = {
    fruit: Fruit;
    index: number;
    gameState: "start" | "playing" | "end" | "loose";
    firstCard: number | null;
    secondCard: number | null;
    foundCards: number[];
    handleCardClick: (index: number) => void;
}
const Card = (props: Props) => {
    const { fruit, index, gameState, firstCard, secondCard, foundCards, handleCardClick } = props;

    const isCardFound = ()=> {
        if(gameState === "start") {
            return true;
        }
        if(firstCard !== null && gameState === "playing" && firstCard === index ) {
            return true;
        }
        if(secondCard !== null && gameState === "playing" && secondCard === index) {
            return true;
        }
        if(foundCards.some((foundCard)=>foundCard === index) && gameState !== "start") {
            return true;
        }

    }

    return (
        <div
            key={index}
            className={
                `text-green-500  ${isCardFound() ? `rotate-y-0 ${fruit.bg}`: "rotate-y-180"} duration-500 flex items-center justify-center h-[100px] w-[100px] bg-gray-700 ${gameState === "playing" && `hover:opacity-50 cursor-pointer`} rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100`
            }
            onClick={()=>handleCardClick(index)}
        >
            <span className={` ${isCardFound() ? ' text-white': "  text-white/0"} duration-1000 text-4xl`}>
            {isCardFound() &&
                fruit.fruit
       }
            </span>
        </div>
    );
};

export default Card;