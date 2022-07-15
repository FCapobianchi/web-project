<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette;
use Tracy\Debugger;

class BackendPresenter extends Nette\Application\UI\Presenter {

    public $authorizator;
    private $cookies;

    public function __construct( ) { 
        Debugger::enable();
    }
    
    protected function startup(): void {
        parent::startup();
        if(!$this->getUser()->isLoggedIn()){
            $this->redirect('Homepage:default',['backlink' => $this->storeRequest()]);
        }

        $this->getUser()->setAuthorizator($this->authorizator);
        if(!$this->getUser()->isAllowed($this->name,$this->action))
            $this->error("forbidden",403);

        $this->template->appname = APPNAME;
        $this->template->section = strtolower($this->name);
        $this->template->page = ($this->action!="default")?$this->action:"";
        $this->cookies = $cookies = $this->getHttpRequest()->getCookies();

        bdump($this->template->section);
        bdump($this->template->page);
    }

    protected function beforeRender(): void {
        $this->setLayout(__DIR__.'/templates/@backend.latte');
    }

}
