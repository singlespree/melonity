<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>О компании</h5>
            <p>Мы - компания Melonity, стремимся предоставить вам лучшие товары на рынке.</p>
          </div>
          <div class="col-md-4">
            <h5>Контакты</h5>
            <ul class="list-unstyled">
              <li>Телефон: +7 800 555-35-35</li>
              <li>Email: info@melonity.com</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>FAQ</h5>
            <ul class="list-unstyled">
              <li><a href="#">Вопрос 1</a></li>
              <li><a href="#">Вопрос 2</a></li>
              <li><a href="#">Вопрос 3</a></li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col text-center">
            <p class="text-muted">© 2023 Melonity. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'MelonityFooter',
  };
  </script>
  
  <style>
    .footer {
    background-color: #333333;
    color: #ffffff;
    padding: 40px 0;
    }

    .footer h5 {
    margin-bottom: 20px;
    }

    .footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .footer li {
    margin-bottom: 10px;
    }

    .footer a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
    }

    .footer a:hover {
    color: #007bff;
    }

    .footer .social-links {
    display: flex;
    gap: 10px;
    }

    .footer .copyright {
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  </style>
  