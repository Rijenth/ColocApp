-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le : mar. 10 jan. 2023 à 13:52
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ColocApp`
--

-- --------------------------------------------------------

--
-- Structure de la table `Colocataire`
--

CREATE TABLE `Colocataire` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `colocationId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `Colocation`
--

CREATE TABLE `Colocation` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `rentDue` int NOT NULL,
  `rentPaid` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `Expense`
--

CREATE TABLE `Expense` (
  `id` int NOT NULL,
  `amount` int NOT NULL,
  `colocataireId` int NOT NULL,
  `paidFor` enum('loyer','electricite','eau','nourriture','autres') CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text NOT NULL,
  `colocation.id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `birthdate` varchar(255) NOT NULL,
  `picture` text NULL,
  `income` int  NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Colocataire`
--
ALTER TABLE `Colocataire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_user` (`userId`),
  ADD KEY `fk_colocation` (`colocationId`);

--
-- Index pour la table `Colocation`
--
ALTER TABLE `Colocation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Expense`
--
ALTER TABLE `Expense`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_expense_user` (`colocataireId`);

--
-- Index pour la table `User`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Colocataire`
--
ALTER TABLE `Colocataire`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Colocation`
--
ALTER TABLE `Colocation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Expense`
--
ALTER TABLE `Expense`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Colocataire`
--
ALTER TABLE `Colocataire`
  ADD CONSTRAINT `fk_colocation` FOREIGN KEY (`colocationId`) REFERENCES `Colocation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Expense`
--
ALTER TABLE `Expense`
  ADD CONSTRAINT `fk_expense_user` FOREIGN KEY (`colocataireId`) REFERENCES `Colocataire` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `fk_expense_coloc` FOREIGN KEY (`colocation.id`) REFERENCES `Colocation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;