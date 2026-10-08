// 1.Реализовать всплывающие уведомления: уведомление
// должно вызываться с помощью функции “конструктора”
// уведомления, которая принимает название, текст и тип
// уведомления (успех, предупреждение, ошибка).

// 2.Сверстать форму, после отправки которой появляется
// уведомление о том, что заказ успешно создан, а также
// появляются 3 кнопки: “Заказ оплачен”, “Заказ
// отправлен”, “Заказ получен”, при нажатии на которые
// появляется уведомление с соответствующим сообщением.

// varibales
// const form = document.querySelector("form");
// const paidBtn = document.querySelector(".paidBtb");
// const sentBtn = document.querySelector(".sentBtn");
// const recievedBtn = document.querySelector(".recievedBtn");
// const notificationContainer = document.querySelector(".notificationContainer");

// 2.listeners

// {
//   id: Number | String,
//   title: String,
//   type: String,
//   info: String,
// }

// 3.constructor
// class Notifications {
//   static notificationsList = [];
//   constructor(title, type, info) {
//     this.id = Math.random();
//     this.title = title;
//     this.type = type; // "success" | "info" | "error"
//     this.info = info;
//   }
//   static renderNotifications(list) {}
//   static deleteNotifications(id) {}
// }
