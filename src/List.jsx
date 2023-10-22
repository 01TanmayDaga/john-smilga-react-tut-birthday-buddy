import Person from "./Person";
const List = (people) => {
  return (
    <>
      {people.people.map((item) => {
        return <Person props={item} />;
      })}
    </>
  );
};
export default List;
