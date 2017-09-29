import PushNotification from 'react-native-push-notification';
import moment from 'moment';

module.exports = {
  startNotifications() {
    PushNotification.localNotificationSchedule({
      message: todayAlertString(),
      repeatType: 'minute',
      date: new Date(Date.now() + (30 * 1000)),
    });
  },

  stopNotification() {
    PushNotification.cancelAllLocalNotifications();
  },
}

function todayAlertString() {
  let alerts = [];
  let day;
  for(let i = 0; i <= 355; i++) {
   alerts.push(`You are beautyful ${i}`);
  }
  day = moment().format('MM DD').substring(3);
  return alerts[parseInt(day)];
}
