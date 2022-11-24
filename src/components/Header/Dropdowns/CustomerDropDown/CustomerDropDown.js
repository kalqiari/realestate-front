import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import "./CustomerDropDown.css";

function CustomerDropDown(props) {
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
                  <strong>Your Applications</strong>
                </div>
              </Link>

              <Link className="link-route" to="/">
                <div className="m-2">
                  <strong>Your Favorites</strong>
                </div>
              </Link>
              <Link className="link-route" to="/">
                <div className="m-2">
                  <strong>Check Offer History</strong>
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

export default CustomerDropDown;
