import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [descShow, setDescShow] = useState(false);
  // console.log(name, img, options);
  console.log(descShow);
  return (
    <Container
      className="p-4 h-100 rounded-2 lang-card"
      style={{ background: "#FFEC5C" }}
      onClick={() => setDescShow(!descShow)}
      type="button"
    >
      {!descShow && (
        <Container>
          <Image src={img} width="70%" className="lang-logo"></Image>
          <h3 className="display-6 ">{name}</h3>
        </Container>
      )}
      {!descShow || (
        <ul className="h-100 d-flex flex-column justify-content-center ">
          {options.map((item) => {
            return <li className="text-start h5">{item}</li>;
          })}
        </ul>
      )}
      {/* {!descShow ? (
        <Container>
          <Image src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      ) : (
        <ul className="h-100>
          {options.map((item) => {
            return <li className="text-start h5">{item}</li>;
          })}
        </ul>
      )} */}
    </Container>
  );
};

export default Language;
