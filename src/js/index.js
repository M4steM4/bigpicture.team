if (module.hot) {
    console.log("test ");
    module.hot.accept();
}

import './index.scss';


$(document).ready(function() {
  var code = "";

  for(var i = 0; i < 9; i++) {
    code += `        <!--panel -->
            <div class=" col-sm-4">
              <!-- Normal Demo-->
                <!-- Post-->
                <div class="post-module">
                  <!-- Thumbnail-->
                  <div class="thumbnail">
                    <div class="date">
                      <div class="day">27</div>
                      <div class="month">Mar</div>
                    </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                  </div>
                  <!-- Post Content-->
                  <div class="post-content">
                    <div class="category">Photos</div>
                    <h1 class="title">City Lights in New York</h1>
                    <h2 class="sub_title">The city that never sleeps.</h2>
                    <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                    <div class="post-meta">
                      <span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span>
                    </div>
                  </div>
            </div>
          </div>`;
  }
  $('.here').html(code);
});
