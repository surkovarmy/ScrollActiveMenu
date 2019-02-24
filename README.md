# ScrollActiveMenu
Активность пунктов меню зависит от скрола пользователя на странице
## Установка
```bash
<script type="text/javascript" src="ScrollActiveMenu.js"></script>
```
## Использование
```bash
new MenuList({
     'selector': '.ul_top',
     'class_active': 'active',
     'speedanimation' : 700,
     'offset' : 120
});
```
## Options

| *Название* | *Тип*  | *По умолчанию* | *Описание* |
|:-----------|:-------|:---------------|:---------------------------------------------------------------------------|
| **selector**     | string			 | ul_top         | Имя css класса для кнопки вставляемой перед input - кнопка минус  |
| **class_active**     | string 		 | active          | Имя css класса для активного пункта меню   |
| **speedanimation**       | int   			 | 700           | Скорость анимации, при клике на якорную ссылку |
| **offset**       | int   		   | 120           | задает отступ от координат для элементов (относительно документа). 900 - 120(offset)  |

## Пример
```bash
<ul class="ul_top">
     <li><a href="#index">Главная</a></li>
     <li><a href="#service">Услуги</a></li>
     <li><a href="#contacts">Контакты</a></li>
     <li><a href="#about">О нас</a></li>
</ul>
```
```bash
<div id="index">
    ....
</div>
<div id="service">
    ...
</div>
<div id="contacts">
    ...
</div>
<div id="about">
    ...
</div>
```
```bash
$(function() {
    new MenuList({
        'selector': '.ul_top',
        'class_active': 'active',
        'speedanimation' : 700,
        'offset' : 120
    });
});
```

