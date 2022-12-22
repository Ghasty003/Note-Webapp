const Card: React.FC = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full">
            <div className="bg-primary w-96 my-5 p-5 text-center shadow-xl even:rounded-tr-xl even:rounded-bl-xl odd:rounded-tl-xl odd:rounded-br-xl">
                <h2 className="text-2xl font-bold mb-2">Title</h2>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus expedita velit tempore, 
                    iusto provident saepe rem nulla nisi nesciunt atque placeat error sapiente blanditiis vero 
                    ratione. Atque quidem et sed.
                </p>
            </div>
        </div>
    );
}

export default Card;