CREATE DATABASE IF NOT EXISTS `sw_exercices` CHARACTER SET = 'utf8mb4' COLLATE = 'utf8mb4_unicode_ci';

USE `sw_exercices`;

DROP TABLE IF EXISTS `salutations`;
CREATE TABLE `salutations` (
  `id` int auto_increment,
  `code_langue` varchar(10) DEFAULT NULL,
  `langue` varchar(50) DEFAULT NULL,
  `message` varchar(100) DEFAULT NULL,
  primary key (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `salutations` (code_langue, langue, message) VALUES
('fr','Français','Bonjour le monde'),
('fr','Français','Bon matin'),
('fr','Français','Salut'),
('fr','Français','Bonne nuit je vais travailler'),
('en','Anglais','Hello world'),
('en','Anglais','Good morning'),
('en','Anglais','Hi'),
('en','Anglais','Good night, i''m going to work'),
('es','Espagnol','Hola Mundo'),
('es','Espagnol','Buenos dias'),
('es','Espagnol','Hola'),
('es','Espagnol','Buenas noches me voy a trabajar'),
('de','Allemand','Hallo Welt'),
('de','Allemand','Guten Morgen'),
('de','Allemand','Hallo'),
('de','Allemand','Gute Nacht, ich gehe zur Arbei');
