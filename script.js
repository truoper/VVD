document.addEventListener('DOMContentLoaded', function() {
  // Функция для отправки данных формы на сервер
  function submitForm(event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию

      // Получаем значения полей формы
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var age = document.getElementById('age').value;
      var response = document.getElementById('response').value;

      // Создаем объект с данными формы
      var formData = {
          name: name,
          email: email,
          age: age,
          response: response
      };

      // Отправляем данные формы на сервер с помощью AJAX-запроса
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'save_response.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              // Ответ от сервера
              console.log(xhr.responseText);
              alert('Спасибо за участие в опросе!');
              // Очистка полей формы
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('age').value = '';
              document.getElementById('response').value = '';
          }
      };

      // Преобразуем объект с данными в JSON-строку
      var jsonData = JSON.stringify(formData);

      // Отправляем запрос на сервер
      xhr.send(jsonData);
  }

  // Обработчик события отправки формы
  var form = document.getElementById('surveyForm');
  form.addEventListener('submit', submitForm);
});
