document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('order6').addEventListener('submit', function(e) {
        e.preventDefault(); // Запобігаємо стандартній відправці форми

        // Отримуємо значення полів форми
        var name = document.querySelector('input[name="name"]').value;
        var phone = document.querySelector('input[name="phone"]').value;
        var color = document.querySelector('input[name="color"]').value;
        var quantity = document.querySelector('input[name="quantity"]').value;

        // Формуємо повідомлення
        var message = `Нове замовлення(3д панелі):\nІм'я та прізвище: ${name} \nТелефон: ${phone} \nКолір: ${color} \nКількість: ${quantity};`;

        // Ваш токен та ID чату
        var token = '7951221021:AAEi22zh4i1up7zB1eLP2TsVpnm_FaQS5Wo';
        var chatId = 1404908930; // Замініть YOUR_CHAT_ID на ваш реальний ID чату

        // Відправляємо повідомлення через Telegram API
        fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Після успішної відправки, одразу перенаправляємо на сторінку "Дякую"
            window.location.href = "./3d_files/thank_you_page.html"; 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Помилка при відправленні замовлення.');
        });
    });
});
