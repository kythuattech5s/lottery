<?php
namespace vanhenry\mail;
use Illuminate\Support\ServiceProvider;
use Illuminate\Mail\MailServiceProvider;
class CustomMailServiceProvider extends MailServiceProvider {
	
    protected function registerSwiftTransport()
    {
        $this->app['swift.transport'] = $this->app->share(function ($app) {
            return new CustomTransportManager($app);
        });
    }
}
