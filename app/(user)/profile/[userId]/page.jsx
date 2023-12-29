function Userprofile({ params }) {
  const user = params.userId;
  return (
    <>
      <section>
        <h1>{user}</h1>
      </section>
    </>
  );
}

export default Userprofile;
