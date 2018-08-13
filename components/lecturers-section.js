const Lecturer = props => {
  const { img, name, bio } = props;
  return (
    <div className="lecturer">
      <img src={img} />
      <div className="lecturer-bio">
        <h2> {name}</h2>
        <div> </div>
        <h3> {bio}</h3>
      </div>
    </div>
  );
};

const LecturersSection = props => {
  const { lecturersData } = props;
  let lecturers = '';
  if (lecturersData) {
    lecturers = lecturersData.map((row, i) => {
      return <Lecturer key={i} name={row.name} bio={row.bio} img={row.image} />;
    });
  }
  return <div className="lecturers-section">{lecturers}</div>;
};
export default LecturersSection;
