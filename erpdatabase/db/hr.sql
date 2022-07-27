-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 03:16 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` varchar(255) NOT NULL,
  `img` longblob DEFAULT NULL,
  `accepted` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `TIN_number` int(11) DEFAULT NULL,
  `org_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `ad_email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `img`, `accepted`, `role`, `TIN_number`, `org_id`, `username`, `ad_email`, `password`) VALUES
('1', NULL, 0, 1, NULL, NULL, NULL, 'abenezer.hailu00@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `date` date NOT NULL,
  `emp_id` varchar(255) NOT NULL,
  `present` tinyint(1) NOT NULL,
  `time_start` timestamp NULL DEFAULT NULL,
  `time_end` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`date`, `emp_id`, `present`, `time_start`, `time_end`) VALUES
('2022-01-10', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-01-10', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-01-10', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-01-10', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-01-10', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-01-10', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-05-04', 'amarech@gmail.com', 1, '2022-06-06 00:41:25', '2022-06-09 06:25:17'),
('2022-06-01', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'ben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'qwwe@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-01', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'ben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'qwwe@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-03', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-09', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-09', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-09', 'ben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-09', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-09', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-21', 'abeneaben@gmail.com', 0, '2022-06-23 07:42:47', '2022-06-24 10:42:47'),
('2022-06-23', 'abeneaben@gmail.com', 0, '2022-06-23 13:42:47', '2022-06-24 16:42:47'),
('2022-06-24', 'abeneaben@gmail.com', 1, '2022-02-01 22:08:53', '2022-02-01 22:10:53'),
('2022-06-24', 'amarech@gmail.com', 1, '2022-06-24 09:56:49', '2022-06-24 09:56:49'),
('2022-06-25', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-25', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-25', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-25', 'ret@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-25', 'zulu@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-25', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-26', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-26', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-29', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-29', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-29', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-29', 'zuma@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-06-30', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-03', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-03', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-03', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-08', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-10', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-10', 'amarech@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-10', 'ret@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-10', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-10', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'amarech@gmail.com', 1, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-07-31', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'abeneaben@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'abenezer.hailu00@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'amarech@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'ret@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'zulu@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47'),
('2022-08-24', 'zuma@gmail.com', 0, '2022-06-23 04:42:47', '2022-06-23 04:42:47');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`, `branch`) VALUES
(1, 'other', 'other'),
(3, 'software', 'AASTU'),
(4, 'werty', 'wer'),
(5, 'qw', 'qw');

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE `employe` (
  `img` longblob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `pincode` decimal(6,0) DEFAULT NULL,
  `ep_email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `dept_id` int(11) DEFAULT NULL,
  `grade_id` int(11) DEFAULT NULL,
  `doj` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`img`, `name`, `phonenumber`, `dob`, `address`, `city`, `state`, `pincode`, `ep_email`, `password`, `dept_id`, `grade_id`, `doj`) VALUES
(NULL, 'abenezer hailu balcha', '0954850875', '2000-07-01', 'Kolfe Keraniyo', 'Addis Ababa', 'Addis Ababa', '1234', 'abeneaben@gmail.com', '123456789', 1, 1, '2015-06-01'),
(NULL, 'Abenezer Hailu', '0923456787', '2000-07-01', 'kolfe keraniyo', 'addis ababa', 'addis ababa', '123', 'abenezer.hailu00@gmail.com', '1234567890', 1, 1, '2022-06-05'),
(NULL, 'Amarech Tafere', '0911223344', '2000-01-01', 'Akaki kality', 'addis ababa', 'addis ababa', '987', 'amarech@gmail.com', '111222333', 2, 2, '2022-06-17'),
(NULL, 'qqwe', '234', '2022-06-11', 'qwer', 'qwer', 'er', '123', 'ben@gmail.com', '111111111', 3, 2, '2022-06-10'),
(NULL, 'wert', '4567', '2022-06-11', 'qwe', 'wert', 'sdf', '3456', 'qwwe@gmail.com', '111111111', 3, 2, '2022-06-14'),
(NULL, 'sdf', '12345', '2022-06-11', 'sdf', 'sdf', 'sdf', '1', 'ret@gmail.com', '12', 5, 2, '2022-06-23'),
(NULL, 'zero', '234', '2022-06-05', 'sdf', 'dsf', 'sdf', '124', 'zulu@gmail.com', '000', 4, 2, '2022-06-22'),
(NULL, 'tytyj', '8976578', '2021-11-30', 'dfgtyu', 'jhgc', 'uytd', '3456', 'zuma@gmail.com', '2222', 3, 2, '2020-07-21');

-- --------------------------------------------------------

--
-- Table structure for table `gradepay`
--

CREATE TABLE `gradepay` (
  `grade_id` int(11) NOT NULL,
  `grade_name` varchar(255) DEFAULT NULL,
  `basic_pay` int(11) DEFAULT NULL,
  `grade_pf` int(11) DEFAULT NULL,
  `grade_bonus` int(11) DEFAULT NULL,
  `grade_ta` int(11) DEFAULT NULL,
  `grade_da` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gradepay`
--

INSERT INTO `gradepay` (`grade_id`, `grade_name`, `basic_pay`, `grade_pf`, `grade_bonus`, `grade_ta`, `grade_da`) VALUES
(1, 'other', 0, 0, 0, 0, 0),
(2, 'sales', 2000, 1, 100, 0, 0),
(3, 'Manager', 5000, 4, 400, 800, 0);

-- --------------------------------------------------------

--
-- Table structure for table `organisation`
--

CREATE TABLE `organisation` (
  `org_id` varchar(255) NOT NULL,
  `img` longblob DEFAULT NULL,
  `org_name` varchar(255) DEFAULT NULL,
  `id` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organisation`
--

INSERT INTO `organisation` (`org_id`, `img`, `org_name`, `id`, `location`, `contact_number`) VALUES
('org-1-aastu', NULL, 'Addis Ababa Science and Technology University', '1', 'Akaki Kality', '0115678945');

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `transaction_id` int(11) NOT NULL,
  `month` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `gross_pay` int(11) DEFAULT NULL,
  `income_tax` int(11) DEFAULT NULL,
  `ep_email` varchar(255) DEFAULT NULL,
  `id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ad_email` (`ad_email`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`date`,`emp_id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`ep_email`),
  ADD UNIQUE KEY `ep_email` (`ep_email`),
  ADD KEY `dept_id` (`dept_id`),
  ADD KEY `grade_id` (`grade_id`);

--
-- Indexes for table `gradepay`
--
ALTER TABLE `gradepay`
  ADD PRIMARY KEY (`grade_id`);

--
-- Indexes for table `organisation`
--
ALTER TABLE `organisation`
  ADD PRIMARY KEY (`org_id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `ep_email` (`ep_email`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gradepay`
--
ALTER TABLE `gradepay`
  MODIFY `grade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payroll`
--
ALTER TABLE `payroll`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`ad_email`) REFERENCES `employe` (`ep_email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employe` (`ep_email`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `payroll`
--
ALTER TABLE `payroll`
  ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`ep_email`) REFERENCES `employe` (`ep_email`) ON DELETE SET NULL,
  ADD CONSTRAINT `payroll_ibfk_2` FOREIGN KEY (`id`) REFERENCES `admin` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
