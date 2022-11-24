import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import "./OwnerDropDown.css";

function OwnerDropDown(props) {
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
              <Link className="link-route" to="/applications">
                <div className="m-2">
                  <strong>Your Properties</strong>
                </div>
              </Link>

              <Link className="link-route" to="/">
                <div className="m-2">
                  <strong>Total Views</strong>
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

export default OwnerDropDown;
