gmailApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
            url:'/inbox',
            templateUrl: 'app/views/inbox.html',
            controller:"inboxController",
            resolve:{
              inboxData: function(Mailsrv){
                return Mailsrv.fetchInbox();
              }
            }
        })
        .state('sent', {
                url:'/sent',
                templateUrl: 'app/views/sent.html',
                controller:"outboxController",
                resolve:{
                  outboxData: function(Mailsrv){
                    return Mailsrv.fetchSent();
                  }
                }
        })
        .state('draft', {
                url:'/draft',
                templateUrl: 'app/views/draft.html',
                controller:"draftController",
                resolve:{
                  draftData: function(Mailsrv){
                    return Mailsrv.fetchDraft();
                  }
                }
            })
            .state('starred', {
                    url:'/starred',
                    templateUrl: 'app/views/star.html',
                    controller:"starController",
                    resolve:{
                      stardraftData: function(Mailsrv){
                        return Mailsrv.fetchDraft();
                      },
                      staroutboxData: function(Mailsrv){
                        return Mailsrv.fetchSent();
                      },
                      starinboxData: function(Mailsrv){
                        return Mailsrv.fetchInbox();
                      },
                      starData: function(Mailsrv){
                        return Mailsrv.fetchStar();
                      }
                    }
                })


});
