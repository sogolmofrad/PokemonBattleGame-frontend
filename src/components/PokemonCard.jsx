function PokemonCard({ img, name, onClick }) {
  return (
    <div className="bg-white w-[15rem] h-[15rem] p-[3rem] border-2 rounded-[5px] flex flex-col items-center cursor-pointer" onClick={onClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default PokemonCard;