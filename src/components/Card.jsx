const Card = ({ img, p, name }) => {
  return (
    <div className="flex flex-col h-auto px-5 mt-24 bg-gray-100 rounded-md">
      <img
        src={img}
        alt={img}
        className="w-16 h-16 mx-auto rounded-full -mt-9"
      />
      <h3 className="text-2xl font-bold my-7">{name}</h3>
      <p className="mb-10 text-sm">{p}</p>
    </div>
  );
};

export default Card;
