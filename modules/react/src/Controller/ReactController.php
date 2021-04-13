<?php

namespace Drupal\react\Controller;

class ReactController {
     public function react() {
         return array (
             '#title' => 'E-commerce site',
             '#markup' => '<div id="react-ecommerce-app"></div>',
             '#attached' => [
                'library' => 'react/react-list'
              ],
             '#cache' => [
               'max-age' => 0,
             ]
         );
     }
}