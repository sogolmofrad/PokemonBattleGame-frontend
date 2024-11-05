function PokemonCard({ img, name, onClick }) {
  return (
    <div className="bg-white w-[15rem] h-[15rem] p-[3rem] border-2 rounded-[5px] flex flex-col items-center" onClick={onClick}>
      <img src={img} title="name" />
      <h3>{name}</h3>
    </div>
  );
}

export default PokemonCard;
