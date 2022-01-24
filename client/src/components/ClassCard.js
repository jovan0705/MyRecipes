const ClassCard = ({ id, name, image }) => {
  return (
    <div className="border border-primary flex col-span-1 rounded-xl overflow-hidden">
      <div className="flex-1 rounded-xl">
        <img src={image} />
      </div>
      <div class="flex-1 flex flex-col p-5">
        <h2 class="card-title">
          {name}
          <div class="badge mx-2">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy This Class</button>
          <button class="btn btn-ghost">More info</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
