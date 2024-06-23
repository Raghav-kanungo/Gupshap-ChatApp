import React from "react";
import Header from "../../../component/chat/notification/Header";
import List from "../../../component/chat/notification/List";
import { notifications } from "../../../component/chat/notification/notificationData";

const Notification = ({ setNotification, notification }) => {
    return (
        <div className="absolute bottom-28 left-9 w-96 max-h-96 p-5 flex flex-col gap-5 border border-black rounded-lg border-opacity-20 bg-secondary-light shadow-xl">
            <Header
                notification={notification}
                setNotification={setNotification}
                count={notifications.length}
            />
            <List data={notifications} />
        </div>
    );
};

export default Notification;
