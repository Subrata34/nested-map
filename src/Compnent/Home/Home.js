import React from "react";
const users = [
  {
    name: "Subrata Modak ",
    age: 25,
    phone: [{ home: "01235554455" }, { office: "019852224565" }],
  },
  {
    name: "Uthvash",
    age: 45,
    phone: [{ home: "01354554878" }, { office: "02558884556" }],
  },
];
const Home = () => {
  return (
    <div>
      <h1>Nested Lists </h1>
      {users.map((user,index)=><article key ={index}>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
          {
              user.phone.map((phone,index)=><div>
                  <p>Home:{phone.home}</p>
                  <p>office:{phone.office}</p>
              </div>)
          }
      </article>)}
    </div>
  );
};

export default Home;
