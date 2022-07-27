import { Table } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";

export default function Abouttable() {
  return (
    <>
      <Table borderless >
        <tbody id="abouttable">
          <tr class="tableblack">
            <td>
              <BsCheckLg  />
            </td>
            <td class="">We're expert and certified designers</td>
          </tr>
          <tr>
            <td>
              <BsCheckLg />
            </td>
            <td class="">We use only quality materials</td>
          </tr>
          <tr class="tableblack">
            <td>
              <BsCheckLg />
            </td>
            <td class="">We care about our customers</td>
          </tr>
          <tr>
            <td>
              <BsCheckLg />
            </td>
            <td class="">Smart & unique wall designs</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
