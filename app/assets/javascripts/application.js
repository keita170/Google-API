// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

/*global google*/

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // latが緯度で lngが経度
    center: { lat: 35.681236, lng: 139.767125 },
    zoom: 14,
  });

 // マーカーを置く
  var marker = new google.maps.Marker({
      position: {lat: 35.681236, lng: 139.767125}, // マーカーが指す緯度経度
      map: map,　                             // 描画するマップ
      title: "ここが東京駅",   // ツールチップ
  });
}