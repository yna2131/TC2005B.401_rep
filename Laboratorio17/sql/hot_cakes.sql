-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-03-2023 a las 19:13:55
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hot_cakes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotcakes`
--

CREATE TABLE `hotcakes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `descripcion` varchar(512) DEFAULT NULL,
  `handle` varchar(32) DEFAULT NULL,
  `precio` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `hotcakes`
--

INSERT INTO `hotcakes` (`id`, `nombre`, `imagen`, `descripcion`, `handle`, `precio`, `created_at`) VALUES
(1, 'Belgas', 'https://t1.uc.ltmcdn.com/es/posts/8/9/7/como_hacer_waffles_con_harina_de_hot_cakes_50798_paso_5_600.jpg', 'Hot cakes ricos', '@belgas', 150, '2023-03-09 18:12:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `created_at`) VALUES
(1, 'mantequilla', '2023-03-09 18:10:40'),
(2, 'harina', '2023-03-09 18:10:40'),
(3, 'huevos', '2023-03-09 18:11:05'),
(4, 'leche', '2023-03-09 18:11:05'),
(5, 'cocoa', '2023-03-09 18:11:20'),
(6, 'proteína', '2023-03-09 18:11:20'),
(7, 'mantequilla de Normandía', '2023-03-09 18:12:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `necesita`
--

CREATE TABLE `necesita` (
  `idhotcakes` int(11) NOT NULL,
  `idingredientes` int(11) NOT NULL,
  `cantidad` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `necesita`
--

INSERT INTO `necesita` (`idhotcakes`, `idingredientes`, `cantidad`) VALUES
(1, 2, NULL),
(1, 3, NULL),
(1, 4, NULL),
(1, 7, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hotcakes`
--
ALTER TABLE `hotcakes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `necesita`
--
ALTER TABLE `necesita`
  ADD PRIMARY KEY (`idingredientes`,`idhotcakes`),
  ADD KEY `idhotcakes` (`idhotcakes`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hotcakes`
--
ALTER TABLE `hotcakes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `necesita`
--
ALTER TABLE `necesita`
  ADD CONSTRAINT `necesita_ibfk_1` FOREIGN KEY (`idhotcakes`) REFERENCES `hotcakes` (`id`),
  ADD CONSTRAINT `necesita_ibfk_2` FOREIGN KEY (`idingredientes`) REFERENCES `ingredientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
