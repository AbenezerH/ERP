import "./sidebar.scss";
import { Link } from "react-router-dom";

const Hrsidebar = () => {
   return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/addemploy" style={{ textDecoration: "none" }}>
            <li>
              <span>Add Employee</span>
            </li>
          </Link>
          <Link to="/addgrade" style={{ textDecoration: "none" }}>
            <li>
              <span>Add Grade</span>
            </li>
          </Link>
          <Link to="/department" style={{ textDecoration: "none" }}>
            <li>
              <span>Add epartment</span>
            </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Hrsidebar;
