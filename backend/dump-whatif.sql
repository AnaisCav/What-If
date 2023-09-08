-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: whatif
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `content` varchar(700) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (8,'Jordan','Depuis notre traversée dans l\'espace, j\'ai contracté la maladie Inversencéphalite. J\'ai désormais la tête à l\'envers ce qui fait que toute ma vision est inversé. Le haut est en bas et le bas est en haut, ce qui est très handicapant. Mais grâce à l\'accessibilité du site What If, je n\'ai plus à me tordre dans tous les sens pour pouvoir lire un site internet. C\'est super !! Merci What If 🙃','2023-09-08 11:54:47'),(9,'Kelly','J\'ai cru que je ne pourrais plus jamais vivre normalement depuis qu\'on m\'a diagnostiqué Oculovortex. Mon monde tourne sans cesse, il m\'est impossible de lire un livre, de regarder la télévision car tout est figé. Mais depuis que What If a mis en place l\'accessibilité pour les personnes atteintent d\'Oculovortex, je suis libérée ! Enfin un site accessible pour tous, merci What If !! 💫😵','2023-09-08 11:57:38'),(10,'Kévin','La maladie dont je suis atteind, le UltraZoomoculaire, me fait percevoir tout en très grand. Il m\'est très difficile de vivre une vie normale avec cette condition. Heureusement, le site What If a changé la donne ! Depuis, je peux lire du contenu sans avoir de soucis, grâce à l\'accessibilité de leur site. Je ne sais pas où je serai sans What If ! Merci beaucoup 🔍','2023-09-08 12:00:38'),(11,'Cynthia','Sur terre, j\'étais une fashion victim. Toujours à la pointe de la mode, toujours bien habillé. Je savais allier toutes les couleurs, mon sens du goût était parfait. Mais depuis la traversée, j\'ai été touchée par la Dyschromia Esthetica. Je suis tombée dans une grande depression car plus rien n\'avait de sens pour moi. Heureusement, What If m\'a permis de reprendre confiance en moi et je peux désormais apprécier les choses de la vie de nouveau ! 🤩🤡  ','2023-09-08 12:05:35');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'whatif'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-08 12:07:33
