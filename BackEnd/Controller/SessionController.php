<?php

namespace Flopy;
use Flopy\DataBase;

class SessionController
{
    private $tableName = 'users';

    public function __construct()
    {
        session_start();
    }

    public function loginUser(string $username, string $password): bool
    {
        $user = $this->getUserByUsername($username);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            return true;
        }

        return false;
    }

    public function logoutUser(): void
    {
        unset($_SESSION['user_id']);
        session_destroy();
    }

    public function isUserLoggedIn(): bool
    {
        return isset($_SESSION['user_id']);
    }

    public function getCurrentUser(): ?array
    {
        if ($this->isUserLoggedIn()) {
            return $this->getUserById($_SESSION['user_id']);
        }

        return null;
    }

    private function getUserByUsername($username): ?array
    {
        $result = DataBase::fetch("SELECT * FROM {$this->tableName} WHERE username = :username", ['username' => $username]);
        return $result ? $result[0] : null;
    }

    private function getUserById($id): array
    {
        $result = DataBase::fetch("SELECT * FROM {$this->tableName} WHERE id = :id", ['id' => $id]);
        return $result ? $result[0] : null;
    }
}
