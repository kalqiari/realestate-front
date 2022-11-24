import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
// import "./OwnerDropDown.css";

function DropDown(props) {
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
              <Link className="link-route" to={`/${props.infoPath}`}>
                <div className="m-2">
                  <strong>{props.info}</strong>
                </div>
              </Link>

              <Link className="link-route" to={`/${props.anotherInfoPath}`}>
                <div className="m-2">
                  <strong>{props.anotherInfo}</strong>
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

export default DropDown;
