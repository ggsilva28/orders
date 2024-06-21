<?php

namespace App\Repository;

use App\Entity\Orders;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Orders>
 */
class OrdersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Orders::class);
    }

    public function listAll()
    {
        return $this->createQueryBuilder('o')
            ->select('o.id', 'o.date', 'o.customer', 'o.address1', 'o.city', 'o.postcode', 'o.country', 'o.amount', 'o.amount', 'o.status', 'o.deleted', 'o.last_modified')
            ->orderBy('o.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function save(Orders $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
