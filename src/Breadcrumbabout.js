import { Breadcrumb } from "react-bootstrap/";

export default function Breadcrumbabout() {
  return (
    <>
      <hr class="crumbhr" />
      <Breadcrumb>
        <Breadcrumb.Item href="/" id="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
