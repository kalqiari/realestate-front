import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import "./AdminDropDown.css";

function AdminDropDown(props) {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key={"bottom"}
        placement="bottom"
        rootClose
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Body>
              <Link className="link-route" to="/properties">
                <div className="m-2">
                  <strong>Rented Properties</strong>
                </div>
              </Link>

              <Link className="link-route" to="/">
                <div className="m-2">
                  <strong>New Customers</strong>
                </div>
              </Link>
            </Popover.Body>
          </Popover>
        }
      >
        {props.children}
      </OverlayTrigger>
    </>
  );
}

export default AdminDropDown;
