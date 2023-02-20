-- groupomania.`user` definition

CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `postId` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `user_UN` (`email`),
  KEY `user_FK` (`postId`),
  CONSTRAINT `user_FK` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.post definition

CREATE TABLE `post` (
  `postId` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(300) DEFAULT NULL,
  `imageUrl` varchar(300) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `like` int(11) DEFAULT 0,
  `comment` int(11) NOT NULL DEFAULT 0,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`postId`),
  KEY `post_FK` (`userId`),
  CONSTRAINT `post_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.`like` definition

CREATE TABLE `like` (
  `likeId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`likeId`),
  KEY `like_FK` (`userId`),
  KEY `like_FK_1` (`postId`),
  CONSTRAINT `like_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  CONSTRAINT `like_FK_1` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.comment definition

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(500) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`commentId`),
  KEY `comment_FK` (`userId`),
  KEY `comment_FK_1` (`postId`),
  CONSTRAINT `comment_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  CONSTRAINT `comment_FK_1` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;