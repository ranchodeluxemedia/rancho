<?php 

$shows = new CPT('show', array(
  'supports' => array( 'title', 'thumbnail' )
));

$shows->menu_icon( 'dashicons-calendar-alt' );