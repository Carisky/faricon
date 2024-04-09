-- Добавляем тестовые данные для таблицы driver
INSERT INTO driver (name, experience, status, earnings)
VALUES
    ('Иван Иванов', 5, true, 1500.00),
    ('Петр Петров', 3, true, 1200.50),
    ('Алексей Сидоров', 7, true, 1800.75),
    ('Елена Козлова', 4, false, 1400.25),
    ('Ольга Николаева', 6, true, 1600.80);

-- Добавляем тестовые данные для таблицы car
INSERT INTO car (brand, carrying_capacity, condition)
VALUES
    ('Toyota', 1000, true),
    ('Ford', 1200, true),
    ('Honda', 900, false),
    ('Chevrolet', 1100, true),
    ('Nissan', 950, true);

-- Добавляем тестовые данные для таблицы cargotype
INSERT INTO cargotype (name)
VALUES
    ('Еда'),
    ('Техника'),
    ('Мебель'),
    ('Одежда'),
    ('Стройматериалы');

-- Добавляем тестовые данные для таблицы request
INSERT INTO request (destination, cargo_quantity, cargo_type_id)
VALUES
    ('Москва', 10, 1),
    ('Санкт-Петербург', 7, 2),
    ('Казань', 5, 3),
    ('Екатеринбург', 8, 4),
    ('Новосибирск', 6, 5);

-- Добавляем тестовые данные для таблицы trip
INSERT INTO trip (driver_id, car_id, request_id, status, intermediate_cost)
VALUES
    (1, 1, 1, true, 500.00),
    (2, 2, 2, true, 400.50),
    (3, 3, 3, true, 600.75),
    (4, 4, 4, false, 450.25),
    (5, 5, 5, true, 550.80);
