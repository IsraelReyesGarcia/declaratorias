import React, { useEffect, useState } from "react";
import { getDeclaratorias } from "../api/declaratorias.api";
import { Button, Space, Radio, Checkbox, Col, Row } from "antd";

const ButtonDeclaratoria = () => {

  useEffect(() => {
    loadDeclaratoria();
    setCheck(!check);
  }, []);

  async function loadDeclaratoria() {
    const { data } = await getDeclaratorias();
    data.map(({tipo}) =>{
        setNumDecla([...numDecla, numDecla.label = tipo, numDecla.value = tipo]);
    });
    setNumDecla(data);
  }

  const onChange = (checkedValues) =>{
    console.log("Checked: " + checkedValues);
}  

  const [numDecla, setNumDecla] = useState([{
    label:'',
    value:''
  }]);
  const [check, setCheck] = useState(true);

  
  return (
    <Checkbox.Group defaultValue={numDecla.value} onChange={onChange} className="w-full" >
      <Row className="x-full flex justify-center aling-center">
        {numDecla.map((element, i) => (
          <Checkbox
            key={i}
            value={element.tipo}
            checked='true'
            className="px-2"
          >
            {" "}
            {element.tipo}{" "}
          </Checkbox>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

export default ButtonDeclaratoria;
