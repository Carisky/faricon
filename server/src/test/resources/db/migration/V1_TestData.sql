-- Водители
insert into driver (name, experience, status, earnings) values
('Иван Иванов', 5, true, 1500.00),
('Петр Петров', 3, true, 1200.00),
('Алексей Сидоров', 8, true, 1800.00);

-- Автомобили
insert into car (brand, carrying_capacity, condition) values
('Toyota Camry', 500, true),
('BMW X5', 700, true),
('Mercedes Sprinter', 1500, true);

-- Типы грузов
insert into cargotype (name) values
('Еда'),
('Одежда'),
('Электроника');

-- Пункты назначения
insert into destination (name) values
('Киев'),
('Харьков'),
('Донецк');

-- Запросы на перевозку
insert into request (destination_id, cargo_quantity, cargo_type_id) values
(1, 100, 1),
(2, 50, 2),
(3, 200, 3);

-- Поездки
insert into trip (driver_id, car_id, request_id, status, intermediate_cost) values
(1, 1, 1, true, 300.00),
(2, 2, 2, true, 250.00),
(3, 3, 3, true, 500.00);
