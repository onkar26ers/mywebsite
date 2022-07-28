import { Breadcrumb } from "react-bootstrap/";

export default function Breadcrumbblog() {
  return (
    <>
      <hr class="crumbhr" />
      <Breadcrumb>
        <Breadcrumb.Item href="/" id="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
