<?php

namespace Flopy;

use PDO;
use Exception;
use PDOException;

class DataBase
{
    private static PDO $connection;

    public static function init(string $db_server, string  $db_name, string  $db_user, string  $db_password)
    {
        $this->connection = new PDO('mysql:host=' . $db_server . ';dbname=' . $db_name, $db_user, $db_password);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public static function fetch(string $query, array $params = []): array
    {
        try {
            $stmt = $this->connection->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new PDOException("DB Error: " . $e->getMessage());
        }
    }

    public static function tableExists(string $name): bool
    {
        $result = $this->fetch("SHOW TABLES LIKE :name", ['name' => $name]);
        return !empty($result);
    }

    public static function columnExistsInTable(string $table, string $columnName): bool
    {
        $result = $this->fetch("SELECT COLUMN_NAME FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :dbname AND TABLE_NAME = :table AND COLUMN_NAME = :column", [
            'dbname' => DB_NAME,
            'table' => $table,
            'column' => $columnName
        ]);
        return !empty($result);
    }

    public static function insert(string $table, array $data): void
    {
        $columns = array_keys($data);
        $values = ':' . implode(', :', $columns);
        $sql = "INSERT INTO `$table` (" . implode(', ', $columns) . ") VALUES ($values)";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($data);
    }

    public static function update(string $table, array $data, string $where): void
    {
        $set = '';
        foreach ($data as $key => $value) {
            $set .= "`$key` = :$key, ";
        }
        $set = rtrim($set, ", ");
        $sql = "UPDATE `$table` SET $set WHERE $where";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute($data);
    }

    public static function delete(string $table, string $where): void
    {
        $sql = "DELETE FROM `$table` WHERE $where";
        $this->connection->exec($sql);
    }

    public static function createTable(string $name, array $columns): void
    {
        if (empty($name) || !is_array($columns)) {
            throw new Exception('Invalid table name or columns provided.');
        }

        $columnsList = [];
        foreach ($columns as $columnName => $type) {
            if (!is_string($columnName) || !is_string($type)) {
                throw new Exception('Invalid column name or type provided.');
            }

            $columnsList[] = "`$columnName` $type";
        }

        $sql = "CREATE TABLE `$name` (" . implode(", ", $columnsList) . ")";
        $this->connection->exec($sql);
    }

    public static function addColumn(string $table, string $columnName, string $type): void
    {
        $sql = "ALTER TABLE `$table` ADD `$columnName` $type";
        $this->connection->exec($sql);
    }

    public static function addPrimaryColumn(string $table, string $columnName): void
    {
        $sql = "ALTER TABLE `$table` ADD PRIMARY KEY (`$columnName`)";
        $this->connection->exec($sql);
    }
}
