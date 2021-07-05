// map of the list of doctor for index
import React from "react";

const Doc: React.FC<any> = ({ item }) => {

  return (
    <div>
      {item &&
        item.map((i: any) => (
          <>
            <h3>{i.name}</h3>
            <p>{i.line1}</p>
            <p>{i.line2}</p>
            <p>
              {i.address.city} ({i.address.country})
            </p>

            <br />
          </>
        ))}
    </div>
  );
};

export default Doc;
