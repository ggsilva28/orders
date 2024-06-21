<?php
namespace App\Controller;

use App\Repository\OrdersRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class OrdersController extends AbstractController
{
    #[Route('/orders', methods: ['GET', 'HEAD'])]
    public function list(OrdersRepository $ordersRepository){
        $orders = $ordersRepository->listAll();

        return $this->sendResponse(json_encode($orders));
    }

    #[Route('/orders/cancel/{id}', methods: ['PUT', 'HEAD'])]
    public function cancel(OrdersRepository $ordersRepository, int $id){
        $order = $ordersRepository->find($id);
        $order->setStatus('cancelled');
        
        $ordersRepository->save($order, true);

        return $this->sendResponse('{"message": "Order '. $id . ' cancelled"}');
    }

    private function sendResponse($content, $status = 200, $contentType = 'application/json'){
        $response = new Response();
        
        $response->setContent($content);
        $response->headers->set('Content-Type', $contentType);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->setStatusCode($status);

        return $response;
    }
}