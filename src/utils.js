const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const formatAMPM = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var date_number = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = `${date_number.toString().padStart(2, '0')} ${monthNames[month]} ${year} at ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return strTime;
};

export const splitNotifications = (notifications) => {
    let todayNotifications = [], yesterdayNotifications = [];
    const todayBoundaryTimestamp = 1557939600;
    for(let notification of notifications){
        if(notification.createdAt >= todayBoundaryTimestamp){
            todayNotifications.push(notification);
        }else{
            yesterdayNotifications.push(notification);
        }
    }
    return [todayNotifications, yesterdayNotifications];
};