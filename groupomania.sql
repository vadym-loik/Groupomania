-- groupomania.`user` definition

CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `user_UN` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.post definition

CREATE TABLE `post` (
  `postId` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `like` int(11) DEFAULT 0,
  `comment` int(11) DEFAULT 0,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`postId`),
  KEY `post_FK` (`userId`),
  CONSTRAINT `post_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.comment definition

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`commentId`),
  KEY `comment_FK` (`postId`),
  KEY `comment_FK_1` (`userId`),
  CONSTRAINT `comment_FK` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`) ON DELETE CASCADE,
  CONSTRAINT `comment_FK_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- groupomania.`like` definition

CREATE TABLE `like` (
  `likeId` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`likeId`),
  KEY `like_FK` (`userId`),
  KEY `like_FK_1` (`postId`),
  CONSTRAINT `like_FK` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE,
  CONSTRAINT `like_FK_1` FOREIGN KEY (`postId`) REFERENCES `post` (`postId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;