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

// ---------- 1. Переменные ----------
const form = document.querySelector("form");
const orderButtons = document.querySelector(".orderButtons");
const container = document.querySelector(".notificationContainer");

// ---------- 2. Конструктор уведомления ----------
class Notifications {
  static notoficationsList = [];

  constructor(title, type, info) {
    this.id = Date.now() + Math.random();
    this.title = title;
    this.type = type; // "success" | "warning" | "error" | "info"
    this.info = info;
  }

  static renderNotifications(list) {
    container.innerHTML = "";

    list.forEach((item) => {
      const el = document.createElement("div");
      el.className = `notification ${item.type}`;

      el.innerHTML = `
                <div class="notificationIcon">✓</div>
                <div class="notificationContent">
                    <h3>${item.title}</h3>
                    <p>${item.info}</p>
                </div>
                <button class="closeBtn" data-id="${item.id}">×</button>
            `;

      el.querySelector(".closeBtn").addEventListener("click", () => {
        Notifications.deleteNotifications(item.id);
      });

      container.appendChild(el);
    });
  }

  static deleteNotifications(id) {
    Notifications.notoficationsList = Notifications.notoficationsList.filter(
      (item) => item.id !== id,
    );
    Notifications.renderNotifications(Notifications.notoficationsList);
  }

  static show(title, type, info) {
    const notification = new Notifications(title, type, info);
    Notifications.notoficationsList.push(notification);
    Notifications.renderNotifications(Notifications.notoficationsList);

    setTimeout(() => {
      Notifications.deleteNotifications(notification.id);
    }, 4000);
  }
}

// ---------- 3. Обработчики событий ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  Notifications.show(
    "Order created",
    "success",
    "Wait for further information",
  );
  orderButtons.classList.add("show");
  form.reset();
});

orderButtons.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("paidBtb")) {
    Notifications.show("Order paid", "success", "Wait for shipment");
  } else if (target.classList.contains("sentBtn")) {
    Notifications.show("Order sent", "warning", "Wait for the courier");
  } else if (target.classList.contains("recievedBtn")) {
    Notifications.show(
      "Order received",
      "success",
      "We are waiting for you again!",
    );
  } else {
    Notifications.show(
      "Unknown order status",
      "error",
      "Please contact support",
    );
  }
});
