function PokemonCard({ img, name }) {
  return (
    <div className="w-[15rem] h-[15rem] p-[3rem] border-2 rounded-[5px] flex flex-col items-center">
      <img src={img} title="name" />
      <h3>{name}</h3>
    </div>
  );
}

export default PokemonCard;
