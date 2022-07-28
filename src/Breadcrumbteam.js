import { Breadcrumb } from "react-bootstrap/";

export default function Breadcrumnteam() {
  return (
    <>
      <hr class="crumbhr" />
      <Breadcrumb>
        <Breadcrumb.Item href="/" id="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
        <Breadcrumb.Item active>Team Details</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
