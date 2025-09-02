function MenuItem({ pizza }) {
  const {
    // id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>{!soldOut ? <p>{unitPrice}</p> : <p>اتمام موجودی</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
