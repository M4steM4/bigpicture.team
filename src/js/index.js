if (module.hot) {
  module.hot.accept();
}

import './index.scss';


$(document).ready(function() {

  function backgroundEvent() {
    var background = {}
    background.initializr = function () {
      var $this = this;
      // Option
      $this.id = "#background"; // ID
      $this.style = { bubbles_color:"#911" , stroke_width:0 }; // Color
      $this.bubbles_number = 10; // Count
      $this.speed = [2000, 8000]; //milliseconds
      $this.max_bubbles_height = $this.height;
      $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random
      if ($($this.id).lenght > 0) {
        $("#"+$this.id).remove();
      }
      // Setting
      $this.object = $("<div style='z-index:-1; margin:0; padding:0; overflow:hidden; position:fixed;bottom:0' id='"+$this.id+"'> </div>'").appendTo("body");
      $this.ww = $(window).width();
      $this.wh = $(window).height();
      $this.width = $this.object.width($this.ww);
      $this.height = $this.object.height($this.wh);

      for (i = 0; i < $this.bubbles_number; i++) {
        $this.generate_bubbles();
      }
    }
    // Create function
    background.generate_bubbles = function() {
      var $this = this;
      var base = $("<div class='star'>&#9733;</div>");
      var bolla = base.css({"font-size": "50px"});
      var rn_size = $this.ran(.6,1.2);

      bolla.css({"transform":"scale("+rn_size+") rotate("+$this.ran(-360,360)+"deg)", top:$this.wh+100, left:$this.ran(-60, $this.ww+60)});
      bolla.appendTo($this.object);
      bolla.transit({top: $this.ran($this.wh/2, $this.wh/10), "transform":"scale("+rn_size+") rotate("+$this.ran(-360,360)+"deg)", opacity: 0},$this.ran($this.speed[0], $this.speed[1]), function() {
        $(this).remove();
        $this.generate_bubbles();
      });
    }
    // Random fucntion
    background.ran = function(from, to, arr) {
      if(arr) {
        return Math.random() * (to - from + 1) + from;
      } else {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }
    }
    background.initializr();
  }


  var code = "";
  var nav = $('.navbar');

  nav.append('<li class="marker"></li>');
  nav.on("mouseover" , "a" , function () {
    var tap = $(this).closest('.navbar');
    var mrkWidth = $(this).parent('li').width();
    var marker = tap.find('.marker');
    var nx = $(".navbar").offset();
    var lx = $(this).parent('li').offset();
    var left = lx.left - nx.left;
    nav.find('li').removeClass('active');

    $(this).parent().addClass('active');

    marker.removeClass("anim").css({ "width" : mrkWidth, "left" : left });
    setTimeout(function () {
      marker.addClass("anim");
    }, 200);
  });



  var height = $(window).scrollTop();

  $(window).on('mousewheel', function(e) {
    height = $(window).scrollTop();
    if (height > 700) {

    }
  });





  for(var i = 0; i < 9; i++) {
    code += `
    <div class=" col-sm-4">
      <div class="post-module">
        <div class="thumbnail">
          <div class="date">` + (i + 1) + `</div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
        </div>
        <div class="post-content">
          <button class="category">More</button>
          <h1 class="title">City Lights in New York</h1>
          <h2 class="sub_title">Bigpictureteam project</h2>
            <div class="post-meta">
              <span class="timestamp"><i class="fa fa-clock-">*</i> 6 days</span><span class="comments"><i class="fa fa-comments">* </i><a href="#">5 people</a></span>
            </div>
        </div>
      </div>
    </div>`;
  }
  $('.here').html(code);


  backgroundEvent();

});
