import { Breadcrumb } from "react-bootstrap/";

export default function Breadcrumbcontact() {
  return (
    <>
      <hr class="crumbhr" />
      <Breadcrumb>
        <Breadcrumb.Item href="/" id="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
