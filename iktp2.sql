-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 07. 22:27
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `iktp2`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `companies`
--

CREATE TABLE `companies` (
  `Id` int(11) NOT NULL,
  `Name` longtext DEFAULT NULL,
  `CEO` longtext DEFAULT NULL,
  `Email` longtext DEFAULT NULL,
  `PhoneNumber` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `companies`
--

INSERT INTO `companies` (`Id`, `Name`, `CEO`, `Email`, `PhoneNumber`) VALUES
(1, 'Oba', 'Schimmel, Gutmann and Frami', 'pbut0@blinklist.com', '123-242-1951'),
(5, 'Buzzshare', 'Marks-Swift', 'mcops4@woothemes.com', '888-953-1276'),
(6, 'Latz', 'Mueller-Daniel', 'fwrotchford5@360.cn', '980-964-9729'),
(8, 'Tagfeed', 'Batz, Denesik and Jacobi', 'sdafforne7@dropbox.com', '548-386-9588'),
(9, 'Livepath', 'Haag, Marquardt and Strosin', 'mslark8@blinklist.com', '465-130-4436'),
(10, 'Divavu', 'Labadie Inc', 'kaskie9@microsoft.com', '416-893-3461');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jobs`
--

CREATE TABLE `jobs` (
  `Id` int(11) NOT NULL,
  `JobName` longtext DEFAULT NULL,
  `salary` double NOT NULL,
  `skill` longtext DEFAULT NULL,
  `companyId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jobs`
--

INSERT INTO `jobs` (`Id`, `JobName`, `salary`, `skill`, `companyId`) VALUES
(1, 'Chief Design Engineer', 19, 'VB5', 6),
(2, 'Software Test Engineer I', 43, 'Windows 7', 10),
(3, 'Compensation Analyst', 42, 'XMLBeans', 1),
(4, 'Nurse Practicioner', 22, 'WUFI', 10),
(5, 'Health Coach I', 34, 'Hotels', 8),
(6, 'Physical Therapy Assistant', 32, 'Ultra Low Latency', 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20231204170907_Initialize', '7.0.14'),
('20231206084744_CompanyTableChange', '7.0.14');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Jobs_companyId` (`companyId`);

--
-- A tábla indexei `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `companies`
--
ALTER TABLE `companies`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT a táblához `jobs`
--
ALTER TABLE `jobs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `FK_Jobs_Companies_companyId` FOREIGN KEY (`companyId`) REFERENCES `companies` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
