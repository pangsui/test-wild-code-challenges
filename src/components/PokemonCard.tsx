interface PokemonProp {
  imgSrc?: string;
  name: string;
}
interface AppProp {
  pokemonListArr: PokemonProp;
}
function PokemonCard({ pokemonListArr }: AppProp) {
  return (
    <div>
      <figure>
        {pokemonListArr.imgSrc ? (
          <img src={pokemonListArr.imgSrc} alt={pokemonListArr.name} />
        ) : (
          <p className="no-image">???</p>
        )}
        <figcaption className="pokeman-name">{pokemonListArr.name}</figcaption>
      </figure>
    </div>
  );
}
export default PokemonCard;
