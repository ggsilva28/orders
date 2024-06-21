<?php

namespace App\Entity;

use App\Repository\OrdersRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrdersRepository::class)]
class Orders
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?string $date = null;
    
    #[ORM\Column]
    private ?string $customer = null;
    
    #[ORM\Column]
    private ?string $address1 = null;

    #[ORM\Column(length: 100)]
    private ?string $city = null;
    
    #[ORM\Column(length: 40)]
    private ?string $postcode = null;

    #[ORM\Column(length: 100)]
    private ?string $country = null;

    #[ORM\Column]
    private int $amount = 0;

    #[ORM\Column(length: 20)]
    private string $status = 'pending';

    #[ORM\Column(length: 3)]
    private string $deleted = 'no';

    #[ORM\Column]
    private ?string $last_modified = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

}
