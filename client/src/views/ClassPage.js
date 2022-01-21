import ClassCard from "../components/ClassCard";

const ClassPage = () => {
  return (
    <div>
      <h1>ClassPage</h1>
      <div>
        <img
          src="https://ik.imagekit.io/johannes/class_O25XFmHAm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642751047935"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2">
        <ClassCard />
      </div>
    </div>
  );
};

export default ClassPage;
