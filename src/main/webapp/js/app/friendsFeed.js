define(function() {
      //페이지가 완전히 로드된 뒤에 실행
      var app = angular.module('friendsFeed', []);

  
  //친구 최근 게시물
  app.controller('friendFeedCtrl', ['$http', function($http) {
    var parent = this;
    $http.get('feed/friendFeed.do').success(function(result){
       parent.feeds = result.data;
    });
    
  }]);
  
  
  //비친구 최근 게시물
  app.controller('noneFriendFeedCtrl', function() {
    this.feeds = nonfriends;
  });

  var nonfriends = [
    {
      name: '한효주',
      profile: 'images/woman1.jpg',
      date:'오늘저녁6시',
      headcount: '1/2',
      pasttime: '1 hours ago',
      content: '냄비 필요하신분 있으신가요?? 깨끗하고 거의 안썼어요',
      category: 1
    },
    {
      name: '한지민',
      profile: 'images/woman2.jpg',
      date:'오늘저녁6시30분',
      headcount: '0/2',
      pasttime: '30 minutes ago',
      content: '고향에서 어머니가 반찬을 보내주시는데, 이번주 내내 출장가있어서 받지를 못하네요.. 받아주실분! 부탁드려요!!',
      category: 2
      
    },
    {
      name: '한예슬',
      profile: 'images/woman4.jpg',
      date:'오늘저녁8시30분',
      headcount: '1/3',
      pasttime: '30 minutes ago',
      content: '심야영화 볼사람 있나요? 베테랑 같이봐요! 끝나고 맥주 간단하게 한잔 콜?',
      category: 3
      
    }
  ];
 
});


