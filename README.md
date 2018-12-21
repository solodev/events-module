# events-module

## Prerequisites
<ul>
	<li><a target="_blank" href="https://getbootstrap.com/">Boostrap4</a></li>
	<li><a target="_blank" href="https://fontawesome.com/">FontAwesome5</a></li>
</ul>

## Step 1: Add the Form
 - events-form.tpl

Create a calendar for the Events and upload the following form 

```
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a aria-expanded="true" data-toggle="collapse" href="#collapseStatus">Post Status<span
            class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse in" id="collapseStatus">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3">
            <h2><label class="label-control" for="post_status">Post Status</label></h2>
            <select class="form-control" name="post_status" type="text">
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          <div class="col-md-3">
            <h2><label class="label-control" for="post_author">Post Author</label></h2>
            <select class="form-control" name="post_author" type="text">
              <option value="None">None</option>
              <option value="AUTHOR_NAME">AUTHOR_NAME</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a aria-expanded="true" data-toggle="collapse" href="#collapseImages">Image Uploads <span
            class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse in" id="collapseImages">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-6" id="listingImage">
            <h2><label class="label-control" for="event_image">Event Image</label></h2>

            <p class="subText">Dimensions: 796px by 333px.</p>
            <input class="file_upload" id="event_image" name="event_image" required="" type="file" />
          </div>

          <div class="col-md-6" id="rssImage">
            <h2><label class="label-control" for="event_featured">Event Featured</label></h2>
            <input id="event_featured" name="event_featured" required="" type="checkbox" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h2><label class="label-control" for="event_archived">Archived?</label></h2>
            <select class="form-control" id="event_archived" name="event_archived">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a aria-expanded="true" data-toggle="collapse" href="#collapseEvtInfo">Event Location<span
            class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse in" id="collapseEvtInfo">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-4">
            <h2><label class="label-control" for="location_name">Location Name</label></h2>
            <input class="form-control" id="location_name" name="location_name" type="text" />
          </div>

          <div class="col-md-4">
            <h2><label class="label-control" for="event_address">Address</label></h2>
            <input class="form-control" id="event_address" name="event_address" type="text" />
          </div>

          <div class="col-md-4">
            <h2><label class="label-control" for="event_city">City</label></h2>
            <input class="form-control" id="event_city" name="event_city" type="text" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-md-3">
            <h2><label class="label-control" for="event_state">State</label></h2>
            <input class="form-control" id="event_state" name="event_state" type="text" />
          </div>

          <div class="col-md-6 mt-md-3">
            <h2><label class="label-control" for="event_zip">Zip Code</label></h2>
            <input class="form-control" id="event_zip" name="event_zip" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a aria-expanded="true" data-toggle="collapse" href="#collapseContent">Post Content<span
            class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse in" id="collapseContent">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="heading_title">Heading Overwrite</label></h2>

            <p class="subText">(Optional) If specified, this will overwrite the article's title and become the main
              heading.</p>
            <input class="form-control" id="heading_title" name="heading_title" type="text" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_intro">Intro/Subtitle</label></h2>

            <p class="subText">(Required) Content that appears before the Body Content and the introductory paragraph
              on the eventroll.</p>
            <textarea class="form-control" id="post_intro" name="post_intro" required=""></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_content">Body Content</label></h2>

            <p class="subText">(Required) The main content section for an article.</p>
            <textarea class="wysiwyg" id="post_content" name="post_content" required=""></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" href="#collapseMeta">META Data <span class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse" id="collapseMeta">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_title">Meta Title</label></h2>

            <p class="subText">(Optional) Include a custom META Title that will show in your browser tab and in the
              page's source code.</p>
            <input class="form-control" id="meta_title" name="meta_title" type="text" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_description">Meta Description</label></h2>

            <p class="subText">(Optional) Include a custom META Description that search engines will index. 50-160
              Characters</p>
            <textarea class="form-control" id="meta_description" name="meta_description"></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_keywords">Meta Keywords</label></h2>

            <p class="subText">(Optional) Include the main keywords of the event article.</p>
            <textarea class="form-control" id="meta_keywords" name="meta_keywords"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" href="#collapseAdvanced">Advanced <span class="toggle"
            aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse" id="collapseAdvanced">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_javascript">Custom JavaScript</label></h2>

            <p class="subText">(Optional) Use the following textbox to embed any custom JavaScript including tracking
              pixels and Google Analytics scripts. Be sure to open your JavaScript with a &lt;script&gt; tag and close
              everything with a &lt;/script&gt; tag.</p>
            <textarea class="form-control" id="post_javascript" name="post_javascript"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
        if(isset($dataVars['calendar_entry_id'])){     
          $calendar_entry = new Calendar_Entry($dataVars['calendar_entry_id']);
          if($calendar_entry->path) { 
      ?>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" href="#collapseURL">Post URL <span class="toggle" aria-hidden="true"></span></a></h4>
    </div>

    <div class="panel-collapse collapse in" id="collapseURL">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <p class="subText">You can access this event post at the following URL:</p>
            <a href="https://www.100k-theme.com<?= $calendar_entry->path ?>" target="_blank">https://www.100k-theme.com
              <?= $calendar_entry->path ?></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php 
          } 
        }
       ?>
<script>
  $('.wysiwyg').ckeditor(function () {}, {
    customConfig: '/CK/config.js',
    height: '600px',
    basePath: '/CK/',
    toolbar: 'WP'
  });
</script>

```

## Step 2: Add the Repeater
 - careers-repeater.tpl

Add the following repeater shortcode. 

```
[repeater id='4' pages="22" order="start_time desc" display_type="news" where="post_status='Published'"]
<a href="{{path}}" class="text-black">
  <div class="row pb-4">
    <div class="col-sm-2  mx-auto mx-sm-0 mt-3 mt-sm-0 ">
      <div class="bg-secondary p-2 text-white text-center">
        <p class="m-0 lead"><strong>[print_date format="M" timestamp="{{start_time}}"]</strong></p>
        <p class="h3 mb-0">[print_date format="d" timestamp="{{start_time}}"]</p>
      </div>
    </div>
    <div class="col-sm-10   mt-2 mt-sm-0">
      <p class="text-uppercase mb-0"><strong><span class="text-primary">
        [entry_categories_repeat id="{{calendar_entry_id}}"]     
          {{{title}}}            
        [/entry_categories_repeat] </span> | <span>[print_date format="F d, Y" timestamp="{{start_time}}"]</span></strong></p>
      <h2 class="h3 mb-2">{{event_title}}</h2>
      <p class="post-intro">{{post_intro}}</p>
    </div>
  </div>
</a>
[/repeater]
```

## Step 3: Add the Detail Template
 - careers-detail.tpl

```
[entry]
<div class="row">
  <div class="col-sm-8">
    <p class="text-primary"><strong>[print_date format="F d, Y g:i a" timestamp="{{start_time}}"] - [print_date format="F d, Y g:i a" timestamp="{{end_time}}"]</strong></p>
  </div>
</div>
<div class="row my-4">
  <div class="col-md-6 col-lg-8">
    <div class="card rounded-0">
      <div class="card-title border-bottom">
        <h3 class="h4 text-secondary bg-light-gray p-3 mb-0">About This Event</h3>
      </div>
      <div class="card-body">
        {{post_content}}
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-4 mt-4 mt-md-0">
    <div class="card rounded-0">
      <div class="card-title border-bottom">
        <h3 class="h4 text-secondary bg-light-gray p-3 mb-0">When &amp; Where</h3>
      </div>
      <div class="card-body">
        <iframe src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q={{event_address}}%2C+{{event_city}}%2C+{{event_state}}+{{event_zip}}&ie=UTF8&z=12&t=m&iwloc=near&output=embed" frameborder="0" width="100%" height="200" allowfullscreen></iframe>
        <p class="mt-3">{{event_address}} <br>{{event_city}}, {{event_state}} {{event_zip}}</p>
        <p>[print_date format="F d, Y g:i a" timestamp="{{start_time}}"] -<br /> [print_date format="F d, Y g:i a" timestamp="{{end_time}}"]</p>
        <div class="mt-4">
          <a class="h5 btn btn-primary p-2 px-3 mb-2 text-left" href='https://calendar.google.com/calendar/r/eventedit?text={{event_title}}&dates=[print_date format="Ymd" timestamp="{{start_time}}"]T[print_date format="His" timestamp="{{start_time}}"]/[print_date format="Ymd" timestamp="{{end_time}}"]T[print_date format="His" timestamp="{{end_time}}"]&details={{post_intro}}&location={{event_address}} {{event_city}}, {{event_state}} {{event_zip}}' target="_blank">
            <i class="fas fa-calendar-alt fa-lg pr-2"></i> Add to Google Calendar
          </a>
        </div>
      </div>
    </div>
    <div class="card mt-4 rounded-0">
      <div class="card-title border-bottom">
        <h2 class="h4 text-secondary bg-light-gray p-3 mb-0">Contact Information</h2>
      </div>
      <div class="card-body">
        <p>Email: <a href="mailto:info@email.com">info@email.com</a></p>
      </div>
    </div>
  </div>
</div>
[/entry]
```

## Step 4: Add the JavaScript
 - /_/js/events.js
 
 ```
             newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 70) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        } else {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 50) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        }
    }

    var postIntrosSmall = document.getElementsByClassName('post-intro-small');
    var newPostIntroSmall;

    for (var i = 0; i < postIntrosSmall.length; i++) {
        if (postIntrosSmall[i].textContent.length > 22) {
            newPostIntroSmall = document.createTextNode(postIntrosSmall[i].textContent.substring(0, 18) + "...");

            postIntrosSmall[i].textContent = "";
            postIntrosSmall[i].appendChild(newPostIntroSmall);
        }
    }
};
 
 ```
