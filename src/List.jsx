import Person from "./Person";
export default List = (people) => {
  return (
    <>
      {people.people.map((item) => {
        return <Person props={item} />;
      })}
    </>
  );
};
