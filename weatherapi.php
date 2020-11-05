<?php
/**
* @package weatherapi
*/
/*
Plugin name: Weather Api Plugin- Ginder
Plugin URI: http://weatherapi.com/plugin
Description: Ovo je moj prvi napisani plugin.
Version: 1.0.0
Author: Filip ginder
Author URI: https://snimanjeizvazduha.rs/
license: GPLv2 or later
Text Domain: weatherapi-plugin
*/

defined( 'ABSPATH' ) or die('Hej, ne mozete pristupiti ovom failu');




 if( ! class_exists( 'weatherapi' ))
 {


class weatherapi
{
    public $plugin;

    function __construct(){
       $this->plugin = plugin_basename( __FILE__ );   //dinamicki uzimanje imena plagina
    }

    function register(){

        add_filter("plugin_action_links_$this->plugin", array( $this, 'settings_link') );  //uzimanje liste linkova od plagina i slanja u funkciju settings-link

        add_action('admin_menu', array($this, 'add_admin_pages'));

       add_action( 'wp_enqueue_scripts', array( $this, 'scripta_home_page_js') );  

       add_action('init', array( $this, 'weatherapi'));  
 
    }


    public function settings_link( $links ){
        $settings_link = '<a href="options-general.php?page=weatherapi_plugin">Podesavanja</a>';
        array_push($links, $settings_link);
        return $links;
    }

    public function add_admin_pages(){
      add_menu_page('Weather-Api Plugin', 'Weather-Api', 'manage_options', 'weatherapi_plugin', array($this, 'admin_index'), 'dashicons-admin-site', 110 );
    }

            public function admin_index(){
               require_once plugin_dir_path( __FILE__ ) . 'teamplates/admin.php';
            }

    function scripta_home_page_js()
    {  
      wp_enqueue_style('mystyle', plugins_url( '/src/mystyle.css', __FILE__ ) );
      wp_enqueue_script('scripta', plugins_url( '/src/myscript.js', __FILE__ ),array('jquery') );  
    }

    public function weatherapi()
    {
      add_shortcode('vremenska_prognoza', 'vremenska_prognoza_api');

        function vremenska_prognoza_api()
        {
        

        $html = '';
        $html .= '<div id="glavni">';

        $html .='<div id="div_select">';

        $html .='<select name="cars" id="select">';
        $html .='<option value="beograd" selected>Beograd</option>';
        $html .='<option value="novi sad">Novi sad</option>';
        $html .='<option value="kragujevac">Kragujevac</option>';
        $html .='<option value="niš">Nis</option>';
        $html .='<option value="cacak">Cacak</option>';
        $html .='<option value="subotica">Subotica</option>';
        $html .='</select>';


        $html .='</div>';


        $html .='<div id="ime_grada">';
        $html .='</div>';


        $html .='<div id="dan_u_nedelji"></div>';
        $html .='<div id="vreme"></div>';
        $html .='<div id=""></div>';



        $html .='<div id="temperature_div">';  //temperature

        $html .='<div id="slicica_div">';
        $html .='<span id="slicica"></span><span></span>';
        $html .='</div>';

        $html .='<div id="opis_div">';
        $html .='<span id="opis"></span><span></span>';
        $html .='</div>';

        $html .='<div id="trenutna_temperatura_div">';
        $html .='<span>Trenutna temp. </span><span id="trenutna_temperatura"></span><span>&#176;C</span>';
        $html .='</div>';

        $html .='<div id="maximalna_temperatura_div">';
        $html .='<span>Maksimalna temp. </span><span id="maximalna_temperatura"></span><span>&#176;C</span>';
        $html .='</div>';

        $html .='</div>';   //temperature


        $html .='<div>';

        $html .='<div id="trenutni_osecaj_div">';
        $html .='<span>Realni osecaj </span><span id="trenutni_osecaj"></span><span>&#176;C</span>';
        $html .='</div>';

        $html .='<div id="pritisak_vazduha_div">';
        $html .='<span>Pritisak </span><span id="pritisak_vazduha"></span><span>hPa</span>';
        $html .='</div>';

        $html .='<div id="vlaznost_vazduha_div">';
        $html .='<span>Vlaznost </span><span id="vlaznost_vazduha"></span><span>%</span>';
        $html .='</div>';

        $html .='</div>';
  

        $html .= '</div>';  //glavni div


        return $html;
        }

    }

}


  $weatherapi = new weatherapi();
  $weatherapi->register();


 // register_activation_hook( __FILE__, array( $scrolltotop , 'activate') );

 // register_deactivation_hook( __FILE__, array( 'Deactivate' , 'deactivate') );

}