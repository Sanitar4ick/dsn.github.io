let activeArticle = null;

// Объект с полными содержаниями для каждой статьи
const articlesContent = {
    // 'Приветствуем нового члена партии!': `Мы рады сообщить, что у нас появился новый член! Эта статья расскажет подробнее о новом участнике партии, его целях и планах на будущее. Полное содержание включает информацию о...`,
    'НСПЧ-Украина': 'https://telegra.ph/Manifest-NSPCH-U-08-01',
    'НСПЧ. Общая программа': 'https://telegra.ph/NSPCH-DSN-02-25',
    'Пользовательское соглашение': `
        <div>
            <strong>Отказ от ответственности</strong><br/><br/>
            <strong>1. Общие положения</strong><br/>
            Настоящий документ является отказом от ответственности (далее — "Отказ") и регулирует условия использования материалов, размещенных на сайте https://sanitar4ick.github.io/dsn.github.io (далее — "Сайт"). Используя Сайт, вы подтверждаете, что ознакомлены с условиями данного Отказа и соглашаетесь с ними. Если вы не согласны с данными условиями, пожалуйста, не используйте Сайт.<br/><br/>

            <strong>1.1 Согласие на использование файлов cookies</strong><br/>
            Каждый пользователь, что заходит на Сайт, автоматически соглашается с использованием файлов cookies и подтверждает, что ознакомился с правилами использования Сайта.<br/><br/>

            <strong>2. Ограничение доступа</strong><br/>
            Содержимое Сайта заблокировано для пользователей из стран Европейского Союза и Великобритании. Мы не можем гарантировать, что информация, размещенная на Сайте, соответствует законодательству или нормативным требованиям этих стран. Пользователи из указанных регионов должны воздержаться от доступа к Сайту.<br/><br/>

            <strong>3. Информация и материалы</strong><br/>
            Все материалы, размещенные на Сайте, предоставляются "как есть" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем, что информация на Сайте является полной, точной или актуальной. Пользователи Сайта используют информацию на свой собственный риск, и мы не несем ответственности за любые убытки или ущерб, возникшие в результате использования материалов Сайта.<br/><br/>

            <strong>4. Ограничение ответственности</strong><br/>
            Мы не будем нести ответственность за:<br/>
            <ul>
                <li>любой ущерб, включая, но не ограничиваясь, прямой, косвенный, случайный, специальный или штрафной ущерб, возникающий в результате использования или невозможности использования материалов Сайта;</li>
                <li>любые убытки, причиненные в результате доверия к информации, размещенной на Сайте;</li>
                <li>любые действия третьих лиц, связанные с использованием материалов, размещенных на Сайте.</li>
            </ul><br/>

            <strong>5. Ссылки на сторонние ресурсы</strong><br/>
            Сайт может содержать ссылки на внешние ресурсы (сайты третьих лиц). Мы не контролируем содержание, доступность и надежность этих ресурсов и не несем ответственности за любые убытки или ущерб, возникающие в результате их использования. Включение ссылки не подразумевает одобрения или поддержки со стороны нашего Сайта.<br/><br/>

            <strong>6. Изменения и обновления материалов</strong><br/>
            Мы оставляем за собой право в любое время изменять, обновлять или удалять информацию и материалы на Сайте без предварительного уведомления. Мы не обязуемся обновлять материалы на Сайте и не несем ответственности за любые упущения в их актуальности.<br/><br/>

            <strong>7. Профессиональные консультации</strong><br/>
            Материалы, размещенные на Сайте, не являются профессиональными советами и не заменяют консультацию специалистов в соответствующей области (медицинской, юридической, финансовой и т.д.). Мы настоятельно рекомендуем обращаться за консультацией к квалифицированным специалистам перед принятием каких-либо решений на основе информации, размещенной на Сайте.<br/><br/>

            <strong>8. Юрисдикция</strong><br/>
            Настоящий Отказ регулируется и интерпретируется в соответствии с законодательством Российской Федерации. Все споры, возникающие в связи с использованием материалов Сайта, подлежат рассмотрению в соответствующих судебных органах РФ.<br/><br/>

            <strong>9. Изменения в отказе от ответственности</strong><br/>
            Мы оставляем за собой право в любой момент изменять условия данного Отказа. Изменения вступают в силу с момента их размещения на Сайте. Рекомендуем регулярно проверять данный Отказ на предмет изменений.<br/><br/>

            <strong>10. Контактная информация</strong><br/>
            Если у вас есть вопросы или комментарии относительно данного Отказа, пожалуйста, свяжитесь с нами по адресу: <strong>t.me/patsient4ick</strong> .<br/><br/>

            <strong>11. О НСПЧ</strong><br/>
            НСПЧ является интернет-объединением, что не имеет конкретной страны и не является официальной политической партией. Все материалы и информация, размещенные на Сайте, предназначены исключительно для информирования и обсуждения.
        </div>
    `
};

// Функция открытия обычной статьи
function openArticle(article) {
    if (activeArticle) {
        activeArticle.classList.remove('active');
    }

    article.classList.add('active');
    activeArticle = article;

    // Получение элементов для работы с расширенной статьёй
    const expandedArticle = document.getElementById('expanded-article');
    const title = article.querySelector('h2').textContent;

    // Проверка, является ли статья ссылкой или текстом
    const fullContent = document.getElementById('full-content');
    if (typeof articlesContent[title] === 'string' && articlesContent[title].startsWith('http')) {
        // Открытие ссылки в новой вкладке
        window.open(articlesContent[title], '_blank');
        closeArticle(); // Закрываем расширенную статью
        return;
    }

    // Заполнение заголовка и краткого содержания
    document.getElementById('expanded-title').textContent = title;
    document.getElementById('expanded-text').textContent = article.querySelector('p').textContent;

    // Заполнение полного содержания статьи из объекта
    fullContent.innerHTML = articlesContent[title] || "Полное содержание недоступно.";
    fullContent.style.display = "block";

    expandedArticle.classList.add('active');
}

// Функция открытия закреплённой статьи
function openPinnedArticle(article) {
    if (activeArticle) {
        activeArticle.classList.remove('active');
    }

    article.classList.add('active');
    activeArticle = article;

    // Получение элементов для работы с закреплённой статьёй
    const expandedArticle = document.getElementById('expanded-article');
    const title = article.querySelector('h2').textContent;

    // Проверка, является ли статья ссылкой или текстом
    const fullContent = document.getElementById('full-content');
    if (typeof articlesContent[title] === 'string' && articlesContent[title].startsWith('http')) {
        // Открытие ссылки в новой вкладке
        window.open(articlesContent[title], '_blank');
        closeArticle(); // Закрываем расширенную статью
        return;
    }

    // Заполнение заголовка и краткого содержания
    document.getElementById('expanded-title').textContent = title;
    document.getElementById('expanded-text').textContent = article.querySelector('p').textContent;

    // Заполнение полного содержания закреплённой статьи из объекта
    fullContent.innerHTML = articlesContent[title] || "Полное содержание недоступно.";
    fullContent.style.display = "block";

    expandedArticle.classList.add('active');
}

// Функция закрытия статьи
function closeArticle() {
    const expandedArticle = document.getElementById('expanded-article');

    if (activeArticle) {
        activeArticle.classList.remove('active');
        activeArticle = null;
    }

    expandedArticle.classList.remove('active');
}
