-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2019 at 05:24 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inkabkn`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT 'unique',
  `username` varchar(255) DEFAULT NULL COMMENT 'username',
  `fullname` varchar(120) DEFAULT NULL COMMENT 'Names',
  `password` varchar(255) DEFAULT NULL COMMENT 'password'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `fullname`, `password`) VALUES
(1, 'ridwanzal', NULL, 'E19D5CD5AF0378DA05F63F891C7467AF'),
(2, 'reyhanzal', NULL, '123'),
(3, 'renia', NULL, 'abcd1234'),
(4, 'renia', NULL, 'abcd1234'),
(5, 'reinta', NULL, 'e19d5cd5af0378da05f63f891c7467af'),
(7, 'mila', NULL, 'e19d5cd5af0378da05f63f891c7467af'),
(8, 'adsad', NULL, 'f1bc5bba31a7534f613c88ca8aab3f78'),
(9, 'sdsds', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(10, 'sdsd', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(11, 'sdsdsdsd', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(12, 'asdad', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(13, 'asdsad', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(14, 'dasdasdad', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(15, 'ronals', NULL, 'd41d8cd98f00b204e9800998ecf8427e'),
(16, 'rina', NULL, 'e19d5cd5af0378da05f63f891c7467af'),
(17, 'ridwanz', 'M. Ridwan Zalbina', '202cb962ac59075b964b07152d234b70'),
(20, 'tes', NULL, '202cb962ac59075b964b07152d234b70'),
(21, 'ridwanzal', NULL, '827ccb0eea8a706c4c34a16891f84e7b'),
(22, 'asdad', NULL, 'e71c27c3ee34c7e07c04d95cd97d571d'),
(23, 'mila', 'Mila Astuti', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'unique', AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
