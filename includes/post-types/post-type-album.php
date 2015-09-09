<?php 

$shows = new CPT('album', array(
  'supports' => array( 'title', 'thumbnail' )
));

$shows->menu_icon( 'dashicons-format-audio' );