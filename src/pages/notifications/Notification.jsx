import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./notification.scss";
import NotificationWidget from "../../components/widget/NotificationWidget";


const Notification = () => {
  return (
    <div className="notification">
      <Sidebar />
      <div className="notificationContainer">
        <Navbar />
        <div className="widgets">
          <NotificationWidget type="notification" />
          <NotificationWidget type="order" />
          <NotificationWidget type="earning" />
          <NotificationWidget type="balance" />
        </div>
        
      </div>
    </div>
  );
};

export default Notification;
