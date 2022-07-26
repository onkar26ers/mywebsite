import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export default function Pages() {
  return (
    <ButtonToolbar aria-label="pagebuttons">
      <ButtonGroup aria-label="Firstgroup">
        <Button id="pagesbutton">1</Button> 
      </ButtonGroup>
      <ButtonGroup aria-label="Secondgroup">
        <Button id="pagesbutton">2</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Thirdgroup">
        <Button id="pagesbutton">&#xfe65;</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
