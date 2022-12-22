interface Props {
    title: string;
    content: string;
}


const Card: React.FC<Props> = ({ title, content}) => {
    return (
        <div className="bg-primary w-80 sm:w-96 my-5 p-5 text-center shadow-xl even:rounded-tr-xl even:rounded-bl-xl odd:rounded-tl-xl odd:rounded-br-xl">
            <h2 className="text-2xl font-bold mb-2">{ title }</h2>
            <p className="text-start">{ content }</p>
        </div>
    );
}

export default Card;