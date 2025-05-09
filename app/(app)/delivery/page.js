export default function Delivery() {
  return (
    <div id="main-div" className="max-w-4xl mx-auto p-6">
      <h1 className="text-center font-extrabold font-calibri text-3xl mb-6">
        Общие условия
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Мы стремимся предоставить вам наилучший опыт покупок и оперативную
        доставку. Пожалуйста, ознакомьтесь с нашими условиями доставки, чтобы
        узнать подробности о том, как ваши товары будут доставлены.
      </p>

      <h1 className="text-center font-extrabold font-calibri text-3xl mb-6">
        Время обработки заказа
      </h1>
      <p className="text-gray-700 mb-8">
        Время обработки заказа: Все заказы обрабатываются в течение 1-2 рабочих
        дней с момента их поступления. Заказы не обрабатываются и не
        отправляются в выходные и праздничные дни.
      </p>

      <h2 className="font-extrabold font-calibri text-2xl mb-4">
        Способы доставки
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
        <li>
          <span className="font-semibold">Почта России</span> (доставка в
          отделение или адресная)
        </li>
        <li>
          <span className="font-semibold">Курьерские службы</span> (СДЭК,
          Boxberry, DPD и др.)
        </li>
        <li>
          <span className="font-semibold">Самовывоз</span> (если у вас есть
          пункт выдачи)
        </li>
      </ul>

      <h2 className="font-extrabold font-calibri text-2xl mb-4">
        Сроки доставки
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
        <li>
          <span className="font-semibold">3–7 рабочих дней</span> – в крупные
          города (Москва, СПб, Казань и др.)
        </li>
        <li>
          <span className="font-semibold">7–14 рабочих дней</span> – в
          отдалённые регионы
        </li>
        <li>Точные сроки зависят от выбранной службы доставки.</li>
      </ul>

      <h2 className="font-extrabold font-calibri text-2xl mb-4">
        Стоимость доставки
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
        <li>
          <span className="font-semibold">Бесплатная доставка</span> – при
          заказе от <span className="font-bold">5 000 ₽</span>
        </li>
        <li>
          <span className="font-semibold">290–500 ₽</span> – стандартная
          доставка (зависит от региона)
        </li>
        <li>
          <span className="font-semibold">Экспресс-доставка</span> (+500–1 000 ₽
          к стандартной стоимости)
        </li>
      </ul>

      <h2 className="font-extrabold font-calibri text-2xl mb-4">
        Отправка заказов
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
        <li>
          Заказы отправляются в течение{" "}
          <span className="font-semibold">1–2 рабочих дней</span> после оплаты.
        </li>
        <li>Трек-номер для отслеживания приходит на почту или в SMS.</li>
      </ul>

      <h2 className="font-extrabold font-calibri text-2xl mb-4">
        Возврат и обмен
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
        <li>
          Возврат возможен в течение{" "}
          <span className="font-semibold">14 дней</span> после получения.
        </li>
        <li>Товар должен быть в оригинальной упаковке, без следов носки.</li>
      </ul>
    </div>
  );
}
