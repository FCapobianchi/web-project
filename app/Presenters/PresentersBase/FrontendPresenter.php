<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;
use Tracy\Debugger;

class FrontendPresenter extends Nette\Application\UI\Presenter {

    public function __construct( ) {
        Debugger::enable();
    }
    
    protected function startup(): void {
        parent::startup();
        $this->template->appname = APPNAME;
    }

    protected function beforeRender(): void {
        bdump(__DIR__.'/templates/@frontend.latte');
        $this->setLayout(__DIR__.'/templates/@frontend.latte');
    }

}
