<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240621001309 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE orders CHANGE date date VARCHAR(255) NOT NULL, CHANGE customer customer VARCHAR(255) NOT NULL, CHANGE address1 address1 VARCHAR(255) NOT NULL, CHANGE city city VARCHAR(100) NOT NULL, CHANGE postcode postcode VARCHAR(6) NOT NULL, CHANGE country country VARCHAR(100) NOT NULL, CHANGE amount amount INT NOT NULL, CHANGE status status VARCHAR(20) NOT NULL, CHANGE deleted deleted VARCHAR(3) NOT NULL, CHANGE last_modified last_modified VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE orders CHANGE date date DATETIME DEFAULT \'NULL\', CHANGE customer customer TEXT DEFAULT NULL, CHANGE address1 address1 TEXT DEFAULT NULL, CHANGE city city VARCHAR(100) DEFAULT \'NULL\', CHANGE postcode postcode VARCHAR(6) DEFAULT \'NULL\', CHANGE country country VARCHAR(100) DEFAULT \'NULL\', CHANGE amount amount INT DEFAULT NULL, CHANGE status status VARCHAR(20) DEFAULT \'NULL\', CHANGE deleted deleted VARCHAR(3) DEFAULT \'NULL\', CHANGE last_modified last_modified DATETIME DEFAULT \'NULL\'');
    }
}
