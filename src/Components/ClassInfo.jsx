import React, { useState, useEffect } from "react";

function ClassInfo(props) {
  const [classInfo, setClassInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/classes/${props.index}`)
      .then(res => res.json())
      .then(response => {
        setClassInfo(response);
        setIsLoading(false);
        props.classSelect(response);
      })
      .catch(error => console.log(error));
  }, [props]);

  return (
    <div>
      {isLoading && <p>Please Wait</p>}
      <div color = "white">
        <label> 
          <h3>Hit Die: {classInfo.hit_die}</h3>
        </label>
      </div>
    </div>
  );
}

export default ClassInfo;

