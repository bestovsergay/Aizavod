import React from 'react';

// --- Image Paths (Best Practice: Local Static Assets) ---
const banner1 = '/images/banner1.jpg';
const stressedPerson = '/images/stressedPerson.jpg';
const secretTechnology = '/images/secretTechnology.jpg';
const kontentZavodLogo = '/images/kontentZavodLogo.png';
const marketingRevolution = '/images/marketingRevolution.jpg';
// Creates an array of paths: ['/images/case1.jpg', '/images/case2.jpg', ...]
const casesImages = Array.from({ length: 12 }, (_, i) => `/images/case${i + 1}.jpg`);


// --- Helper Components ---

const TextContent: React.FC<{ html: string, className?: string }> = ({ html, className = '' }) => {
  const sanitizedHtml = html
    .replace(/<font color="([^"]+)">/g, '<span style="color: $1">')
    .replace(/<\/font>/g, '</span>')
    .replace(/\n‌/g, '<br />');
  return (
    <div
      className={`text-center text-white text-base md:text-lg leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

const ResponsiveIframe: React.FC<{ src: string, isVertical?: boolean }> = ({ src, isVertical = false }) => (
  <div className={`relative w-full overflow-hidden rounded-lg ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
    <iframe
      src={src}
      className="absolute top-0 left-0 w-full h-full"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
      frameBorder="0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
);

const CtaButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center bg-[#fcc419] text-black font-bold py-4 px-6 rounded-xl text-lg hover:bg-yellow-400 transition-colors my-4 shadow-lg shadow-yellow-500/20"
  >
    {children}
  </a>
);

const Divider: React.FC = () => (
    <div className="w-full flex justify-center py-6">
        <svg className="h-8 w-8 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans flex items-start justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-10">

        <img src={banner1} alt="Banner" className="rounded-lg w-full" />
        <Divider />
        <TextContent html={`<font color="#f1f3f5"><b>Главный секрет больших охватов и быстрого набора подписчиков</b></font>
‌ИЛИ
‌<font color="#e9ecef"><b>Как создавать десятки коротких вирусных видео</b></font>
‌
1. За несколько минут на полном автомате
2. При минимальных затратах сил, времени и денег
3. Без выгорания. В кайф и в удовольствие`} />
        
        <Divider />
        <TextContent html={`Так вышло что в современном медиа пространстве каждый созданный рилс - это некий лотерейный билет, который завтра может сделать тебя богатым и знаменитым.
‌
‌<font color="#ffd43b">И если бы эти билеты были бы бесплатными, то сколько билетов ты бы взял? Сто? Двести? Тысячу?</font>
‌
Но почему большинство их даже не пытаются взять, а продолжают наблюдать за тем, как их берут другие?

Потому, что этот марафон не выдерживает почти НИКТО. Все начинают с энтузиазмом Юрия Гагарина, перед первым полётом в космос, а через пару недель в их блоге тишина,
‌как в морге в 4 утра
<b><font color="#ffd43b">+</font></b>
тотальное выгорание, стресс, куча потраченных впустую денег, сил и времени. А в итоге 150 просмотров на каждом ролике.
‌
<font color="#ffe066">‌Знакомо, не правда ли?</font>`} />
        <img src={stressedPerson} alt="Stressed person" className="rounded-lg w-full" />
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`В итоге, ты в поиске решения скупаешь все курсы по созданию коротких видео, понимая то, что короткий видео контент - это золотая жила для любого направления и бизнеса и то, что
<font color="#ffd43b">БРОСАТЬ КАТЕГОРИЧЕСКИ НЕЛЬЗЯ.</font>

Но, как показывает реальная практика - все эти курсы и обучения не дают ровным счётом никакого результата.
<font color="#ffd43b">ПРОСТО НОЛЬ.</font>

<b style=""><font color="#f76707">ПОЧЕМУ?</font></b>
Всё просто - цель создателей любых курсов это в очередной раз заработать на тебе деньги, продав тебе очередную порцию иллюзий счастливого будущего и миллионных охватов, показывая тебе красивые картинки со впечатляющими результатами.<font color="#e03131"></font>
‌
‌Но, если у кого и есть впечатляющие результаты, то они достигнуты совершенно за счёт другого, о чём создатели курсов и обучений не расскажут НИКОГДА.
‌
‌Почему?
‌<font color="#ffd43b">Потому, что их курсы и обучения будут попросту не нужны НИКОМУ. </font>

ЗАБУДЬ ПРО КУРСЫ РАЗ И НАВСЕГДА - <font color="#fd7e14"><b>ЭТО ИЛЛЮЗИЯ</b></font>`} />
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`<b>Прямо сейчас я открою тебе тот самый секрет, о чём молчат топовые блогеры, эксперты и создатели курсов.</b>
‌
<font color="#ffe066">‌То, благодаря чему НА САМОМ ДЕЛЕ достигаются:</font>
1. Миллионные охваты
2. Быстро набираются огромные базы подписчиков
3. Делаются продажи на десятки миллионов
‌
<font color="#ffd43b">ЛЕГКО. БЫСТРО. ДЁШЕВО. </font>
И НЕВЕРОЯТНО ЭФФЕКТИВНО
В удовольствие, без выгорания и стресса...

Итак, поехали!`} />
        <img src={secretTechnology} alt="Secret technology" className="rounded-lg w-full" />
        
        <Divider />
        <TextContent html={`<font color="#fcc419">Каждый день ты видишь в ленте следующую картину:</font>
У одних и тех же блогеров и экспертов публикуется очень много видео.
‌
ОЧЕНЬ МНОГО.

<font color="#fcc419">Они всегда на виду.</font>
‌Но столько контента вручную создавать
‌НЕВОЗМОЖНО.

<font color="#fcc419">И тебе каждый раз приходит мысль что эти видео каким-то волшебным образом создаются и публикуются сами? 
</font>
И ты прав! Это действительно так!
НО КАК?
‌
<b><font color="#fd7e14">Скажу больше:</font></b>
‌На всех этих видео не сам человек, а его цифровой аватар, причём настолько реалистичный, что его отличить от настоящего практически невозможно.
‌
‌В ЧЁМ МАГИЯ?

Как бы удивительно это ни звучало, но сейчас уже почти все топовые и быстрорастущие аккакаунты ведутся полностью автоматизированно.
‌
‌&nbsp;<font color="#ffd43b">С помощью технологии</font>
‌<font color="#ffd43b">\"КОНТЕНТ ЗАВОД\"</font>`} />
        
        <img src={kontentZavodLogo} alt="Kontent Zavod Logo" className="rounded-lg mx-auto" />
        <Divider />
        <TextContent html={`<font color="#f1f3f5">КОНТЕНТ ЗАВОД
Автогенератор коротких вирусных видео с твоим цифровым аватаром

Это инновационная технология, позволяющая автоматически создавать и публиковать огромное количество коротких вирусных видео с твоим цифровым аватаром.</font>
‌<font color="#f1f3f5">
</font>Это мощнейший инструмент массового захвата рынка - конвейер по производству вирусных видео. <font color="#f1f3f5">

Необходим для тех, кто ведёт соц сети или работает в области контент маркетинга и видео продакшена:</font>
‌БЛОГЕРОВ
ЭКСПЕРТОВ
ОНЛАЙН ШКОЛ
КОММЕРЧЕСКИХ АККАУНТОВ
ЛОКАЛЬНОГО ОФФЛАЙН БИЗНЕСА`} />
        <ResponsiveIframe src="https://rutube.ru/play/embed/b2e178c371940fea66b23dc31de1d1bc" />
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`<font color="#fcc419"><b>НУ А ТЕПЕРЬ САМОЕ ГЛАВНОЕ:</b></font>
‌
‌В ЧЁМ СУТЬ?
‌
<font color="#fcc419"><b>1. Цифровой аватар.</b></font>
‌Цифровой аватар обладает определённой МАГИЕЙ. Это необъяснимо словами и пока не до конца понятно как это работает, но по статистике видео с цифровым аватаром вызывают ГОРАЗДО больший интерес и вовлечение аудитории. Факт, подтверждённый цифрами и реальным практическим опытом.
‌
<font color="#fcc419"><b>2. Мощнейшие сервисы \"под капотом\"</b></font>
‌усиленные инновационными технологиями и высокоэффективными промтами, разработанными на основе анализа и обучения на сотнях тысяч вирусных видео.
‌
<font color="#fcc419"><b>3. Автоматизация.</b></font>
‌Полностью автоматизированы процессы по созданию и публикации видео.
‌
‌<font color="#fcc419"><b>4. Экономия времени.</b></font>
‌Не надо больше тратить целый день на генерацию идеи, сценария, текста. Не надо больше никуда ехать, ни в студию, ни в локацию. Не надо снимать и монтировать видео. И даже не надо готовое видео выкладывать вручную. На создание одного видео уходит 5-7 минут.
‌
<font color="#fcc419"><b>5. Экономия денег.</b></font>
‌Больше не надо тратить деньги на студию, оборудование, монтаж и т.д. Себестоимость создания одного видео 100-200 рублей (в зависимости от длительности видео).
‌
<font color="#fcc419"><b>6. Экономия сил и нервов.</b></font>
‌Больше никакого выгорания, усталости и стресса. Только удовольствие от процесса создания видео и наблюдения как твои видео наконец-то начинают залетать, приносить подписчиков и продажи твоих продуктов или услуг.
‌
<font color="#fcc419"><b>7. Эффективность.</b></font>
‌Максимальная эффективность и мощный потенциал каждого видео к вирусности за счёт внутренних технологий контент завода.`} />
        <ResponsiveIframe src="https://vk.com/video_ext.php?oid=-85527041&id=456239017&hd=2" isVertical={true} />
        <CtaButton href="https://t.me/kontehtzavod_bot">ДОСТУП К КОНТЕНТ ЗАВОДУ ЗДЕСЬ</CtaButton>
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`<font color="#fcc419">КАК РАБОТАЕТ КОНТЕНТ ЗАВОД?</font>

Не смотря на очень сложную техническую часть того, что находится "под капотом" контент завода - он ОЧЕНЬ прост в использовании. Весь процесс работы по созданию и публикации видео происходит полностью в телеграм боте.
‌
<font color="#fcc419">‌Ты можешь осуществлять все действия по работе с видео в своём телефоне, не выходя из бота. </font>

<font color="#fcc419"><b>1. Создание сценария.</b></font>
‌Можно отправить в бот ссылку на любое видео в качестве референса, файл с телефона, голосовое, текст или свою идею или запрос. На основе этого создаётся уникальный, цепляющий вирусный сценарий.
‌
<font color="#fcc419"><b>2. Генерация видео.</b></font>
‌Бот создает новый сценарий и текст с помощью ChatGPT 5 на основе специальных промтов внутри контент завода. Озвучивает текст и создает видео с твоим цифровым аватаром и твоим голосом через Heygen.
‌
<font color="#fcc419"><b>‌3. Монтаж.</b></font>
‌Далее видео с твоим цифровым аватаром отправляется на автоматический монтаж, где происходит добавление субтитров и стоковых видеовставок в соответствии со смыслом видео. Можно выбирать стиль субтитров и процент видеовставок (от 10 до 100%)

<b style=""><font color="#fcc419">4. Публикация.</font></b>
‌Далее твоё видео отправляется на автоматическую публикацию в твои аккаунты в соц сетях.`} />
        
        <div className="py-8" />
        <TextContent html={`КЕЙСЫ. КЕЙСЫ. КЕЙСЫ.`} />
        <TextContent html={`<b><font color="#ffd43b">Самый важный ключевой момент:</font></b>`} />
        <TextContent html={`<b>Все хотят видеть кейсы</b>
‌<b>НО</b>
‌Суть в том, что они есть у всех (у большинства конечно же они нарисованные, а не настоящие)
‌
<font color="#ffd43b">‌А у тех, у кого есть настоящие кейсы - их процент от общего количества учеников или клиентов максимум 5%</font>`} />
        <TextContent html={`<b><font color="#f76707">А ТЕПЕРЬ ВНИМАНИЕ:</font></b>`} />
        <TextContent html={`<b>ЕСТЬ 100% КЕЙСОВ</b>
‌Это те, кто пользуется контент заводом.
‌<font color="#fcc419">У всех без исключения есть впечатляющие результаты.</font>
‌Ключевое слово
‌<b><font color="#fcc419">У ВСЕХ</font></b>
‌
‌Все наши кейсы со ссылками и прямыми контактами людей.
‌ВОТ НЕСКОЛЬКО ИЗ НИХ:`} />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {casesImages.map((src, index) => (
                <img key={index} src={src} alt={`Case study ${index + 1}`} className="rounded-lg w-full h-full object-cover aspect-square" />
            ))}
        </div>
        <CtaButton href="https://t.me/kontehtzavod_bot">СМОТРЕТЬ ВСЕ КЕЙСЫ</CtaButton>
        
        <TextContent html={`<font color="#e03131">НЕ ВЕРИШЬ?</font>
ТЫ ИМЕЕШЬ НА ЭТО ПОЛНОЕ ПРАВО

ТВОЯ ЗАДАЧА:
‌
<font color="#fcc419">НЕ ВЕРИТЬ МНЕ</font>
А убедиться во всём на собственном опыте.
‌
‌Поэтому приглашаю тебя на
‌<font color="#e8590c">ТЕСТ ДРАЙВ КОНТЕНТ ЗАВОДА</font>
‌
‌1. Получишь доступ к контент заводу.
‌2. Создашь несколько коротких вирусных видео.
‌3. Получишь охваты, новых подписчиков и возможно продажи твоих товаров или услуг.
‌
‌ПОСЛЕ ЭТОГО ТВОЯ ЖИЗНЬ УЖЕ НЕ БУДЕТ ПРЕЖНЕЙ`} />
        <CtaButton href="https://t.me/kontehtzavod_bot">ТЕСТ ДРАЙВ КОНТЕНТ ЗАВОДА ЗДЕСЬ</CtaButton>
        
        <div className="py-8" />
        <TextContent html={`<b><font color="#fcc419">Каждую неделю мы публикуем новый кейс:</font></b>
‌<b>подробный и развёрнутый видеообзор, в котором показываем всю внутрянку, технологию и результаты.</b>
‌
<b>‌ВОТ ОДИН ИХ НИХ:</b>`} />
        <ResponsiveIframe src="https://rutube.ru/play/embed/ce6712e6d87889745dbbd94876edd147" />
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`‌<b>КОНТЕНТ ЗАВОД
‌Это революция в области контент маркетинга.</b><font color="#ffd43b">
‌За всю историю маркетинга ещё не было на столько эффективного инструмента.</font>
‌
‌Пока ты тратишь кучу времени денег и сил на создание одного видео - мы создаём десятки и сотни вирусных видео на полном автомате, на лайте.`} />
        <img src={marketingRevolution} alt="Marketing revolution" className="rounded-lg w-full" />
        
        <TextContent html={`<b>Сколько ты лотерейных билетов готов взять?</b>
‌
‌<b><font color="#f1f3f5">Изначально зная то, что каждый из них будет выигрышным...</font></b>`} />
        <TextContent html={`<b>ХВАТИТ ДУМАТЬ</b>
‌<font color="#f1f3f5">ПРИШЛО ВРЕМЯ ИЗМЕНИТЬ СИТУАЦИЮ</font>`} />
        <hr className="border-gray-800 my-6" />
        <CtaButton href="https://t.me/kontehtzavod_bot">ЖМИ ПРЯМ СЮДА</CtaButton>
        
        <hr className="border-gray-800 my-6" />
        <TextContent html={`<i><b>Никто до нас ещё не делал ничего подобного…</b></i>`} />
        
      </div>
    </div>
  );
};

export default App;
